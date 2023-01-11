"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var airtravelcoordinates_1 = require("./airtravelcoordinates");
var ecommercedelivery_1 = require("./ecommercedelivery");
var requestapikey_1 = require("./requestapikey");
var roaddistance_1 = require("./roaddistance");
var urbandelivery_1 = require("./urbandelivery");
var airtravelmultileg_1 = require("./airtravelmultileg");
exports.ServerList = [
    "http://api.climatekuul.com:8000/footprint",
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
        this.airtravelCoordinates = new airtravelcoordinates_1.AirtravelCoordinates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.ecommerceDelivery = new ecommercedelivery_1.EcommerceDelivery(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.requestApiKey = new requestapikey_1.RequestApiKey(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.roadDistance = new roaddistance_1.RoadDistance(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.urbanDelivery = new urbandelivery_1.UrbanDelivery(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.airtravelMultileg = new airtravelmultileg_1.AirtravelMultileg(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
