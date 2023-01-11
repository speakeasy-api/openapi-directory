"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var accountdetailapi_1 = require("./accountdetailapi");
var authorization_1 = require("./authorization");
var authorizationapi_1 = require("./authorizationapi");
var digilockermetaapis_1 = require("./digilockermetaapis");
var digilockersignupapis_1 = require("./digilockersignupapis");
var fileapis_1 = require("./fileapis");
var tokenrevocationapi_1 = require("./tokenrevocationapi");
exports.ServerList = [
    "https://betaapi.digitallocker.gov.in/public",
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
        this.accountDetailAPI = new accountdetailapi_1.AccountDetailApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.authorization = new authorization_1.Authorization(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.authorizationAPI = new authorizationapi_1.AuthorizationApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.digiLockerMetaAPIs = new digilockermetaapis_1.DigiLockerMetaApIs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.digiLockerSignUpAPIs = new digilockersignupapis_1.DigiLockerSignUpApIs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.fileAPIs = new fileapis_1.FileApIs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.tokenRevocationAPI = new tokenrevocationapi_1.TokenRevocationApi(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
