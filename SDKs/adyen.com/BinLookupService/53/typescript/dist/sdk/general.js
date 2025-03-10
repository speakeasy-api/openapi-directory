"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.General = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
var General = /** @class */ (function () {
    function General(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Check if 3D Secure is available
     *
     * @remarks
     * Verifies whether 3D Secure is available for the specified BIN or card brand. For 3D Secure 2, this endpoint also returns device fingerprinting keys.
     *
     * For more information, refer to [3D Secure 2](https://docs.adyen.com/online-payments/3d-secure/native-3ds2).
     */
    General.prototype.postGet3dsAvailability = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.ThreeDSAvailabilityRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/get3dsAvailability";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "request", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostGet3dsAvailabilitySecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PostGet3dsAvailabilityResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.threeDSAvailabilityResponse = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ThreeDSAvailabilityResponse);
                    }
                    break;
                case [400, 401, 403, 422, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.serviceError = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ServiceError);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get a fees cost estimate
     *
     * @remarks
     * >This API is available only for merchants operating in Australia, the EU, and the UK.
     *
     * Use the Adyen Cost Estimation API to pre-calculate interchange and scheme fee costs. Knowing these costs prior actual payment authorisation gives you an opportunity to charge those costs to the cardholder, if necessary.
     *
     * To retrieve this information, make the call to the `/getCostEstimate` endpoint. The response to this call contains the amount of the interchange and scheme fees charged by the network for this transaction, and also which surcharging policy is possible (based on current regulations).
     *
     * > Since not all information is known in advance (for example, if the cardholder will successfully authenticate via 3D Secure or if you also plan to provide additional Level 2/3 data), the returned amounts are based on a set of assumption criteria you define in the `assumptions` parameter.
     */
    General.prototype.postGetCostEstimate = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.CostEstimateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/getCostEstimate";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "request", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.PostGetCostEstimateSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.PostGetCostEstimateResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.costEstimateResponse = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.CostEstimateResponse);
                    }
                    break;
                case [400, 401, 403, 422, 500].includes(httpRes === null || httpRes === void 0 ? void 0 : httpRes.status):
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.serviceError = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ServiceError);
                    }
                    break;
            }
            return res;
        });
    };
    return General;
}());
exports.General = General;
