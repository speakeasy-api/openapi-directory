"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ServerList = void 0;
var axios_1 = __importDefault(require("axios"));
var apiinfo_1 = require("./apiinfo");
var authentication_1 = require("./authentication");
var containergroups_1 = require("./containergroups");
var fileshares_1 = require("./fileshares");
var images_1 = require("./images");
var privatedockerimagesregistry_1 = require("./privatedockerimagesregistry");
var publicipaddresses_1 = require("./publicipaddresses");
var quota_1 = require("./quota");
var singlecontainers_1 = require("./singlecontainers");
var volumes_1 = require("./volumes");
exports.ServerList = [
    "https://containers-api.ng.bluemix.net/v3",
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
        this.apiInfo = new apiinfo_1.ApiInfo(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.authentication = new authentication_1.Authentication(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.containerGroups = new containergroups_1.ContainerGroups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.fileShares = new fileshares_1.FileShares(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.images = new images_1.Images(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.privateDockerImagesRegistry = new privatedockerimagesregistry_1.PrivateDockerImagesRegistry(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.publicIPAddresses = new publicipaddresses_1.PublicIpAddresses(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.quota = new quota_1.Quota(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.singleContainers = new singlecontainers_1.SingleContainers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.volumes = new volumes_1.Volumes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
