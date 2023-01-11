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
var oneclickapplications_1 = require("./oneclickapplications");
var account_1 = require("./account");
var actions_1 = require("./actions");
var apps_1 = require("./apps");
var billing_1 = require("./billing");
var blockstorage_1 = require("./blockstorage");
var blockstorageactions_1 = require("./blockstorageactions");
var cdnendpoints_1 = require("./cdnendpoints");
var certificates_1 = require("./certificates");
var containerregistry_1 = require("./containerregistry");
var databases_1 = require("./databases");
var domainrecords_1 = require("./domainrecords");
var domains_1 = require("./domains");
var dropletactions_1 = require("./dropletactions");
var droplets_1 = require("./droplets");
var firewalls_1 = require("./firewalls");
var floatingipactions_1 = require("./floatingipactions");
var floatingips_1 = require("./floatingips");
var imageactions_1 = require("./imageactions");
var images_1 = require("./images");
var kubernetes_1 = require("./kubernetes");
var loadbalancers_1 = require("./loadbalancers");
var monitoring_1 = require("./monitoring");
var projectresources_1 = require("./projectresources");
var projects_1 = require("./projects");
var regions_1 = require("./regions");
var sshkeys_1 = require("./sshkeys");
var sizes_1 = require("./sizes");
var snapshots_1 = require("./snapshots");
var tags_1 = require("./tags");
var vpcs_1 = require("./vpcs");
exports.ServerList = [
    "https://api.digitalocean.com",
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
        this.oneClickApplications = new oneclickapplications_1.OneClickApplications(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.account = new account_1.Account(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.actions = new actions_1.Actions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.apps = new apps_1.Apps(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.billing = new billing_1.Billing(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.blockStorage = new blockstorage_1.BlockStorage(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.blockStorageActions = new blockstorageactions_1.BlockStorageActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.cdnEndpoints = new cdnendpoints_1.CdnEndpoints(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.certificates = new certificates_1.Certificates(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.containerRegistry = new containerregistry_1.ContainerRegistry(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.databases = new databases_1.Databases(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.domainRecords = new domainrecords_1.DomainRecords(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.domains = new domains_1.Domains(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.dropletActions = new dropletactions_1.DropletActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.droplets = new droplets_1.Droplets(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.firewalls = new firewalls_1.Firewalls(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.floatingIPActions = new floatingipactions_1.FloatingIpActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.floatingIPs = new floatingips_1.FloatingIPs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.imageActions = new imageactions_1.ImageActions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.images = new images_1.Images(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.kubernetes = new kubernetes_1.Kubernetes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.loadBalancers = new loadbalancers_1.LoadBalancers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.monitoring = new monitoring_1.Monitoring(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.projectResources = new projectresources_1.ProjectResources(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.projects = new projects_1.Projects(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.regions = new regions_1.Regions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sshKeys = new sshkeys_1.SshKeys(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sizes = new sizes_1.Sizes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.snapshots = new snapshots_1.Snapshots(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.tags = new tags_1.Tags(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.vpCs = new vpcs_1.VpCs(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
exports.SDK = SDK;
