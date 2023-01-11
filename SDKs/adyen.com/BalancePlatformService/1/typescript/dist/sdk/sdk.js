"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var accountholders_1 = require("./accountholders");
var balanceaccounts_1 = require("./balanceaccounts");
var documents_1 = require("./documents");
var general_1 = require("./general");
var legalentities_1 = require("./legalentities");
var paymentinstrumentgroups_1 = require("./paymentinstrumentgroups");
var paymentinstruments_1 = require("./paymentinstruments");
var transactionrules_1 = require("./transactionrules");
var transferinstruments_1 = require("./transferinstruments");
exports.ServerList = [
    "https://balanceplatform-api-test.adyen.com/bcl/v1",
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
        this.accountHolders = new accountholders_1.AccountHolders(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.balanceAccounts = new balanceaccounts_1.BalanceAccounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.documents = new documents_1.Documents(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.general = new general_1.General(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.legalEntities = new legalentities_1.LegalEntities(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.paymentInstrumentGroups = new paymentinstrumentgroups_1.PaymentInstrumentGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.paymentInstruments = new paymentinstruments_1.PaymentInstruments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.transactionRules = new transactionrules_1.TransactionRules(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.transferInstruments = new transferinstruments_1.TransferInstruments(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
