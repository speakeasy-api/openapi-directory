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
exports.DBInstanceList = void 0;
var utils_1 = require("../../../internal/utils");
var dbparametergroupstatuslist_1 = require("./dbparametergroupstatuslist");
var dbsecuritygroupmembershiplist_1 = require("./dbsecuritygroupmembershiplist");
var dbsubnetgroup_1 = require("./dbsubnetgroup");
var endpoint_1 = require("./endpoint");
var optiongroupmembership_1 = require("./optiongroupmembership");
var pendingmodifiedvalues_1 = require("./pendingmodifiedvalues");
var vpcsecuritygroupmembershiplist_1 = require("./vpcsecuritygroupmembershiplist");
var DBInstanceList = /** @class */ (function (_super) {
    __extends(DBInstanceList, _super);
    function DBInstanceList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DBInstanceList.prototype, "allocatedStorage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DBInstanceList.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "availabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DBInstanceList.prototype, "backupRetentionPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "characterSetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "dbInstanceClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "dbInstanceStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "dbName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbparametergroupstatuslist_1.DBParameterGroupStatusList }),
        __metadata("design:type", Array)
    ], DBInstanceList.prototype, "dbParameterGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: dbsecuritygroupmembershiplist_1.DBSecurityGroupMembershipList }),
        __metadata("design:type", Array)
    ], DBInstanceList.prototype, "dbSecurityGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", dbsubnetgroup_1.DBSubnetGroup)
    ], DBInstanceList.prototype, "dbSubnetGroup", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", endpoint_1.Endpoint)
    ], DBInstanceList.prototype, "endpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "engine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "engineVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], DBInstanceList.prototype, "instanceCreateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DBInstanceList.prototype, "iops", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], DBInstanceList.prototype, "latestRestorableTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "licenseModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "masterUsername", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DBInstanceList.prototype, "multiAZ", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", optiongroupmembership_1.OptionGroupMembership)
    ], DBInstanceList.prototype, "optionGroupMembership", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", pendingmodifiedvalues_1.PendingModifiedValues)
    ], DBInstanceList.prototype, "pendingModifiedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "preferredBackupWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "preferredMaintenanceWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], DBInstanceList.prototype, "publiclyAccessible", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Array)
    ], DBInstanceList.prototype, "readReplicaDBInstanceIdentifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "readReplicaSourceDBInstanceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DBInstanceList.prototype, "secondaryAvailabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: vpcsecuritygroupmembershiplist_1.VpcSecurityGroupMembershipList }),
        __metadata("design:type", Array)
    ], DBInstanceList.prototype, "vpcSecurityGroups", void 0);
    return DBInstanceList;
}(utils_1.SpeakeasyBase));
exports.DBInstanceList = DBInstanceList;
