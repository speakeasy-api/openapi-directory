"use strict";
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
exports.Ipmi = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Ipmi = /** @class */ (function () {
    function Ipmi(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * protocolIpmiGetArgs - Show the agent's IPMI argument structure
     *
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    Ipmi.prototype.protocolIpmiGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiGetArgsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/args", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.protocolIpmiGetArgs200ApplicationJSONObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolIpmiGetAttr - Show the outgoing message's attributes
     *
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
    **/
    Ipmi.prototype.protocolIpmiGetAttr = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiGetAttrRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/{attr}", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.protocolIpmiGetAttr200ApplicationJSONString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolIpmiGetConfig - Show the agent's IPMI configuration
     *
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    Ipmi.prototype.protocolIpmiGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiGetConfigRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/config", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.configIPMI = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolIpmiGetStatistics - Show the agent's IPMI statistics
     *
     * Statistics of fields indicated in the headers
    **/
    Ipmi.prototype.protocolIpmiGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiGetStatisticsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/statistics", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.protocolIpmiGetStatistics200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolIpmiGetStatsHdr - Show the IPMI statistics headers
     *
     * The headers of statistics fields
    **/
    Ipmi.prototype.protocolIpmiGetStatsHdr = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/ipmi/get/stats_hdr";
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.protocolIpmiGetStatsHdr200ApplicationJSONStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolIpmiGetTrace - Show the agent's IPMI traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    Ipmi.prototype.protocolIpmiGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiGetTraceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/get/trace", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.configIPMI = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolIpmiSetAttr - Set the outgoing message's attributes
     *
     * Attribute can be working_authtype ,session_id, outbound_seq, inbound_seq , field_N
    **/
    Ipmi.prototype.protocolIpmiSetAttr = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiSetAttrRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/{attr}/{value}", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "put" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.protocolIpmiSetAttr200ApplicationJSONString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolIpmiSetConfig - Set the agent's IPMI configuration
     *
     * Agent's IPMI configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    Ipmi.prototype.protocolIpmiSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiSetConfigRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/config/{argument}/{value}", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "put" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.protocolIpmiSetConfig200ApplicationJSONString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolIpmiSetTrace - Set the agent's IPMI traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    Ipmi.prototype.protocolIpmiSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolIpmiSetTraceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/ipmi/set/trace/{enableOrNot}", req.pathParams);
        var client = this._securityClient;
        var r = client.request(__assign({ url: url, method: "put" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.protocolIpmiSetTrace200ApplicationJSONString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    return Ipmi;
}());
exports.Ipmi = Ipmi;
