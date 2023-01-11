"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cluster = void 0;
var utils_1 = require("../../../internal/utils");
var certificate_1 = require("./certificate");
var connectorconfigresponse_1 = require("./connectorconfigresponse");
var encryptionconfig_1 = require("./encryptionconfig");
var identity_1 = require("./identity");
var kubernetesnetworkconfigresponse_1 = require("./kubernetesnetworkconfigresponse");
var logging_1 = require("./logging");
var vpcconfigresponse_1 = require("./vpcconfigresponse");
var clusterstatusenum_1 = require("./clusterstatusenum");
// Cluster
/**
 * An object representing an Amazon EKS cluster.
**/
var Cluster = /** @class */ (function (_super) {
    __extends(Cluster, _super);
    function Cluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateAuthority" }),
        __metadata("design:type", certificate_1.Certificate)
    ], Cluster.prototype, "certificateAuthority", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientRequestToken" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "clientRequestToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectorConfig" }),
        __metadata("design:type", connectorconfigresponse_1.ConnectorConfigResponse)
    ], Cluster.prototype, "connectorConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Cluster.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=encryptionConfig", elemType: encryptionconfig_1.EncryptionConfig }),
        __metadata("design:type", Array)
    ], Cluster.prototype, "encryptionConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endpoint" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "endpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=identity" }),
        __metadata("design:type", identity_1.Identity)
    ], Cluster.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetesNetworkConfig" }),
        __metadata("design:type", kubernetesnetworkconfigresponse_1.KubernetesNetworkConfigResponse)
    ], Cluster.prototype, "kubernetesNetworkConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=logging" }),
        __metadata("design:type", logging_1.Logging)
    ], Cluster.prototype, "logging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platformVersion" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "platformVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourcesVpcConfig" }),
        __metadata("design:type", vpcconfigresponse_1.VpcConfigResponse)
    ], Cluster.prototype, "resourcesVpcConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "roleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], Cluster.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Cluster.prototype, "version", void 0);
    return Cluster;
}(utils_1.SpeakeasyBase));
exports.Cluster = Cluster;
