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
exports.UpdateLayerRequest = void 0;
var utils_1 = require("../../../internal/utils");
var cloudwatchlogsconfiguration_1 = require("./cloudwatchlogsconfiguration");
var recipes_1 = require("./recipes");
var lifecycleeventconfiguration_1 = require("./lifecycleeventconfiguration");
var volumeconfiguration_1 = require("./volumeconfiguration");
var UpdateLayerRequest = /** @class */ (function (_super) {
    __extends(UpdateLayerRequest, _super);
    function UpdateLayerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Attributes" }),
        __metadata("design:type", Object)
    ], UpdateLayerRequest.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AutoAssignElasticIps" }),
        __metadata("design:type", Boolean)
    ], UpdateLayerRequest.prototype, "autoAssignElasticIps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AutoAssignPublicIps" }),
        __metadata("design:type", Boolean)
    ], UpdateLayerRequest.prototype, "autoAssignPublicIps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CloudWatchLogsConfiguration" }),
        __metadata("design:type", cloudwatchlogsconfiguration_1.CloudWatchLogsConfiguration)
    ], UpdateLayerRequest.prototype, "cloudWatchLogsConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustomInstanceProfileArn" }),
        __metadata("design:type", String)
    ], UpdateLayerRequest.prototype, "customInstanceProfileArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustomJson" }),
        __metadata("design:type", String)
    ], UpdateLayerRequest.prototype, "customJson", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustomRecipes" }),
        __metadata("design:type", recipes_1.Recipes)
    ], UpdateLayerRequest.prototype, "customRecipes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CustomSecurityGroupIds" }),
        __metadata("design:type", Array)
    ], UpdateLayerRequest.prototype, "customSecurityGroupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EnableAutoHealing" }),
        __metadata("design:type", Boolean)
    ], UpdateLayerRequest.prototype, "enableAutoHealing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InstallUpdatesOnBoot" }),
        __metadata("design:type", Boolean)
    ], UpdateLayerRequest.prototype, "installUpdatesOnBoot", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LayerId" }),
        __metadata("design:type", String)
    ], UpdateLayerRequest.prototype, "layerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LifecycleEventConfiguration" }),
        __metadata("design:type", lifecycleeventconfiguration_1.LifecycleEventConfiguration)
    ], UpdateLayerRequest.prototype, "lifecycleEventConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], UpdateLayerRequest.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Packages" }),
        __metadata("design:type", Array)
    ], UpdateLayerRequest.prototype, "packages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Shortname" }),
        __metadata("design:type", String)
    ], UpdateLayerRequest.prototype, "shortname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UseEbsOptimizedInstances" }),
        __metadata("design:type", Boolean)
    ], UpdateLayerRequest.prototype, "useEbsOptimizedInstances", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=VolumeConfigurations", elemType: volumeconfiguration_1.VolumeConfiguration }),
        __metadata("design:type", Array)
    ], UpdateLayerRequest.prototype, "volumeConfigurations", void 0);
    return UpdateLayerRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateLayerRequest = UpdateLayerRequest;
