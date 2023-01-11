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
exports.CacheClusterList = void 0;
var utils_1 = require("../../../internal/utils");
var cachenodelist_1 = require("./cachenodelist");
var cacheparametergroupstatus_1 = require("./cacheparametergroupstatus");
var cachesecuritygroupmembershiplist_1 = require("./cachesecuritygroupmembershiplist");
var endpoint_1 = require("./endpoint");
var logdeliveryconfigurationlist_1 = require("./logdeliveryconfigurationlist");
var notificationconfiguration_1 = require("./notificationconfiguration");
var pendingmodifiedvalues_1 = require("./pendingmodifiedvalues");
var securitygroupmembership_1 = require("./securitygroupmembership");
// CacheClusterList
/**
 * Contains all of the attributes of a specific cluster.
**/
var CacheClusterList = /** @class */ (function (_super) {
    __extends(CacheClusterList, _super);
    function CacheClusterList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], CacheClusterList.prototype, "atRestEncryptionEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], CacheClusterList.prototype, "authTokenEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], CacheClusterList.prototype, "authTokenLastModifiedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], CacheClusterList.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], CacheClusterList.prototype, "cacheClusterCreateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "cacheClusterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "cacheClusterStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "cacheNodeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: cachenodelist_1.CacheNodeList }),
        __metadata("design:type", Array)
    ], CacheClusterList.prototype, "cacheNodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", cacheparametergroupstatus_1.CacheParameterGroupStatus)
    ], CacheClusterList.prototype, "cacheParameterGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: cachesecuritygroupmembershiplist_1.CacheSecurityGroupMembershipList }),
        __metadata("design:type", Array)
    ], CacheClusterList.prototype, "cacheSecurityGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "cacheSubnetGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "clientDownloadLandingPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", endpoint_1.Endpoint)
    ], CacheClusterList.prototype, "configurationEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "engine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "engineVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: logdeliveryconfigurationlist_1.LogDeliveryConfigurationList }),
        __metadata("design:type", Array)
    ], CacheClusterList.prototype, "logDeliveryConfigurations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", notificationconfiguration_1.NotificationConfiguration)
    ], CacheClusterList.prototype, "notificationConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CacheClusterList.prototype, "numCacheNodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", pendingmodifiedvalues_1.PendingModifiedValues)
    ], CacheClusterList.prototype, "pendingModifiedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "preferredAvailabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "preferredOutpostArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "replicationGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], CacheClusterList.prototype, "replicationGroupLogDeliveryEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: securitygroupmembership_1.SecurityGroupMembership }),
        __metadata("design:type", Array)
    ], CacheClusterList.prototype, "securityGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CacheClusterList.prototype, "snapshotRetentionLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CacheClusterList.prototype, "snapshotWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], CacheClusterList.prototype, "transitEncryptionEnabled", void 0);
    return CacheClusterList;
}(utils_1.SpeakeasyBase));
exports.CacheClusterList = CacheClusterList;
