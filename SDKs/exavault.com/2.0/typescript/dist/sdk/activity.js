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
exports.Activity = void 0;
var operations = __importStar(require("./models/operations"));
var utils = __importStar(require("../internal/utils"));
var Activity = /** @class */ (function () {
    function Activity(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * getSessionLogs - Get activity logs
     *
     * Returns the detailed activity logs for your account. Optional query paramaters will filter the returned results based on a number of options including usernames, activity types, or date ranges.
     *
     * **NOTE:** Total Results will always return as 0 to avoid quering data you're not using and stay as performant as possible.
     *
     * **Operation Types**
     * Session activity is logged with an operation type that is different from what is visible through the [activity log interface in the web file manager](/docs/account/10-activity-logs/00-activity-logs). Consult the table below to compare the two:
     *
     * | File Manager Value | API Value | Notes |
     * |-----|----|---|
     * | Connect | PASS | |
     * | Disconnect | EXIT | |
     * | Upload | STOR | |
     * | Download | RETR | |
     * | Delete | DELE | |
     * | Create Folder | MKD | |
     * | Rename | RNTO | |
     * | Move | MOVE | |
     * | Copy | COPY | |
     * | Compress | COMPR | |
     * | Extract | EXTRACT | |
     * | Shared Folders | SHARE | |
     * | Send Files | SEND | |
     * | Receive Files | RECV | |
     * | _N/A_ | EDIT\_SEND | Update send. Not shown in file manager |
     * | Update Share | EDIT\_SHARE| |
     * | Update Receive | EDIT\_RECV | |
     * | Delete Send | DELE\_SEND | |
     * | Delete Receive | DELE\_RECV | |
     * | Delete Share | DELE\_SHARE | |
     * | Create Notification | NOTIFY | |
     * | Update Notification | EDIT\_NTFY| |
     * | Delete Notification | DELE\_NTFY | |
     * | Create User | USER | |
     * | Update User | EDIT\_USER | |
     * | Delete User | DELE\_USER | |
     * | _N/A_ | DFA | Create direct link. Not shown in file manager |
     * | _N/A_ | EDIT\_DFA | Update direct link options. Not shown in file manager |
     * | _N/A_ | DELE\_DFA | Deactivate direct link. Not shown in file manager|
     *
    **/
    Activity.prototype.getSessionLogs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetSessionLogsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/activity/session";
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.sessionActivityResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * getWebhookLogs - Get webhook logs
     *
     * Returns the webhook logs for your account. Use the available query parameters to filter the listing of activity that is returned.
     *
     * **NOTE:** Total Results will always return as 0 to avoid querying data you're not using and stay as performant as possible.
     *
     * **Event Types**
     *
     * Webhooks are triggered by enabled event types for your account, which are configured on the [developer settings page](/docs/account/09-settings/06-developer-settings). Not all event types may be allowed for your account type. These are the valid options for event types:
     *
     * - resources.upload
     * - resources.download
     * - resources.delete
     * - resources.createFolder
     * - resources.rename
     * - resources.move
     * - resources.copy
     * - resources.compress
     * - resources.extract
     * - shares.formSubmit
     *
    **/
    Activity.prototype.getWebhookLogs = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetWebhookLogsRequest(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/activity/webhooks";
        var client = this._defaultClient;
        var headers = __assign(__assign({}, utils.getHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = utils.getQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var r = client.request(__assign({ url: url, method: "get", headers: headers }, requestConfig));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.webhookActivityResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        });
    };
    return Activity;
}());
exports.Activity = Activity;
