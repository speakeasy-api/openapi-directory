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
exports.Mqtt = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Mqtt = /** @class */ (function () {
    function Mqtt(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * protocolMqttClientGetProtstate - Show the agent's MQTT TCP connection state
     *
     * 0 - stopped, 2 - disconnected, 3 - connecting, 4 - connected, 5 - waiting for CONNACK, 6 - waiting for SUBACK, 7 - CONNACK received, in steady state
    **/
    Mqtt.prototype.protocolMqttClientGetProtstate = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientGetProtstateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/protstate", req.pathParams);
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
                        res.protocolMqttClientGetProtstate200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientGetState - Show the agent's MQTT state
     *
     * 0 means stopped, 1 means running
    **/
    Mqtt.prototype.protocolMqttClientGetState = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientGetStateRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/get/state", req.pathParams);
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
                        res.protocolMqttClientGetState200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientMessageCard - Show the agent's current messages' cardinality
     *
     * 0 or more
    **/
    Mqtt.prototype.protocolMqttClientMessageCard = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientMessageCardRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/card", req.pathParams);
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
                        res.protocolMqttClientMessageCard200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientMessageGet - Show the agent's message attributes
     *
     * Attribute can be topic, interval, count, sent , pre, post, properties(list of PUBLISH properties), properties.i (i-th PUBLISH property), properties.PROP-NAME (PUBLISH property with name PROP-NAME)
    **/
    Mqtt.prototype.protocolMqttClientMessageGet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientMessageGetRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/get/{msgNum}/{attr}", req.pathParams);
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
                        res.protocolMqttClientMessageGet200ApplicationJSONStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientMessageSet - Set the agent's message attributes
     *
     * Attribute can not be sent or properties . Use set/{msgNum}/count/{value} together with get/{msgNum}/count to throttle the outgoing MQTT message to the broker.
    **/
    Mqtt.prototype.protocolMqttClientMessageSet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientMessageSetRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/message/set/{msgNum}/{attr}/{value}", req.pathParams);
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
                        res.protocolMqttClientMessageSet200ApplicationJSONStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientResubscribe - Restart receiving messages from a subcription of the agent
     *
     * Restarts a subscription
    **/
    Mqtt.prototype.protocolMqttClientResubscribe = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientResubscribeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/resubscribe/{subNum}", req.pathParams);
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
                        res.protocolMqttClientResubscribe200ApplicationJSONString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientRuntimeAbort - Abort agent's MQTT TCP session without sending DISCONNECT command
     *
     * Abort a connection
    **/
    Mqtt.prototype.protocolMqttClientRuntimeAbort = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientRuntimeAbortRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/abort", req.pathParams);
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
                        res.protocolMqttClientRuntimeAbort200ApplicationJSONStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientRuntimeConnect - Start agent's MQTT TCP session
     *
     * Start a connection
    **/
    Mqtt.prototype.protocolMqttClientRuntimeConnect = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientRuntimeConnectRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/connect", req.pathParams);
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
                        res.protocolMqttClientRuntimeConnect200ApplicationJSONStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientRuntimeDisconnect - Disconnect agent's MQTT TCP session by sending DISCONNECT command
     *
     * Graceful disconnect
    **/
    Mqtt.prototype.protocolMqttClientRuntimeDisconnect = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientRuntimeDisconnectRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/runtime/disconnect", req.pathParams);
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
                        res.protocolMqttClientRuntimeDisconnect200ApplicationJSONStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetBroker - Set the agent's MQTT TCP connection target broker
     *
     * Broker IP address
    **/
    Mqtt.prototype.protocolMqttClientSetBroker = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetBrokerRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/broker/{brokerAddr}", req.pathParams);
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
                        res.protocolMqttClientSetBroker200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetCleansession - Set the agent's MQTT session
     *
     * 1 for clean session , 0 not
    **/
    Mqtt.prototype.protocolMqttClientSetCleansession = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetCleansessionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/cleansession/{cleanOrNot}", req.pathParams);
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
                        res.protocolMqttClientSetCleansession200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetClientid - Set the agent's MQTT client ID
     *
     * MQTT client ID
    **/
    Mqtt.prototype.protocolMqttClientSetClientid = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetClientidRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/clientid/{clientID}", req.pathParams);
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
                        res.protocolMqttClientSetClientid200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetKeepalive - Set the agent's MQTT TCP keepalive
     *
     * Keep alive the TCP connection
    **/
    Mqtt.prototype.protocolMqttClientSetKeepalive = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetKeepaliveRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/keepalive/{aliveTime}", req.pathParams);
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
                        res.protocolMqttClientSetKeepalive200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetOnDisconnect - Set the agent's MQTT disconnection action
     *
     * Action to take when MQTT session is disconnected
    **/
    Mqtt.prototype.protocolMqttClientSetOnDisconnect = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetOnDisconnectRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/on_disconnect/{action}", req.pathParams);
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
                        res.protocolMqttClientSetOnDisconnect200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetPassword - Set the agent's MQTT client password
     *
     * Client password
    **/
    Mqtt.prototype.protocolMqttClientSetPassword = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetPasswordRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/password/{password}", req.pathParams);
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
                        res.protocolMqttClientSetPassword200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetPort - Set the agent's MQTT TCP connection target port
     *
     * target TCP port
    **/
    Mqtt.prototype.protocolMqttClientSetPort = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetPortRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/port/{port}", req.pathParams);
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
                        res.protocolMqttClientSetPort200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetUsername - Set the agent's MQTT client username
     *
     * Client username
    **/
    Mqtt.prototype.protocolMqttClientSetUsername = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetUsernameRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/username/{username}", req.pathParams);
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
                        res.protocolMqttClientSetUsername200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetWillmsg - Set the agent's MQTT client's will
     *
     * Will message
    **/
    Mqtt.prototype.protocolMqttClientSetWillmsg = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetWillmsgRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willmsg/{msg}", req.pathParams);
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
                        res.protocolMqttClientSetWillmsg200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetWillqos - Set the agent's MQTT will message's QOS field
     *
     * QOS field
    **/
    Mqtt.prototype.protocolMqttClientSetWillqos = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetWillqosRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willqos/{qos}", req.pathParams);
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
                        res.protocolMqttClientSetWillqos200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetWillretain - Set the agent's MQTT retained will
     *
     * Retaining will
    **/
    Mqtt.prototype.protocolMqttClientSetWillretain = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetWillretainRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willretain/{retain}", req.pathParams);
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
                        res.protocolMqttClientSetWillretain200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSetWilltopic - Set the agent's MQTT client will's topic
     *
     * Will topic for the will message
    **/
    Mqtt.prototype.protocolMqttClientSetWilltopic = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSetWilltopicRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/set/willtopic/{topic}", req.pathParams);
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
                        res.protocolMqttClientSetWilltopic200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSubscribeCard - Show the agent's current subscriptions' cardinality
     *
     * 0 or more
    **/
    Mqtt.prototype.protocolMqttClientSubscribeCard = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSubscribeCardRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/card", req.pathParams);
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
                        res.protocolMqttClientSubscribeCard200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSubscribeGet - Show the agent's subscription attributes
     *
     * Attribute can be topic, properties(list of SUBSCRIBE properties), properties.i (i-th SUBSCRIBE property), properties.PROP-NAME (SUBSCRIBE property with name PROP-NAME)
    **/
    Mqtt.prototype.protocolMqttClientSubscribeGet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSubscribeGetRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/get/{subNum}/{attr}", req.pathParams);
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
                        res.protocolMqttClientSubscribeGet200ApplicationJSONStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientSubscribeSet - Set the agent's subscribe attributes
     *
     * Attribute can not be properties .
    **/
    Mqtt.prototype.protocolMqttClientSubscribeSet = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientSubscribeSetRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/subscribe/set/{subNum}/{attr}/{value}", req.pathParams);
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
                        res.protocolMqttClientSubscribeSet200ApplicationJSONStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttClientUnsubscribe - Stops receiving messages from a subcription of the agent
     *
     * Stops a subscription
    **/
    Mqtt.prototype.protocolMqttClientUnsubscribe = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttClientUnsubscribeRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/client/unsubscribe/{subNum}", req.pathParams);
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
                        res.protocolMqttClientUnsubscribe200ApplicationJSONString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttGetArgs - Show the agent's MQTT argument structure
     *
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    Mqtt.prototype.protocolMqttGetArgs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttGetArgsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/args", req.pathParams);
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
                        res.protocolMqttGetArgs200ApplicationJSONObject = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttGetConfig - Show the agent's MQTT configuration
     *
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    Mqtt.prototype.protocolMqttGetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttGetConfigRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/config", req.pathParams);
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
                        res.configMQTT = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttGetStatistics - Show the agent's MQTT statistics
     *
     * Statistics of fields indicated in the headers
    **/
    Mqtt.prototype.protocolMqttGetStatistics = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttGetStatisticsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/statistics", req.pathParams);
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
                        res.protocolMqttGetStatistics200ApplicationJSONInt32Integers = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttGetStatsHdr - Show the MQTT statistics headers
     *
     * The headers of statistics fields
    **/
    Mqtt.prototype.protocolMqttGetStatsHdr = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/mimic/protocol/msg/mqtt/get/stats_hdr";
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
                        res.protocolMqttGetStatsHdr200ApplicationJSONStrings = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttGetTrace - Show the agent's MQTT traffic tracing
     *
     * Trace 1 means enabled, 0 means not
    **/
    Mqtt.prototype.protocolMqttGetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttGetTraceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/get/trace", req.pathParams);
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
                        res.configMQTT = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttSetConfig - Set the agent's MQTT configuration
     *
     * Agent's MQTT configuration with port,rule,prompt,paging_prompt,userdb,keymap
    **/
    Mqtt.prototype.protocolMqttSetConfig = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttSetConfigRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/config/{argument}/{value}", req.pathParams);
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
                        res.protocolMqttSetConfig200ApplicationJSONString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    /**
     * protocolMqttSetTrace - Set the agent's MQTT traffic tracing
     *
     * 1 to enable, 0 to disable
    **/
    Mqtt.prototype.protocolMqttSetTrace = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ProtocolMqttSetTraceRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/mimic/agent/{agentNum}/protocol/msg/mqtt/set/trace/{enableOrNot}", req.pathParams);
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
                        res.protocolMqttSetTrace200ApplicationJSONString = JSON.stringify(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 400:
                    break;
            }
            return res;
        });
    };
    return Mqtt;
}());
exports.Mqtt = Mqtt;
