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
exports.Service = void 0;
var utils_1 = require("../../../internal/utils");
var capacityproviderstrategyitem_1 = require("./capacityproviderstrategyitem");
var deploymentconfiguration_1 = require("./deploymentconfiguration");
var deploymentcontroller_1 = require("./deploymentcontroller");
var deployment_1 = require("./deployment");
var serviceevent_1 = require("./serviceevent");
var launchtypeenum_1 = require("./launchtypeenum");
var loadbalancer_1 = require("./loadbalancer");
var networkconfiguration_1 = require("./networkconfiguration");
var placementconstraint_1 = require("./placementconstraint");
var placementstrategy_1 = require("./placementstrategy");
var propagatetagsenum_1 = require("./propagatetagsenum");
var schedulingstrategyenum_1 = require("./schedulingstrategyenum");
var serviceregistry_1 = require("./serviceregistry");
var tag_1 = require("./tag");
var taskset_1 = require("./taskset");
// Service
/**
 * Details on a service within a cluster
**/
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=capacityProviderStrategy", elemType: capacityproviderstrategyitem_1.CapacityProviderStrategyItem }),
        __metadata("design:type", Array)
    ], Service.prototype, "capacityProviderStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clusterArn" }),
        __metadata("design:type", String)
    ], Service.prototype, "clusterArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], Service.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdBy" }),
        __metadata("design:type", String)
    ], Service.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploymentConfiguration" }),
        __metadata("design:type", deploymentconfiguration_1.DeploymentConfiguration)
    ], Service.prototype, "deploymentConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploymentController" }),
        __metadata("design:type", deploymentcontroller_1.DeploymentController)
    ], Service.prototype, "deploymentController", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deployments", elemType: deployment_1.Deployment }),
        __metadata("design:type", Array)
    ], Service.prototype, "deployments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desiredCount" }),
        __metadata("design:type", Number)
    ], Service.prototype, "desiredCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableECSManagedTags" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "enableECSManagedTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enableExecuteCommand" }),
        __metadata("design:type", Boolean)
    ], Service.prototype, "enableExecuteCommand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=events", elemType: serviceevent_1.ServiceEvent }),
        __metadata("design:type", Array)
    ], Service.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=healthCheckGracePeriodSeconds" }),
        __metadata("design:type", Number)
    ], Service.prototype, "healthCheckGracePeriodSeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=launchType" }),
        __metadata("design:type", String)
    ], Service.prototype, "launchType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loadBalancers", elemType: loadbalancer_1.LoadBalancer }),
        __metadata("design:type", Array)
    ], Service.prototype, "loadBalancers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networkConfiguration" }),
        __metadata("design:type", networkconfiguration_1.NetworkConfiguration)
    ], Service.prototype, "networkConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pendingCount" }),
        __metadata("design:type", Number)
    ], Service.prototype, "pendingCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=placementConstraints", elemType: placementconstraint_1.PlacementConstraint }),
        __metadata("design:type", Array)
    ], Service.prototype, "placementConstraints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=placementStrategy", elemType: placementstrategy_1.PlacementStrategy }),
        __metadata("design:type", Array)
    ], Service.prototype, "placementStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platformVersion" }),
        __metadata("design:type", String)
    ], Service.prototype, "platformVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=propagateTags" }),
        __metadata("design:type", String)
    ], Service.prototype, "propagateTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roleArn" }),
        __metadata("design:type", String)
    ], Service.prototype, "roleArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=runningCount" }),
        __metadata("design:type", Number)
    ], Service.prototype, "runningCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedulingStrategy" }),
        __metadata("design:type", String)
    ], Service.prototype, "schedulingStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceArn" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceName" }),
        __metadata("design:type", String)
    ], Service.prototype, "serviceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=serviceRegistries", elemType: serviceregistry_1.ServiceRegistry }),
        __metadata("design:type", Array)
    ], Service.prototype, "serviceRegistries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Service.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], Service.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskDefinition" }),
        __metadata("design:type", String)
    ], Service.prototype, "taskDefinition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taskSets", elemType: taskset_1.TaskSet }),
        __metadata("design:type", Array)
    ], Service.prototype, "taskSets", void 0);
    return Service;
}(utils_1.SpeakeasyBase));
exports.Service = Service;
