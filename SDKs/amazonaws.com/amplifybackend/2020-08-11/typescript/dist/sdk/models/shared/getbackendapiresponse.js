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
exports.GetBackendApiResponse = exports.GetBackendApiResponseResourceConfig = exports.GetBackendApiResponseResourceConfigDefaultAuthType = exports.GetBackendApiResponseResourceConfigDefaultAuthTypeSettings = exports.GetBackendApiResponseResourceConfigConflictResolution = void 0;
var utils_1 = require("../../../internal/utils");
// GetBackendApiResponseResourceConfigConflictResolution
/**
 * The conflict resolution strategy for your data stored in the data models.
**/
var GetBackendApiResponseResourceConfigConflictResolution = /** @class */ (function (_super) {
    __extends(GetBackendApiResponseResourceConfigConflictResolution, _super);
    function GetBackendApiResponseResourceConfigConflictResolution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResolutionStrategy" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfigConflictResolution.prototype, "resolutionStrategy", void 0);
    return GetBackendApiResponseResourceConfigConflictResolution;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiResponseResourceConfigConflictResolution = GetBackendApiResponseResourceConfigConflictResolution;
// GetBackendApiResponseResourceConfigDefaultAuthTypeSettings
/**
 * Describes settings for the authentication mode.
**/
var GetBackendApiResponseResourceConfigDefaultAuthTypeSettings = /** @class */ (function (_super) {
    __extends(GetBackendApiResponseResourceConfigDefaultAuthTypeSettings, _super);
    function GetBackendApiResponseResourceConfigDefaultAuthTypeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CognitoUserPoolId" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfigDefaultAuthTypeSettings.prototype, "cognitoUserPoolId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfigDefaultAuthTypeSettings.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExpirationTime" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfigDefaultAuthTypeSettings.prototype, "expirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDAuthTTL" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfigDefaultAuthTypeSettings.prototype, "openIDAuthTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDClientId" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfigDefaultAuthTypeSettings.prototype, "openIDClientID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDIatTTL" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfigDefaultAuthTypeSettings.prototype, "openIDIatTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDIssueURL" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfigDefaultAuthTypeSettings.prototype, "openIDIssueURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDProviderName" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfigDefaultAuthTypeSettings.prototype, "openIDProviderName", void 0);
    return GetBackendApiResponseResourceConfigDefaultAuthTypeSettings;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiResponseResourceConfigDefaultAuthTypeSettings = GetBackendApiResponseResourceConfigDefaultAuthTypeSettings;
// GetBackendApiResponseResourceConfigDefaultAuthType
/**
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
var GetBackendApiResponseResourceConfigDefaultAuthType = /** @class */ (function (_super) {
    __extends(GetBackendApiResponseResourceConfigDefaultAuthType, _super);
    function GetBackendApiResponseResourceConfigDefaultAuthType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Mode" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfigDefaultAuthType.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Settings" }),
        __metadata("design:type", GetBackendApiResponseResourceConfigDefaultAuthTypeSettings)
    ], GetBackendApiResponseResourceConfigDefaultAuthType.prototype, "settings", void 0);
    return GetBackendApiResponseResourceConfigDefaultAuthType;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiResponseResourceConfigDefaultAuthType = GetBackendApiResponseResourceConfigDefaultAuthType;
// GetBackendApiResponseResourceConfig
/**
 * The resource configuration for this response object.
**/
var GetBackendApiResponseResourceConfig = /** @class */ (function (_super) {
    __extends(GetBackendApiResponseResourceConfig, _super);
    function GetBackendApiResponseResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdditionalAuthTypes" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfig.prototype, "additionalAuthTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiName" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfig.prototype, "apiName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConflictResolution" }),
        __metadata("design:type", GetBackendApiResponseResourceConfigConflictResolution)
    ], GetBackendApiResponseResourceConfig.prototype, "conflictResolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultAuthType" }),
        __metadata("design:type", GetBackendApiResponseResourceConfigDefaultAuthType)
    ], GetBackendApiResponseResourceConfig.prototype, "defaultAuthType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Service" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfig.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TransformSchema" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponseResourceConfig.prototype, "transformSchema", void 0);
    return GetBackendApiResponseResourceConfig;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiResponseResourceConfig = GetBackendApiResponseResourceConfig;
var GetBackendApiResponse = /** @class */ (function (_super) {
    __extends(GetBackendApiResponse, _super);
    function GetBackendApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AppId" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BackendEnvironmentName" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "backendEnvironmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Error" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResourceConfig" }),
        __metadata("design:type", GetBackendApiResponseResourceConfig)
    ], GetBackendApiResponse.prototype, "resourceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResourceName" }),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "resourceName", void 0);
    return GetBackendApiResponse;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiResponse = GetBackendApiResponse;
