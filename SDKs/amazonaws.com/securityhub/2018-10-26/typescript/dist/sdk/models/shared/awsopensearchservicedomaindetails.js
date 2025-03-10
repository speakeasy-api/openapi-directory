"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.AwsOpenSearchServiceDomainDetails = void 0;
var utils_1 = require("../../../internal/utils");
var awsopensearchservicedomainadvancedsecurityoptionsdetails_1 = require("./awsopensearchservicedomainadvancedsecurityoptionsdetails");
var awsopensearchservicedomainclusterconfigdetails_1 = require("./awsopensearchservicedomainclusterconfigdetails");
var awsopensearchservicedomaindomainendpointoptionsdetails_1 = require("./awsopensearchservicedomaindomainendpointoptionsdetails");
var awsopensearchservicedomainencryptionatrestoptionsdetails_1 = require("./awsopensearchservicedomainencryptionatrestoptionsdetails");
var awsopensearchservicedomainlogpublishingoptionsdetails_1 = require("./awsopensearchservicedomainlogpublishingoptionsdetails");
var awsopensearchservicedomainnodetonodeencryptionoptionsdetails_1 = require("./awsopensearchservicedomainnodetonodeencryptionoptionsdetails");
var awsopensearchservicedomainservicesoftwareoptionsdetails_1 = require("./awsopensearchservicedomainservicesoftwareoptionsdetails");
var awsopensearchservicedomainvpcoptionsdetails_1 = require("./awsopensearchservicedomainvpcoptionsdetails");
var class_transformer_1 = require("class-transformer");
/**
 * Information about an Amazon OpenSearch Service domain.
 */
var AwsOpenSearchServiceDomainDetails = /** @class */ (function (_super) {
    __extends(AwsOpenSearchServiceDomainDetails, _super);
    function AwsOpenSearchServiceDomainDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AccessPolicies" }),
        __metadata("design:type", String)
    ], AwsOpenSearchServiceDomainDetails.prototype, "accessPolicies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AdvancedSecurityOptions" }),
        (0, class_transformer_1.Type)(function () { return awsopensearchservicedomainadvancedsecurityoptionsdetails_1.AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails; }),
        __metadata("design:type", awsopensearchservicedomainadvancedsecurityoptionsdetails_1.AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails)
    ], AwsOpenSearchServiceDomainDetails.prototype, "advancedSecurityOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Arn" }),
        __metadata("design:type", String)
    ], AwsOpenSearchServiceDomainDetails.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ClusterConfig" }),
        (0, class_transformer_1.Type)(function () { return awsopensearchservicedomainclusterconfigdetails_1.AwsOpenSearchServiceDomainClusterConfigDetails; }),
        __metadata("design:type", awsopensearchservicedomainclusterconfigdetails_1.AwsOpenSearchServiceDomainClusterConfigDetails)
    ], AwsOpenSearchServiceDomainDetails.prototype, "clusterConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DomainEndpoint" }),
        __metadata("design:type", String)
    ], AwsOpenSearchServiceDomainDetails.prototype, "domainEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DomainEndpointOptions" }),
        (0, class_transformer_1.Type)(function () { return awsopensearchservicedomaindomainendpointoptionsdetails_1.AwsOpenSearchServiceDomainDomainEndpointOptionsDetails; }),
        __metadata("design:type", awsopensearchservicedomaindomainendpointoptionsdetails_1.AwsOpenSearchServiceDomainDomainEndpointOptionsDetails)
    ], AwsOpenSearchServiceDomainDetails.prototype, "domainEndpointOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DomainEndpoints" }),
        __metadata("design:type", Object)
    ], AwsOpenSearchServiceDomainDetails.prototype, "domainEndpoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "DomainName" }),
        __metadata("design:type", String)
    ], AwsOpenSearchServiceDomainDetails.prototype, "domainName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "EncryptionAtRestOptions" }),
        (0, class_transformer_1.Type)(function () { return awsopensearchservicedomainencryptionatrestoptionsdetails_1.AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails; }),
        __metadata("design:type", awsopensearchservicedomainencryptionatrestoptionsdetails_1.AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails)
    ], AwsOpenSearchServiceDomainDetails.prototype, "encryptionAtRestOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "EngineVersion" }),
        __metadata("design:type", String)
    ], AwsOpenSearchServiceDomainDetails.prototype, "engineVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Id" }),
        __metadata("design:type", String)
    ], AwsOpenSearchServiceDomainDetails.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "LogPublishingOptions" }),
        (0, class_transformer_1.Type)(function () { return awsopensearchservicedomainlogpublishingoptionsdetails_1.AwsOpenSearchServiceDomainLogPublishingOptionsDetails; }),
        __metadata("design:type", awsopensearchservicedomainlogpublishingoptionsdetails_1.AwsOpenSearchServiceDomainLogPublishingOptionsDetails)
    ], AwsOpenSearchServiceDomainDetails.prototype, "logPublishingOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "NodeToNodeEncryptionOptions" }),
        (0, class_transformer_1.Type)(function () { return awsopensearchservicedomainnodetonodeencryptionoptionsdetails_1.AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails; }),
        __metadata("design:type", awsopensearchservicedomainnodetonodeencryptionoptionsdetails_1.AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails)
    ], AwsOpenSearchServiceDomainDetails.prototype, "nodeToNodeEncryptionOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ServiceSoftwareOptions" }),
        (0, class_transformer_1.Type)(function () { return awsopensearchservicedomainservicesoftwareoptionsdetails_1.AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails; }),
        __metadata("design:type", awsopensearchservicedomainservicesoftwareoptionsdetails_1.AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails)
    ], AwsOpenSearchServiceDomainDetails.prototype, "serviceSoftwareOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "VpcOptions" }),
        (0, class_transformer_1.Type)(function () { return awsopensearchservicedomainvpcoptionsdetails_1.AwsOpenSearchServiceDomainVpcOptionsDetails; }),
        __metadata("design:type", awsopensearchservicedomainvpcoptionsdetails_1.AwsOpenSearchServiceDomainVpcOptionsDetails)
    ], AwsOpenSearchServiceDomainDetails.prototype, "vpcOptions", void 0);
    return AwsOpenSearchServiceDomainDetails;
}(utils_1.SpeakeasyBase));
exports.AwsOpenSearchServiceDomainDetails = AwsOpenSearchServiceDomainDetails;
