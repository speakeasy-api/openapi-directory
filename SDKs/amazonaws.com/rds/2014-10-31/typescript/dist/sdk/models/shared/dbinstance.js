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
exports.DbInstance = void 0;
var utils_1 = require("../../../internal/utils");
var activitystreammodeenum_1 = require("./activitystreammodeenum");
var activitystreamstatusenum_1 = require("./activitystreamstatusenum");
var dbinstanceroles_1 = require("./dbinstanceroles");
var dbinstanceautomatedbackupsreplicationlist_1 = require("./dbinstanceautomatedbackupsreplicationlist");
var dbparametergroupstatuslist_1 = require("./dbparametergroupstatuslist");
var dbsecuritygroupmembershiplist_1 = require("./dbsecuritygroupmembershiplist");
var dbsubnetgroup_1 = require("./dbsubnetgroup");
var domainmembershiplist_1 = require("./domainmembershiplist");
var endpoint_1 = require("./endpoint");
var optiongroupmembershiplist_1 = require("./optiongroupmembershiplist");
var pendingmodifiedvalues_1 = require("./pendingmodifiedvalues");
var processorfeaturelist_1 = require("./processorfeaturelist");
var replicamodeenum_1 = require("./replicamodeenum");
var dbinstancestatusinfolist_1 = require("./dbinstancestatusinfolist");
var taglist_1 = require("./taglist");
var vpcsecuritygroupmembershiplist_1 = require("./vpcsecuritygroupmembershiplist");
// DbInstance
/**
 * <p>Contains the details of an Amazon RDS DB instance. </p> <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action. </p>
**/
var DbInstance = /** @class */ (function (_super) {
    __extends(DbInstance, _super);
    function DbInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstance.prototype, "activityStreamEngineNativeAuditFieldsIncluded", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "activityStreamKinesisStreamName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "activityStreamKmsKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "activityStreamMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "activityStreamStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstance.prototype, "allocatedStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbinstanceroles_1.DbInstanceRoles }),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "associatedRoles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstance.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], DbInstance.prototype, "automaticRestartTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "availabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "awsBackupRecoveryPointArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstance.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "caCertificateIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "characterSetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstance.prototype, "copyTagsToSnapshot", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstance.prototype, "customerOwnedIpEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "dbClusterIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "dbInstanceArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbinstanceautomatedbackupsreplicationlist_1.DbInstanceAutomatedBackupsReplicationList }),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "dbInstanceAutomatedBackupsReplications", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "dbInstanceClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "dbInstanceStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "dbName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbparametergroupstatuslist_1.DbParameterGroupStatusList }),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "dbParameterGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbsecuritygroupmembershiplist_1.DbSecurityGroupMembershipList }),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "dbSecurityGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", dbsubnetgroup_1.DbSubnetGroup)
    ], DbInstance.prototype, "dbSubnetGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstance.prototype, "dbInstancePort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "dbiResourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstance.prototype, "deletionProtection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: domainmembershiplist_1.DomainMembershipList }),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "domainMemberships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "enabledCloudwatchLogsExports", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", endpoint_1.Endpoint)
    ], DbInstance.prototype, "endpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "engine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "engineVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "enhancedMonitoringResourceArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstance.prototype, "iamDatabaseAuthenticationEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], DbInstance.prototype, "instanceCreateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstance.prototype, "iops", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "kmsKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], DbInstance.prototype, "latestRestorableTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "licenseModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", endpoint_1.Endpoint)
    ], DbInstance.prototype, "listenerEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "masterUsername", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstance.prototype, "maxAllocatedStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstance.prototype, "monitoringInterval", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "monitoringRoleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstance.prototype, "multiAZ", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "ncharCharacterSetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: optiongroupmembershiplist_1.OptionGroupMembershipList }),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "optionGroupMemberships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", pendingmodifiedvalues_1.PendingModifiedValues)
    ], DbInstance.prototype, "pendingModifiedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstance.prototype, "performanceInsightsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "performanceInsightsKMSKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstance.prototype, "performanceInsightsRetentionPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "preferredBackupWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: processorfeaturelist_1.ProcessorFeatureList }),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "processorFeatures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DbInstance.prototype, "promotionTier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstance.prototype, "publiclyAccessible", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "readReplicaDBClusterIdentifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "readReplicaDBInstanceIdentifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "readReplicaSourceDBInstanceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "replicaMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "secondaryAvailabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbinstancestatusinfolist_1.DbInstanceStatusInfoList }),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "statusInfos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DbInstance.prototype, "storageEncrypted", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "storageType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: taglist_1.TagList }),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "tagList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "tdeCredentialArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DbInstance.prototype, "timezone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: vpcsecuritygroupmembershiplist_1.VpcSecurityGroupMembershipList }),
        __metadata("design:type", Array)
    ], DbInstance.prototype, "vpcSecurityGroups", void 0);
    return DbInstance;
}(utils_1.SpeakeasyBase));
exports.DbInstance = DbInstance;
