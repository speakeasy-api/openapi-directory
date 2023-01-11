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
exports.UpdateStageResponse = exports.UpdateStageResponseDefaultRouteSettings = exports.UpdateStageResponseAccessLogSettings = void 0;
var utils_1 = require("../../../internal/utils");
var routesettings_1 = require("./routesettings");
// UpdateStageResponseAccessLogSettings
/**
 * Settings for logging access in this stage.
**/
var UpdateStageResponseAccessLogSettings = /** @class */ (function (_super) {
    __extends(UpdateStageResponseAccessLogSettings, _super);
    function UpdateStageResponseAccessLogSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DestinationArn" }),
        __metadata("design:type", Object)
    ], UpdateStageResponseAccessLogSettings.prototype, "destinationArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Format" }),
        __metadata("design:type", Object)
    ], UpdateStageResponseAccessLogSettings.prototype, "format", void 0);
    return UpdateStageResponseAccessLogSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateStageResponseAccessLogSettings = UpdateStageResponseAccessLogSettings;
// UpdateStageResponseDefaultRouteSettings
/**
 * Default route settings for the stage.
**/
var UpdateStageResponseDefaultRouteSettings = /** @class */ (function (_super) {
    __extends(UpdateStageResponseDefaultRouteSettings, _super);
    function UpdateStageResponseDefaultRouteSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DataTraceEnabled" }),
        __metadata("design:type", Object)
    ], UpdateStageResponseDefaultRouteSettings.prototype, "dataTraceEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DetailedMetricsEnabled" }),
        __metadata("design:type", Object)
    ], UpdateStageResponseDefaultRouteSettings.prototype, "detailedMetricsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LoggingLevel" }),
        __metadata("design:type", Object)
    ], UpdateStageResponseDefaultRouteSettings.prototype, "loggingLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ThrottlingBurstLimit" }),
        __metadata("design:type", Object)
    ], UpdateStageResponseDefaultRouteSettings.prototype, "throttlingBurstLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ThrottlingRateLimit" }),
        __metadata("design:type", Object)
    ], UpdateStageResponseDefaultRouteSettings.prototype, "throttlingRateLimit", void 0);
    return UpdateStageResponseDefaultRouteSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateStageResponseDefaultRouteSettings = UpdateStageResponseDefaultRouteSettings;
var UpdateStageResponse = /** @class */ (function (_super) {
    __extends(UpdateStageResponse, _super);
    function UpdateStageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccessLogSettings" }),
        __metadata("design:type", UpdateStageResponseAccessLogSettings)
    ], UpdateStageResponse.prototype, "accessLogSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiGatewayManaged" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "apiGatewayManaged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AutoDeploy" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "autoDeploy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ClientCertificateId" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "clientCertificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultRouteSettings" }),
        __metadata("design:type", UpdateStageResponseDefaultRouteSettings)
    ], UpdateStageResponse.prototype, "defaultRouteSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeploymentId" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "deploymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastDeploymentStatusMessage" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "lastDeploymentStatusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastUpdatedDate" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "lastUpdatedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RouteSettings", elemType: routesettings_1.RouteSettings }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "routeSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StageName" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "stageName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StageVariables" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "stageVariables", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags" }),
        __metadata("design:type", Object)
    ], UpdateStageResponse.prototype, "tags", void 0);
    return UpdateStageResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateStageResponse = UpdateStageResponse;
