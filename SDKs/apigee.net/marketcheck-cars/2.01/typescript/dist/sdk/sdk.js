"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var crmcleanseapi_1 = require("./crmcleanseapi");
var carcachedimage_1 = require("./carcachedimage");
var carsearch_1 = require("./carsearch");
var carshistoryapi_1 = require("./carshistoryapi");
var carsmarketapi_1 = require("./carsmarketapi");
var dealerapi_1 = require("./dealerapi");
var heavyequipmentsearch_1 = require("./heavyequipmentsearch");
var motorcyclesearch_1 = require("./motorcyclesearch");
var oemincentivesearch_1 = require("./oemincentivesearch");
var rvsearch_1 = require("./rvsearch");
var rankcarlistings_1 = require("./rankcarlistings");
var recallsearch_1 = require("./recallsearch");
var vindecoderapi_1 = require("./vindecoderapi");
exports.ServerList = [
    "https://marketcheck-prod.apigee.net/v2",
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
        this.crmCleanseAPI = new crmcleanseapi_1.CrmCleanseApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.carCachedImage = new carcachedimage_1.CarCachedImage(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.carSearch = new carsearch_1.CarSearch(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.carsHistoryAPI = new carshistoryapi_1.CarsHistoryApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.carsMarketAPI = new carsmarketapi_1.CarsMarketApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dealerAPI = new dealerapi_1.DealerApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.heavyEquipmentSearch = new heavyequipmentsearch_1.HeavyEquipmentSearch(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.motorcycleSearch = new motorcyclesearch_1.MotorcycleSearch(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.oemIncentiveSearch = new oemincentivesearch_1.OemIncentiveSearch(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.rvSearch = new rvsearch_1.RvSearch(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.rankCarListings = new rankcarlistings_1.RankCarListings(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.recallSearch = new recallsearch_1.RecallSearch(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.vinDecoderAPI = new vindecoderapi_1.VinDecoderApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
