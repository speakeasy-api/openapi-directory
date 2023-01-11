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
exports.ReplicationGroupList = void 0;
var utils_1 = require("../../../internal/utils");
var automaticfailoverstatusenum_1 = require("./automaticfailoverstatusenum");
var endpoint_1 = require("./endpoint");
var globalreplicationgroupinfo_1 = require("./globalreplicationgroupinfo");
var logdeliveryconfigurationlist_1 = require("./logdeliveryconfigurationlist");
var multiazstatusenum_1 = require("./multiazstatusenum");
var nodegrouplist_1 = require("./nodegrouplist");
var replicationgrouppendingmodifiedvalues_1 = require("./replicationgrouppendingmodifiedvalues");
// ReplicationGroupList
/**
 * Contains all of the attributes of a specific Redis replication group.
**/
var ReplicationGroupList = /** @class */ (function (_super) {
    __extends(ReplicationGroupList, _super);
    function ReplicationGroupList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupList.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], ReplicationGroupList.prototype, "atRestEncryptionEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], ReplicationGroupList.prototype, "authTokenEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], ReplicationGroupList.prototype, "authTokenLastModifiedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupList.prototype, "automaticFailover", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupList.prototype, "cacheNodeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], ReplicationGroupList.prototype, "clusterEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", endpoint_1.Endpoint)
    ], ReplicationGroupList.prototype, "configurationEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupList.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", globalreplicationgroupinfo_1.GlobalReplicationGroupInfo)
    ], ReplicationGroupList.prototype, "globalReplicationGroupInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupList.prototype, "kmsKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: logdeliveryconfigurationlist_1.LogDeliveryConfigurationList }),
        __metadata("design:type", Array)
    ], ReplicationGroupList.prototype, "logDeliveryConfigurations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], ReplicationGroupList.prototype, "memberClusters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], ReplicationGroupList.prototype, "memberClustersOutpostArns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupList.prototype, "multiAZ", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: nodegrouplist_1.NodeGroupList }),
        __metadata("design:type", Array)
    ], ReplicationGroupList.prototype, "nodeGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", replicationgrouppendingmodifiedvalues_1.ReplicationGroupPendingModifiedValues)
    ], ReplicationGroupList.prototype, "pendingModifiedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], ReplicationGroupList.prototype, "replicationGroupCreateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupList.prototype, "replicationGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ReplicationGroupList.prototype, "snapshotRetentionLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupList.prototype, "snapshotWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupList.prototype, "snapshottingClusterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupList.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], ReplicationGroupList.prototype, "transitEncryptionEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], ReplicationGroupList.prototype, "userGroupIds", void 0);
    return ReplicationGroupList;
}(utils_1.SpeakeasyBase));
exports.ReplicationGroupList = ReplicationGroupList;
