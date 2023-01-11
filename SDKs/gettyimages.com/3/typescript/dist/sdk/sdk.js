"use strict";
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
var axios_1 = __importDefault(require("axios"));
var utils = __importStar(require("../internal/utils"));
var shared_1 = require("./models/shared");
var affiliatesearch_1 = require("./affiliatesearch");
var artists_1 = require("./artists");
var assetchanges_1 = require("./assetchanges");
var assetlicensing_1 = require("./assetlicensing");
var boards_1 = require("./boards");
var collections_1 = require("./collections");
var countries_1 = require("./countries");
var customers_1 = require("./customers");
var downloads_1 = require("./downloads");
var events_1 = require("./events");
var images_1 = require("./images");
var orders_1 = require("./orders");
var products_1 = require("./products");
var purchases_1 = require("./purchases");
var search_1 = require("./search");
var usage_1 = require("./usage");
var videos_1 = require("./videos");
exports.ServerList = [
    "https://gettyimages.com",
];
var SDK = /** @class */ (function () {
    function SDK(props) {
        var _a, _b;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        this._serverURL = (_a = props.serverUrl) !== null && _a !== void 0 ? _a : exports.ServerList[0];
        this._defaultClient = (_b = props.defaultClient) !== null && _b !== void 0 ? _b : axios_1.default.create({ baseURL: this._serverURL });
        if (props.security) {
            var security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase))
                security = new shared_1.Security(props.security);
            this._securityClient = utils.createSecurityClient(this._defaultClient, security);
        }
        else {
            this._securityClient = this._defaultClient;
        }
        this.affiliateSearch = new affiliatesearch_1.AffiliateSearch(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.artists = new artists_1.Artists(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.assetChanges = new assetchanges_1.AssetChanges(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.assetLicensing = new assetlicensing_1.AssetLicensing(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.boards = new boards_1.Boards(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.collections = new collections_1.Collections(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.countries = new countries_1.Countries(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.customers = new customers_1.Customers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.downloads = new downloads_1.Downloads(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.events = new events_1.Events(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.images = new images_1.Images(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.orders = new orders_1.Orders(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.products = new products_1.Products(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.purchases = new purchases_1.Purchases(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.search = new search_1.Search(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.usage = new usage_1.Usage(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.videos = new videos_1.Videos(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
