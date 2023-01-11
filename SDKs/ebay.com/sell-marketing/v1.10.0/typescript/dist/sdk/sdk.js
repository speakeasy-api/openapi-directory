"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var ad_1 = require("./ad");
var adreport_1 = require("./adreport");
var adreportmetadata_1 = require("./adreportmetadata");
var adreporttask_1 = require("./adreporttask");
var campaign_1 = require("./campaign");
var itempricemarkdown_1 = require("./itempricemarkdown");
var itempromotion_1 = require("./itempromotion");
var promotion_1 = require("./promotion");
var promotionreport_1 = require("./promotionreport");
var promotionsummaryreport_1 = require("./promotionsummaryreport");
exports.ServerList = [
    "https://api.ebay.com{basePath}",
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
        this.ad = new ad_1.Ad(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.adReport = new adreport_1.AdReport(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.adReportMetadata = new adreportmetadata_1.AdReportMetadata(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.adReportTask = new adreporttask_1.AdReportTask(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.campaign = new campaign_1.Campaign(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.itemPriceMarkdown = new itempricemarkdown_1.ItemPriceMarkdown(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.itemPromotion = new itempromotion_1.ItemPromotion(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.promotion = new promotion_1.Promotion(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.promotionReport = new promotionreport_1.PromotionReport(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.promotionSummaryReport = new promotionsummaryreport_1.PromotionSummaryReport(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
