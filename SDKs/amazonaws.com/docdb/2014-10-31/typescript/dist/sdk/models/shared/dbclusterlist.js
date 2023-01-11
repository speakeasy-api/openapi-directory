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
exports.DbClusterList = void 0;
var utils_1 = require("../../../internal/utils");
var dbclusterroles_1 = require("./dbclusterroles");
var dbclustermemberlist_1 = require("./dbclustermemberlist");
var vpcsecuritygroupmembershiplist_1 = require("./vpcsecuritygroupmembershiplist");
// DbClusterList
/**
 * Detailed information about a cluster.
**/
var DbClusterList = /** @class */ (function (_super) {
    __extends(DbClusterList, _super);
    function DbClusterList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbclusterroles_1.DbClusterRoles }),
        __metadata("design:type", Array)
    ], DbClusterList.prototype, "associatedRoles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DbClusterList.prototype, "availabilityZones", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbClusterList.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], DbClusterList.prototype, "clusterCreateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "dbClusterArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbclustermemberlist_1.DbClusterMemberList }),
        __metadata("design:type", Array)
    ], DbClusterList.prototype, "dbClusterMembers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "dbClusterParameterGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "dbSubnetGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "dbClusterResourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbClusterList.prototype, "deletionProtection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], DbClusterList.prototype, "earliestRestorableTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DbClusterList.prototype, "enabledCloudwatchLogsExports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "endpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "engine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "engineVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "hostedZoneId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "kmsKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], DbClusterList.prototype, "latestRestorableTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "masterUsername", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbClusterList.prototype, "multiAZ", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "percentProgress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbClusterList.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "preferredBackupWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DbClusterList.prototype, "readReplicaIdentifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "readerEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "replicationSourceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbClusterList.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbClusterList.prototype, "storageEncrypted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: vpcsecuritygroupmembershiplist_1.VpcSecurityGroupMembershipList }),
        __metadata("design:type", Array)
    ], DbClusterList.prototype, "vpcSecurityGroups", void 0);
    return DbClusterList;
}(utils_1.SpeakeasyBase));
exports.DbClusterList = DbClusterList;
