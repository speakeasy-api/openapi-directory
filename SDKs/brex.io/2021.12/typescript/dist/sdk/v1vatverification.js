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
exports.V1VatVerification = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
/**
 * VAT Verification methods
 */
var V1VatVerification = /** @class */ (function () {
    function V1VatVerification(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Returns a verification result
     *
     * @remarks
     * Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.
     */
    V1VatVerification.prototype.vatBasic = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.VatBasicRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/api/v1/vat-verification/basic-check/{country}", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "form"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.VatBasicSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.VatBasicResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.vatBasic200ApplicationJSONObject = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.VatBasic200ApplicationJSON);
                    }
                    break;
                default:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.vatBasicDefaultApplicationJSONObject = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.VatBasicDefaultApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Returns a verification result and company data
     *
     * @remarks
     * Extended verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.
     */
    V1VatVerification.prototype.vatComprehensive = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.VatComprehensiveRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/api/v1/vat-verification/comprehensive-check/{country}", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "form"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.VatComprehensiveSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.VatComprehensiveResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.vatComprehensive200ApplicationJSONObject = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.VatComprehensive200ApplicationJSON);
                    }
                    break;
                default:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.vatComprehensiveDefaultApplicationJSONObject =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.VatComprehensiveDefaultApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Returns a level two verification result
     *
     * @remarks
     * Second Level Verification of VAT number against BMF Austria. Optional confirmation parameter can be provided to order a Confirmation Report.
     */
    V1VatVerification.prototype.vatLevelTwo = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.VatLevelTwoRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/api/v1/vat-verification/leveltwo-check/{country}", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "form"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.VatLevelTwoSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.VatLevelTwoResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.vatLevelTwo200ApplicationJSONObject = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.VatLevelTwo200ApplicationJSON);
                    }
                    break;
                default:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.vatLevelTwoDefaultApplicationJSONObject = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.VatLevelTwoDefaultApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Returns a list of vat numbers with additional data
     *
     * @remarks
     * Reverse VAT Lookup: Search for companies and their VAT numbers by company name. Search is forwarded to a provider.
     */
    V1VatVerification.prototype.vatLookup = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.VatLookupRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/api/v1/vat-verification/lookup/{country}", req);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "form"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.VatLookupSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.VatLookupResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.vatLookup200ApplicationJSONObject = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.VatLookup200ApplicationJSON);
                    }
                    break;
                default:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.vatLookupDefaultApplicationJSONObject = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, operations.VatLookupDefaultApplicationJSON);
                    }
                    break;
            }
            return res;
        });
    };
    return V1VatVerification;
}());
exports.V1VatVerification = V1VatVerification;
