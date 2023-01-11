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
exports.UpdateDeploymentGroupInput = void 0;
var utils_1 = require("../../../internal/utils");
var alarmconfiguration_1 = require("./alarmconfiguration");
var autorollbackconfiguration_1 = require("./autorollbackconfiguration");
var bluegreendeploymentconfiguration_1 = require("./bluegreendeploymentconfiguration");
var deploymentstyle_1 = require("./deploymentstyle");
var ec2tagfilter_1 = require("./ec2tagfilter");
var ec2tagset_1 = require("./ec2tagset");
var ecsservice_1 = require("./ecsservice");
var loadbalancerinfo_1 = require("./loadbalancerinfo");
var tagfilter_1 = require("./tagfilter");
var onpremisestagset_1 = require("./onpremisestagset");
var outdatedinstancesstrategyenum_1 = require("./outdatedinstancesstrategyenum");
var triggerconfig_1 = require("./triggerconfig");
// UpdateDeploymentGroupInput
/**
 * Represents the input of an <code>UpdateDeploymentGroup</code> operation.
**/
var UpdateDeploymentGroupInput = /** @class */ (function (_super) {
    __extends(UpdateDeploymentGroupInput, _super);
    function UpdateDeploymentGroupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alarmConfiguration" }),
        __metadata("design:type", alarmconfiguration_1.AlarmConfiguration)
    ], UpdateDeploymentGroupInput.prototype, "alarmConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applicationName" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupInput.prototype, "applicationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoRollbackConfiguration" }),
        __metadata("design:type", autorollbackconfiguration_1.AutoRollbackConfiguration)
    ], UpdateDeploymentGroupInput.prototype, "autoRollbackConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoScalingGroups" }),
        __metadata("design:type", Array)
    ], UpdateDeploymentGroupInput.prototype, "autoScalingGroups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blueGreenDeploymentConfiguration" }),
        __metadata("design:type", bluegreendeploymentconfiguration_1.BlueGreenDeploymentConfiguration)
    ], UpdateDeploymentGroupInput.prototype, "blueGreenDeploymentConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentDeploymentGroupName" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupInput.prototype, "currentDeploymentGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploymentConfigName" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupInput.prototype, "deploymentConfigName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploymentStyle" }),
        __metadata("design:type", deploymentstyle_1.DeploymentStyle)
    ], UpdateDeploymentGroupInput.prototype, "deploymentStyle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ec2TagFilters", elemType: ec2tagfilter_1.Ec2TagFilter }),
        __metadata("design:type", Array)
    ], UpdateDeploymentGroupInput.prototype, "ec2TagFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ec2TagSet" }),
        __metadata("design:type", ec2tagset_1.Ec2TagSet)
    ], UpdateDeploymentGroupInput.prototype, "ec2TagSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ecsServices", elemType: ecsservice_1.EcsService }),
        __metadata("design:type", Array)
    ], UpdateDeploymentGroupInput.prototype, "ecsServices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loadBalancerInfo" }),
        __metadata("design:type", loadbalancerinfo_1.LoadBalancerInfo)
    ], UpdateDeploymentGroupInput.prototype, "loadBalancerInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=newDeploymentGroupName" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupInput.prototype, "newDeploymentGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=onPremisesInstanceTagFilters", elemType: tagfilter_1.TagFilter }),
        __metadata("design:type", Array)
    ], UpdateDeploymentGroupInput.prototype, "onPremisesInstanceTagFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=onPremisesTagSet" }),
        __metadata("design:type", onpremisestagset_1.OnPremisesTagSet)
    ], UpdateDeploymentGroupInput.prototype, "onPremisesTagSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=outdatedInstancesStrategy" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupInput.prototype, "outdatedInstancesStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceRoleArn" }),
        __metadata("design:type", String)
    ], UpdateDeploymentGroupInput.prototype, "serviceRoleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=triggerConfigurations", elemType: triggerconfig_1.TriggerConfig }),
        __metadata("design:type", Array)
    ], UpdateDeploymentGroupInput.prototype, "triggerConfigurations", void 0);
    return UpdateDeploymentGroupInput;
}(utils_1.SpeakeasyBase));
exports.UpdateDeploymentGroupInput = UpdateDeploymentGroupInput;
