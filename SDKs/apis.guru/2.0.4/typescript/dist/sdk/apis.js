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
exports.APIs = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
/**
 * Actions relating to APIs in the collection
 */
var APIs = /** @class */ (function () {
    function APIs(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Get basic metrics
     *
     * @remarks
     * Some basic metrics for the entire directory.
     * Just stunning numbers to put on a front page and are intended purely for WoW effect :)
     *
     */
    APIs.prototype.getMetrics = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/metrics.json";
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.GetMetricsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.metrics = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Metrics);
                    }
                    if (utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                        res.metrics = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Metrics);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * List all APIs
     *
     * @remarks
     * List all APIs in the directory.
     * Returns links to OpenAPI specification for each API in the directory.
     * If API exist in multiple versions `preferred` one is explicitly marked.
     *
     * Some basic info from OpenAPI spec is cached inside each object.
     * This allows to generate some simple views without need to fetch OpenAPI spec for each API.
     *
     */
    APIs.prototype.listAPIs = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/list.json";
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.ListAPIsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.apIs = {};
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.apIs = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Api, resFieldDepth);
                    }
                    if (utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                        res.apIs = {};
                        var resFieldDepth = utils.getResFieldDepth(res);
                        res.apIs = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Api, resFieldDepth);
                    }
                    break;
            }
            return res;
        });
    };
    return APIs;
}());
exports.APIs = APIs;
