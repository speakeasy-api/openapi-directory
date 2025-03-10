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
exports.ReplicationConfigurationTemplate = void 0;
var utils_1 = require("../../../internal/utils");
var replicationconfigurationdataplaneroutingenum_1 = require("./replicationconfigurationdataplaneroutingenum");
var replicationconfigurationdefaultlargestagingdisktypeenum_1 = require("./replicationconfigurationdefaultlargestagingdisktypeenum");
var replicationconfigurationebsencryptionenum_1 = require("./replicationconfigurationebsencryptionenum");
var class_transformer_1 = require("class-transformer");
/**
 * Success
 */
var ReplicationConfigurationTemplate = /** @class */ (function (_super) {
    __extends(ReplicationConfigurationTemplate, _super);
    function ReplicationConfigurationTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "arn" }),
        __metadata("design:type", String)
    ], ReplicationConfigurationTemplate.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "associateDefaultSecurityGroup" }),
        __metadata("design:type", Boolean)
    ], ReplicationConfigurationTemplate.prototype, "associateDefaultSecurityGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "bandwidthThrottling" }),
        __metadata("design:type", Number)
    ], ReplicationConfigurationTemplate.prototype, "bandwidthThrottling", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "createPublicIP" }),
        __metadata("design:type", Boolean)
    ], ReplicationConfigurationTemplate.prototype, "createPublicIP", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "dataPlaneRouting" }),
        __metadata("design:type", String)
    ], ReplicationConfigurationTemplate.prototype, "dataPlaneRouting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "defaultLargeStagingDiskType" }),
        __metadata("design:type", String)
    ], ReplicationConfigurationTemplate.prototype, "defaultLargeStagingDiskType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ebsEncryption" }),
        __metadata("design:type", String)
    ], ReplicationConfigurationTemplate.prototype, "ebsEncryption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "ebsEncryptionKeyArn" }),
        __metadata("design:type", String)
    ], ReplicationConfigurationTemplate.prototype, "ebsEncryptionKeyArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "replicationConfigurationTemplateID" }),
        __metadata("design:type", String)
    ], ReplicationConfigurationTemplate.prototype, "replicationConfigurationTemplateID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "replicationServerInstanceType" }),
        __metadata("design:type", String)
    ], ReplicationConfigurationTemplate.prototype, "replicationServerInstanceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "replicationServersSecurityGroupsIDs" }),
        __metadata("design:type", Array)
    ], ReplicationConfigurationTemplate.prototype, "replicationServersSecurityGroupsIDs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "stagingAreaSubnetId" }),
        __metadata("design:type", String)
    ], ReplicationConfigurationTemplate.prototype, "stagingAreaSubnetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "stagingAreaTags" }),
        __metadata("design:type", Object)
    ], ReplicationConfigurationTemplate.prototype, "stagingAreaTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "tags" }),
        __metadata("design:type", Object)
    ], ReplicationConfigurationTemplate.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "useDedicatedReplicationServer" }),
        __metadata("design:type", Boolean)
    ], ReplicationConfigurationTemplate.prototype, "useDedicatedReplicationServer", void 0);
    return ReplicationConfigurationTemplate;
}(utils_1.SpeakeasyBase));
exports.ReplicationConfigurationTemplate = ReplicationConfigurationTemplate;
