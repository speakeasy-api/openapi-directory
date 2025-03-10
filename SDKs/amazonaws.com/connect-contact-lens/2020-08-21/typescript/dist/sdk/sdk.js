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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
var axios_1 = __importDefault(require("axios"));
/**
 * Contains the list of servers available to the SDK
 */
exports.ServerList = [
    /**
     * The Amazon Connect Contact Lens multi-region endpoint
     */
    "http://contact-lens.{region}.amazonaws.com",
    /**
     * The Amazon Connect Contact Lens multi-region endpoint
     */
    "https://contact-lens.{region}.amazonaws.com",
    /**
     * The Amazon Connect Contact Lens endpoint for China (Beijing) and China (Ningxia)
     */
    "http://contact-lens.{region}.amazonaws.com.cn",
    /**
     * The Amazon Connect Contact Lens endpoint for China (Beijing) and China (Ningxia)
     */
    "https://contact-lens.{region}.amazonaws.com.cn",
];
/**
 * <p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts.</p> <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
 *
 * @see {@link https://docs.aws.amazon.com/contact-lens/} - Amazon Web Services documentation
 */
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props === null || props === void 0 ? void 0 : props.serverURL) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient =
            (_b = props === null || props === void 0 ? void 0 : props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        if (props === null || props === void 0 ? void 0 : props.security) {
            var security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase))
                security = new shared.Security(props.security);
            this._securityClient = utils.createSecurityClient(this._defaultClient, security);
        }
        else {
            this._securityClient = this._defaultClient;
        }
    }
    /**
     * Provides a list of analysis segments for a real-time analysis session.
     */
    SDK.prototype.listRealtimeContactAnalysisSegments = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListRealtimeContactAnalysisSegmentsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") +
            "/realtime-contact-analysis/analysis-segments";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = utils.serializeRequestBody(req, "requestBody", "json"), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this._securityClient || this._defaultClient;
        var headers = __assign(__assign(__assign({}, utils.getHeadersFromRequest(req)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var queryParams = utils.serializeQueryParams(req);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        var r = client.request(__assign({ url: url + queryParams, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.ListRealtimeContactAnalysisSegmentsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.listRealtimeContactAnalysisSegmentsResponse =
                            utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.ListRealtimeContactAnalysisSegmentsResponse);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 480:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.invalidRequestException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 481:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 482:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 483:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.internalServiceException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 484:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    return SDK;
}());
exports.SDK = SDK;
