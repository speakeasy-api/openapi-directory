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
exports.Collection = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
var Collection = /** @class */ (function () {
    function Collection(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * List collection listings
     *
     * @remarks
     * List collection listings
     */
    Collection.prototype.collectionListingsAll = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionListingsAllRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/ecosystems/{ecosystem_id}/collections/{id}/listings", req);
        var client = this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.CollectionListingsAllResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getListingsResponse = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.GetListingsResponse);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * List collections
     *
     * @remarks
     * List collections
     */
    Collection.prototype.collectionsAll = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsAllRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/ecosystems/{ecosystem_id}/collections", req);
        var client = this._defaultClient;
        var queryParams = utils.serializeQueryParams(req);
        var r = client.request(__assign({ url: url + queryParams, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.CollectionsAllResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getCollectionsResponse = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.GetCollectionsResponse);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get collection
     *
     * @remarks
     * Get collection
     */
    Collection.prototype.collectionsOne = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.CollectionsOneRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/ecosystems/{ecosystem_id}/collections/{id}", req);
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.CollectionsOneResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.getCollectionResponse = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.GetCollectionResponse);
                    }
                    break;
            }
            return res;
        });
    };
    return Collection;
}());
exports.Collection = Collection;
