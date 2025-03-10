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
exports.Account = void 0;
var utils = __importStar(require("../internal/utils"));
var operations = __importStar(require("./models/operations"));
var shared = __importStar(require("./models/shared"));
/**
 * The Account service allows you to authenticate and manage a user account.
 */
var Account = /** @class */ (function () {
    function Account(defaultClient, securityClient, serverURL, language, sdkVersion, genVersion) {
        this._defaultClient = defaultClient;
        this._securityClient = securityClient;
        this._serverURL = serverURL;
        this._language = language;
        this._sdkVersion = sdkVersion;
        this._genVersion = genVersion;
    }
    /**
     * Create Password Recovery
     *
     * @remarks
     * Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](/docs/client/account#accountUpdateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.
     */
    Account.prototype.accountCreateRecovery = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccountCreateRecoveryRequestBody(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/recovery";
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
            security = new operations.AccountCreateRecoverySecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountCreateRecoveryResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.token = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Token);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Create Email Verification
     *
     * @remarks
     * Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](/docs/client/account#accountUpdateVerification). The verification link sent to the user's email address is valid for 7 days.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     *
     */
    Account.prototype.accountCreateVerification = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccountCreateVerificationRequestBody(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/verification";
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
            security = new operations.AccountCreateVerificationSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "post", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountCreateVerificationResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 201:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.token = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Token);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Delete Account
     *
     * @remarks
     * Delete a currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. This is done to avoid deleted accounts being overtaken by new users with the same email address. Any user-related resources like documents or storage files should be deleted separately.
     */
    Account.prototype.accountDelete = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account";
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountDeleteResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        });
    };
    /**
     * Delete Account Session
     *
     * @remarks
     * Use this endpoint to log out the currently logged in user from all their account sessions across all of their different devices. When using the option id argument, only the session unique ID provider will be deleted.
     */
    Account.prototype.accountDeleteSession = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccountDeleteSessionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/account/sessions/{sessionId}", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.AccountDeleteSessionSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountDeleteSessionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        });
    };
    /**
     * Delete All Account Sessions
     *
     * @remarks
     * Delete all sessions from the user account and remove any sessions cookies from the end client.
     */
    Account.prototype.accountDeleteSessions = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/sessions";
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "delete" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountDeleteSessionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 204:
                    break;
            }
            return res;
        });
    };
    /**
     * Get Account
     *
     * @remarks
     * Get currently logged in user data as JSON object.
     */
    Account.prototype.accountGet = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account";
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountGetResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.user = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.User);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get Account Logs
     *
     * @remarks
     * Get currently logged in user list of latest security activity logs. Each log returns user IP address, location and date and time of log.
     */
    Account.prototype.accountGetLogs = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/logs";
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountGetLogsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.logList = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.LogList);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get Account Preferences
     *
     * @remarks
     * Get currently logged in user preferences as a key-value object.
     */
    Account.prototype.accountGetPrefs = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/prefs";
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountGetPrefsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.preferences = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get Session By ID
     *
     * @remarks
     * Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.
     */
    Account.prototype.accountGetSession = function (req, security, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccountGetSessionRequest(req);
        }
        var baseURL = this._serverURL;
        var url = utils.generateURL(baseURL, "/account/sessions/{sessionId}", req);
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.AccountGetSessionSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountGetSessionResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.session = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Session);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Get Account Sessions
     *
     * @remarks
     * Get currently logged in user list of active sessions across different devices.
     */
    Account.prototype.accountGetSessions = function (config) {
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/sessions";
        var client = this._defaultClient;
        var r = client.request(__assign({ url: url, method: "get" }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountGetSessionsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.sessionList = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.SessionList);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Update Account Email
     *
     * @remarks
     * Update currently logged in user account email address. After changing user address, user confirmation status is being reset and a new confirmation mail is sent. For security measures, user password is required to complete this request.
     * This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.
     */
    Account.prototype.accountUpdateEmail = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccountUpdateEmailRequestBody(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/email";
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
            security = new operations.AccountUpdateEmailSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "patch", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountUpdateEmailResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.user = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.User);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Update Account Name
     *
     * @remarks
     * Update currently logged in user account name.
     */
    Account.prototype.accountUpdateName = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccountUpdateNameRequestBody(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/name";
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
            security = new operations.AccountUpdateNameSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "patch", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountUpdateNameResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.user = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.User);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Update Account Password
     *
     * @remarks
     * Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth and Team Invites, oldPassword is optional.
     */
    Account.prototype.accountUpdatePassword = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccountUpdatePasswordRequestBody(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/password";
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
            security = new operations.AccountUpdatePasswordSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "patch", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountUpdatePasswordResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.user = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.User);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Update Account Preferences
     *
     * @remarks
     * Update currently logged in user account preferences. You can pass only the specific settings you wish to update.
     */
    Account.prototype.accountUpdatePrefs = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccountUpdatePrefsRequestBody(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/prefs";
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
            security = new operations.AccountUpdatePrefsSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "patch", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountUpdatePrefsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.user = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.User);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Complete Password Recovery
     *
     * @remarks
     * Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](/docs/client/account#accountCreateRecovery) endpoint.
     *
     * Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.
     */
    Account.prototype.accountUpdateRecovery = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccountUpdateRecoveryRequestBody(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/recovery";
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
            security = new operations.AccountUpdateRecoverySecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountUpdateRecoveryResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.token = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Token);
                    }
                    break;
            }
            return res;
        });
    };
    /**
     * Complete Email Verification
     *
     * @remarks
     * Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.
     */
    Account.prototype.accountUpdateVerification = function (req, security, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AccountUpdateVerificationRequestBody(req);
        }
        var baseURL = this._serverURL;
        var url = baseURL.replace(/\/$/, "") + "/account/verification";
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
            security = new operations.AccountUpdateVerificationSecurity(security);
        }
        var client = utils.createSecurityClient(this._defaultClient, security);
        var headers = __assign(__assign({}, reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var r = client.request(__assign({ url: url, method: "put", headers: headers, data: reqBody }, config));
        return r.then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = new operations.AccountUpdateVerificationResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
            switch (true) {
                case (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == 200:
                    if (utils.matchContentType(contentType, "application/json")) {
                        res.token = utils.objectToClass(httpRes === null || httpRes === void 0 ? void 0 : httpRes.data, shared.Token);
                    }
                    break;
            }
            return res;
        });
    };
    return Account;
}());
exports.Account = Account;
