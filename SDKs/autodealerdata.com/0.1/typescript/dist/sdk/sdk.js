"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var applicationacceleration_1 = require("./applicationacceleration");
var authentication_1 = require("./authentication");
var dealershipdata_1 = require("./dealershipdata");
var premium_1 = require("./premium");
var pricingdata_1 = require("./pricingdata");
var proplanorgreater_1 = require("./proplanorgreater");
var salesdata_1 = require("./salesdata");
var standardplanorgreater_1 = require("./standardplanorgreater");
var staticdata_1 = require("./staticdata");
var supplydata_1 = require("./supplydata");
var ultraplanorgreater_1 = require("./ultraplanorgreater");
var vehicledata_1 = require("./vehicledata");
exports.ServerList = [
    "https://autodealerdata.com",
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
        this.applicationAcceleration = new applicationacceleration_1.ApplicationAcceleration(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.authentication = new authentication_1.Authentication(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dealershipData = new dealershipdata_1.DealershipData(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.premium = new premium_1.Premium(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pricingData = new pricingdata_1.PricingData(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.proPlanOrGreater = new proplanorgreater_1.ProPlanOrGreater(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.salesData = new salesdata_1.SalesData(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.standardPlanOrGreater = new standardplanorgreater_1.StandardPlanOrGreater(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.staticData = new staticdata_1.StaticData(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.supplyData = new supplydata_1.SupplyData(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ultraPlanOrGreater = new ultraplanorgreater_1.UltraPlanOrGreater(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.vehicleData = new vehicledata_1.VehicleData(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
