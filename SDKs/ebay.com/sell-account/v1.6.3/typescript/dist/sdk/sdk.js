"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var fulfillmentpolicy_1 = require("./fulfillmentpolicy");
var kyc_1 = require("./kyc");
var onboarding_1 = require("./onboarding");
var paymentpolicy_1 = require("./paymentpolicy");
var paymentsprogram_1 = require("./paymentsprogram");
var privilege_1 = require("./privilege");
var program_1 = require("./program");
var ratetable_1 = require("./ratetable");
var returnpolicy_1 = require("./returnpolicy");
var salestax_1 = require("./salestax");
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
        this.fulfillmentPolicy = new fulfillmentpolicy_1.FulfillmentPolicy(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.kyc = new kyc_1.Kyc(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.onboarding = new onboarding_1.Onboarding(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.paymentPolicy = new paymentpolicy_1.PaymentPolicy(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.paymentsProgram = new paymentsprogram_1.PaymentsProgram(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.privilege = new privilege_1.Privilege(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.program = new program_1.Program(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.rateTable = new ratetable_1.RateTable(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.returnPolicy = new returnpolicy_1.ReturnPolicy(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.salesTax = new salestax_1.SalesTax(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
