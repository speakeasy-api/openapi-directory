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
exports.ReplicationGroupPendingModifiedValues = void 0;
var utils_1 = require("../../../internal/utils");
var authtokenupdatestatusenum_1 = require("./authtokenupdatestatusenum");
var pendingautomaticfailoverstatusenum_1 = require("./pendingautomaticfailoverstatusenum");
var pendinglogdeliveryconfiguration_1 = require("./pendinglogdeliveryconfiguration");
var reshardingstatus_1 = require("./reshardingstatus");
var usergroupsupdatestatus_1 = require("./usergroupsupdatestatus");
// ReplicationGroupPendingModifiedValues
/**
 * The settings to be applied to the Redis replication group, either immediately or during the next maintenance window.
**/
var ReplicationGroupPendingModifiedValues = /** @class */ (function (_super) {
    __extends(ReplicationGroupPendingModifiedValues, _super);
    function ReplicationGroupPendingModifiedValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupPendingModifiedValues.prototype, "authTokenStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupPendingModifiedValues.prototype, "automaticFailoverStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: pendinglogdeliveryconfiguration_1.PendingLogDeliveryConfiguration }),
        __metadata("design:type", Array)
    ], ReplicationGroupPendingModifiedValues.prototype, "logDeliveryConfigurations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ReplicationGroupPendingModifiedValues.prototype, "primaryClusterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", reshardingstatus_1.ReshardingStatus)
    ], ReplicationGroupPendingModifiedValues.prototype, "resharding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", usergroupsupdatestatus_1.UserGroupsUpdateStatus)
    ], ReplicationGroupPendingModifiedValues.prototype, "userGroups", void 0);
    return ReplicationGroupPendingModifiedValues;
}(utils_1.SpeakeasyBase));
exports.ReplicationGroupPendingModifiedValues = ReplicationGroupPendingModifiedValues;
