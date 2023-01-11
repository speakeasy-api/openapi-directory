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
exports.GetStageResponse = exports.GetStageResponseDefaultRouteSettings = exports.GetStageResponseAccessLogSettings = void 0;
var utils_1 = require("../../../internal/utils");
var routesettings_1 = require("./routesettings");
// GetStageResponseAccessLogSettings
/**
 * Settings for logging access in this stage.
**/
var GetStageResponseAccessLogSettings = /** @class */ (function (_super) {
    __extends(GetStageResponseAccessLogSettings, _super);
    function GetStageResponseAccessLogSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DestinationArn" }),
        __metadata("design:type", Object)
    ], GetStageResponseAccessLogSettings.prototype, "destinationArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Format" }),
        __metadata("design:type", Object)
    ], GetStageResponseAccessLogSettings.prototype, "format", void 0);
    return GetStageResponseAccessLogSettings;
}(utils_1.SpeakeasyBase));
exports.GetStageResponseAccessLogSettings = GetStageResponseAccessLogSettings;
// GetStageResponseDefaultRouteSettings
/**
 * Default route settings for the stage.
**/
var GetStageResponseDefaultRouteSettings = /** @class */ (function (_super) {
    __extends(GetStageResponseDefaultRouteSettings, _super);
    function GetStageResponseDefaultRouteSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DataTraceEnabled" }),
        __metadata("design:type", Object)
    ], GetStageResponseDefaultRouteSettings.prototype, "dataTraceEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DetailedMetricsEnabled" }),
        __metadata("design:type", Object)
    ], GetStageResponseDefaultRouteSettings.prototype, "detailedMetricsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LoggingLevel" }),
        __metadata("design:type", Object)
    ], GetStageResponseDefaultRouteSettings.prototype, "loggingLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ThrottlingBurstLimit" }),
        __metadata("design:type", Object)
    ], GetStageResponseDefaultRouteSettings.prototype, "throttlingBurstLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ThrottlingRateLimit" }),
        __metadata("design:type", Object)
    ], GetStageResponseDefaultRouteSettings.prototype, "throttlingRateLimit", void 0);
    return GetStageResponseDefaultRouteSettings;
}(utils_1.SpeakeasyBase));
exports.GetStageResponseDefaultRouteSettings = GetStageResponseDefaultRouteSettings;
var GetStageResponse = /** @class */ (function (_super) {
    __extends(GetStageResponse, _super);
    function GetStageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AccessLogSettings" }),
        __metadata("design:type", GetStageResponseAccessLogSettings)
    ], GetStageResponse.prototype, "accessLogSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiGatewayManaged" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "apiGatewayManaged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AutoDeploy" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "autoDeploy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ClientCertificateId" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "clientCertificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreatedDate" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultRouteSettings" }),
        __metadata("design:type", GetStageResponseDefaultRouteSettings)
    ], GetStageResponse.prototype, "defaultRouteSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeploymentId" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "deploymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastDeploymentStatusMessage" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "lastDeploymentStatusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastUpdatedDate" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "lastUpdatedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RouteSettings", elemType: routesettings_1.RouteSettings }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "routeSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StageName" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "stageName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StageVariables" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "stageVariables", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags" }),
        __metadata("design:type", Object)
    ], GetStageResponse.prototype, "tags", void 0);
    return GetStageResponse;
}(utils_1.SpeakeasyBase));
exports.GetStageResponse = GetStageResponse;
