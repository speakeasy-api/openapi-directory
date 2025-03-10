"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var assignment_1 = require("./assignment");
var auth_1 = require("./auth");
var contribution_1 = require("./contribution");
var form_1 = require("./form");
var info_1 = require("./info");
var media_1 = require("./media");
var notifications_1 = require("./notifications");
var subscriptions_1 = require("./subscriptions");
var tag_1 = require("./tag");
var user_1 = require("./user");
var axios_1 = __importDefault(require("axios"));
/**
 * Contains the list of servers available to the SDK
 */
exports.ServerList = ["https://api.contribly.com/1"];
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props === null || props === void 0 ? void 0 : props.serverURL) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient =
            (_b = props === null || props === void 0 ? void 0 : props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.assignment = new assignment_1.Assignment(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.auth = new auth_1.Auth(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.contribution = new contribution_1.Contribution(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.form = new form_1.Form(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.info = new info_1.Info(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.media = new media_1.Media(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.notifications = new notifications_1.Notifications(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.subscriptions = new subscriptions_1.Subscriptions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.tag = new tag_1.Tag(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.user = new user_1.User(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
