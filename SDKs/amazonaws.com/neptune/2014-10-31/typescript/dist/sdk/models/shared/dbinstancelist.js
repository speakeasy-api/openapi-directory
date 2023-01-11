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
exports.DbInstanceList = void 0;
var utils_1 = require("../../../internal/utils");
var dbparametergroupstatuslist_1 = require("./dbparametergroupstatuslist");
var dbsecuritygroupmembershiplist_1 = require("./dbsecuritygroupmembershiplist");
var dbsubnetgroup_1 = require("./dbsubnetgroup");
var domainmembershiplist_1 = require("./domainmembershiplist");
var endpoint_1 = require("./endpoint");
var optiongroupmembershiplist_1 = require("./optiongroupmembershiplist");
var pendingmodifiedvalues_1 = require("./pendingmodifiedvalues");
var dbinstancestatusinfolist_1 = require("./dbinstancestatusinfolist");
var vpcsecuritygroupmembershiplist_1 = require("./vpcsecuritygroupmembershiplist");
// DbInstanceList
/**
 * <p>Contains the details of an Amazon Neptune DB instance.</p> <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
**/
var DbInstanceList = /** @class */ (function (_super) {
    __extends(DbInstanceList, _super);
    function DbInstanceList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstanceList.prototype, "allocatedStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstanceList.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "availabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstanceList.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "caCertificateIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "characterSetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstanceList.prototype, "copyTagsToSnapshot", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "dbInstanceArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "dbInstanceClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "dbInstanceStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "dbName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbparametergroupstatuslist_1.DbParameterGroupStatusList }),
        __metadata("design:type", Array)
    ], DbInstanceList.prototype, "dbParameterGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbsecuritygroupmembershiplist_1.DbSecurityGroupMembershipList }),
        __metadata("design:type", Array)
    ], DbInstanceList.prototype, "dbSecurityGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", dbsubnetgroup_1.DbSubnetGroup)
    ], DbInstanceList.prototype, "dbSubnetGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstanceList.prototype, "dbInstancePort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "dbiResourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstanceList.prototype, "deletionProtection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: domainmembershiplist_1.DomainMembershipList }),
        __metadata("design:type", Array)
    ], DbInstanceList.prototype, "domainMemberships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DbInstanceList.prototype, "enabledCloudwatchLogsExports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", endpoint_1.Endpoint)
    ], DbInstanceList.prototype, "endpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "engine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "engineVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "enhancedMonitoringResourceArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstanceList.prototype, "iamDatabaseAuthenticationEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], DbInstanceList.prototype, "instanceCreateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstanceList.prototype, "iops", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "kmsKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], DbInstanceList.prototype, "latestRestorableTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "licenseModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "masterUsername", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstanceList.prototype, "monitoringInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "monitoringRoleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstanceList.prototype, "multiAZ", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: optiongroupmembershiplist_1.OptionGroupMembershipList }),
        __metadata("design:type", Array)
    ], DbInstanceList.prototype, "optionGroupMemberships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", pendingmodifiedvalues_1.PendingModifiedValues)
    ], DbInstanceList.prototype, "pendingModifiedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstanceList.prototype, "performanceInsightsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "performanceInsightsKMSKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "preferredBackupWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstanceList.prototype, "promotionTier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DbInstanceList.prototype, "publiclyAccessible", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DbInstanceList.prototype, "readReplicaDBClusterIdentifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DbInstanceList.prototype, "readReplicaDBInstanceIdentifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "readReplicaSourceDBInstanceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "secondaryAvailabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbinstancestatusinfolist_1.DbInstanceStatusInfoList }),
        __metadata("design:type", Array)
    ], DbInstanceList.prototype, "statusInfos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstanceList.prototype, "storageEncrypted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "storageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "tdeCredentialArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstanceList.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: vpcsecuritygroupmembershiplist_1.VpcSecurityGroupMembershipList }),
        __metadata("design:type", Array)
    ], DbInstanceList.prototype, "vpcSecurityGroups", void 0);
    return DbInstanceList;
}(utils_1.SpeakeasyBase));
exports.DbInstanceList = DbInstanceList;
