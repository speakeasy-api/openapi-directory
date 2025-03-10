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
exports.RunTaskRequest = void 0;
var utils_1 = require("../../../internal/utils");
var capacityproviderstrategyitem_1 = require("./capacityproviderstrategyitem");
var launchtypeenum_1 = require("./launchtypeenum");
var networkconfiguration_1 = require("./networkconfiguration");
var placementconstraint_1 = require("./placementconstraint");
var placementstrategy_1 = require("./placementstrategy");
var propagatetagsenum_1 = require("./propagatetagsenum");
var tag_1 = require("./tag");
var taskoverride_1 = require("./taskoverride");
var class_transformer_1 = require("class-transformer");
var RunTaskRequest = /** @class */ (function (_super) {
    __extends(RunTaskRequest, _super);
    function RunTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: capacityproviderstrategyitem_1.CapacityProviderStrategyItem }),
        (0, class_transformer_1.Expose)({ name: "capacityProviderStrategy" }),
        (0, class_transformer_1.Type)(function () { return capacityproviderstrategyitem_1.CapacityProviderStrategyItem; }),
        __metadata("design:type", Array)
    ], RunTaskRequest.prototype, "capacityProviderStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "cluster" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "cluster", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "count" }),
        __metadata("design:type", Number)
    ], RunTaskRequest.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "enableECSManagedTags" }),
        __metadata("design:type", Boolean)
    ], RunTaskRequest.prototype, "enableECSManagedTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "enableExecuteCommand" }),
        __metadata("design:type", Boolean)
    ], RunTaskRequest.prototype, "enableExecuteCommand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "group" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "group", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "launchType" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "launchType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "networkConfiguration" }),
        (0, class_transformer_1.Type)(function () { return networkconfiguration_1.NetworkConfiguration; }),
        __metadata("design:type", networkconfiguration_1.NetworkConfiguration)
    ], RunTaskRequest.prototype, "networkConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "overrides" }),
        (0, class_transformer_1.Type)(function () { return taskoverride_1.TaskOverride; }),
        __metadata("design:type", taskoverride_1.TaskOverride)
    ], RunTaskRequest.prototype, "overrides", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: placementconstraint_1.PlacementConstraint }),
        (0, class_transformer_1.Expose)({ name: "placementConstraints" }),
        (0, class_transformer_1.Type)(function () { return placementconstraint_1.PlacementConstraint; }),
        __metadata("design:type", Array)
    ], RunTaskRequest.prototype, "placementConstraints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: placementstrategy_1.PlacementStrategy }),
        (0, class_transformer_1.Expose)({ name: "placementStrategy" }),
        (0, class_transformer_1.Type)(function () { return placementstrategy_1.PlacementStrategy; }),
        __metadata("design:type", Array)
    ], RunTaskRequest.prototype, "placementStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "platformVersion" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "platformVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "propagateTags" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "propagateTags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "referenceId" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "referenceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "startedBy" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "startedBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: tag_1.Tag }),
        (0, class_transformer_1.Expose)({ name: "tags" }),
        (0, class_transformer_1.Type)(function () { return tag_1.Tag; }),
        __metadata("design:type", Array)
    ], RunTaskRequest.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "taskDefinition" }),
        __metadata("design:type", String)
    ], RunTaskRequest.prototype, "taskDefinition", void 0);
    return RunTaskRequest;
}(utils_1.SpeakeasyBase));
exports.RunTaskRequest = RunTaskRequest;
