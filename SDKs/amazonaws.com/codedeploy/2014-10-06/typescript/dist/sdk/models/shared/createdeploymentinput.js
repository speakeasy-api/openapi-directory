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
exports.CreateDeploymentInput = void 0;
var utils_1 = require("../../../internal/utils");
var autorollbackconfiguration_1 = require("./autorollbackconfiguration");
var fileexistsbehaviorenum_1 = require("./fileexistsbehaviorenum");
var revisionlocation_1 = require("./revisionlocation");
var targetinstances_1 = require("./targetinstances");
// CreateDeploymentInput
/**
 * Represents the input of a <code>CreateDeployment</code> operation.
**/
var CreateDeploymentInput = /** @class */ (function (_super) {
    __extends(CreateDeploymentInput, _super);
    function CreateDeploymentInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=applicationName" }),
        __metadata("design:type", String)
    ], CreateDeploymentInput.prototype, "applicationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoRollbackConfiguration" }),
        __metadata("design:type", autorollbackconfiguration_1.AutoRollbackConfiguration)
    ], CreateDeploymentInput.prototype, "autoRollbackConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploymentConfigName" }),
        __metadata("design:type", String)
    ], CreateDeploymentInput.prototype, "deploymentConfigName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploymentGroupName" }),
        __metadata("design:type", String)
    ], CreateDeploymentInput.prototype, "deploymentGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateDeploymentInput.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileExistsBehavior" }),
        __metadata("design:type", String)
    ], CreateDeploymentInput.prototype, "fileExistsBehavior", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ignoreApplicationStopFailures" }),
        __metadata("design:type", Boolean)
    ], CreateDeploymentInput.prototype, "ignoreApplicationStopFailures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revision" }),
        __metadata("design:type", revisionlocation_1.RevisionLocation)
    ], CreateDeploymentInput.prototype, "revision", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetInstances" }),
        __metadata("design:type", targetinstances_1.TargetInstances)
    ], CreateDeploymentInput.prototype, "targetInstances", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updateOutdatedInstancesOnly" }),
        __metadata("design:type", Boolean)
    ], CreateDeploymentInput.prototype, "updateOutdatedInstancesOnly", void 0);
    return CreateDeploymentInput;
}(utils_1.SpeakeasyBase));
exports.CreateDeploymentInput = CreateDeploymentInput;
