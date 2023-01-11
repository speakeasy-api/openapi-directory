"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var campaign_1 = require("./campaign");
var canvas_1 = require("./canvas");
var contentblocks_1 = require("./contentblocks");
var customevents_1 = require("./customevents");
var emaillistsandaddresses_1 = require("./emaillistsandaddresses");
var emailtemplates_1 = require("./emailtemplates");
var export_1 = require("./export");
var kpi_1 = require("./kpi");
var messaging_1 = require("./messaging");
var newsfeed_1 = require("./newsfeed");
var sms_1 = require("./sms");
var schedulemesages_1 = require("./schedulemesages");
var segment_1 = require("./segment");
var sessionanalytics_1 = require("./sessionanalytics");
var subscriptiongroups_1 = require("./subscriptiongroups");
var templates_1 = require("./templates");
exports.ServerList = [
    "https://rest.iad-01.braze.com",
];
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        this._securityClient = this._defaultClient;
        this.campaign = new campaign_1.Campaign(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.canvas = new canvas_1.Canvas(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.contentBlocks = new contentblocks_1.ContentBlocks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.customEvents = new customevents_1.CustomEvents(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.emailListsAndAddresses = new emaillistsandaddresses_1.EmailListsAndAddresses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.emailTemplates = new emailtemplates_1.EmailTemplates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.export = new export_1.Export(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.kpi = new kpi_1.Kpi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.messaging = new messaging_1.Messaging(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.newsFeed = new newsfeed_1.NewsFeed(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sms = new sms_1.Sms(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.scheduleMesages = new schedulemesages_1.ScheduleMesages(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.segment = new segment_1.Segment(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sessionAnalytics = new sessionanalytics_1.SessionAnalytics(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.subscriptionGroups = new subscriptiongroups_1.SubscriptionGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.templates = new templates_1.Templates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
