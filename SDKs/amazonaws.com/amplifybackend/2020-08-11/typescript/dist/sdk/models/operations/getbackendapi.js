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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBackendApiResponse = exports.GetBackendApiRequest = exports.GetBackendApiRequestBody = exports.GetBackendApiRequestBodyResourceConfig = exports.GetBackendApiRequestBodyResourceConfigDefaultAuthType = exports.GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = exports.GetBackendApiRequestBodyResourceConfigConflictResolution = exports.GetBackendApiHeaders = exports.GetBackendApiPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetBackendApiPathParams = /** @class */ (function (_super) {
    __extends(GetBackendApiPathParams, _super);
    function GetBackendApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], GetBackendApiPathParams.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], GetBackendApiPathParams.prototype, "backendEnvironmentName", void 0);
    return GetBackendApiPathParams;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiPathParams = GetBackendApiPathParams;
var GetBackendApiHeaders = /** @class */ (function (_super) {
    __extends(GetBackendApiHeaders, _super);
    function GetBackendApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetBackendApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetBackendApiHeaders;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiHeaders = GetBackendApiHeaders;
// GetBackendApiRequestBodyResourceConfigConflictResolution
/**
 * The conflict resolution strategy for your data stored in the data models.
**/
var GetBackendApiRequestBodyResourceConfigConflictResolution = /** @class */ (function (_super) {
    __extends(GetBackendApiRequestBodyResourceConfigConflictResolution, _super);
    function GetBackendApiRequestBodyResourceConfigConflictResolution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResolutionStrategy" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfigConflictResolution.prototype, "resolutionStrategy", void 0);
    return GetBackendApiRequestBodyResourceConfigConflictResolution;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiRequestBodyResourceConfigConflictResolution = GetBackendApiRequestBodyResourceConfigConflictResolution;
// GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings
/**
 * Describes settings for the authentication mode.
**/
var GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = /** @class */ (function (_super) {
    __extends(GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings, _super);
    function GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CognitoUserPoolId" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "cognitoUserPoolId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExpirationTime" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "expirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDAuthTTL" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDAuthTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDClientId" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDClientID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDIatTTL" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDIatTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDIssueURL" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDIssueURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDProviderName" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDProviderName", void 0);
    return GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
// GetBackendApiRequestBodyResourceConfigDefaultAuthType
/**
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
var GetBackendApiRequestBodyResourceConfigDefaultAuthType = /** @class */ (function (_super) {
    __extends(GetBackendApiRequestBodyResourceConfigDefaultAuthType, _super);
    function GetBackendApiRequestBodyResourceConfigDefaultAuthType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Mode" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfigDefaultAuthType.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Settings" }),
        __metadata("design:type", GetBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings)
    ], GetBackendApiRequestBodyResourceConfigDefaultAuthType.prototype, "settings", void 0);
    return GetBackendApiRequestBodyResourceConfigDefaultAuthType;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiRequestBodyResourceConfigDefaultAuthType = GetBackendApiRequestBodyResourceConfigDefaultAuthType;
// GetBackendApiRequestBodyResourceConfig
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
var GetBackendApiRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(GetBackendApiRequestBodyResourceConfig, _super);
    function GetBackendApiRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdditionalAuthTypes" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "additionalAuthTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiName" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "apiName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConflictResolution" }),
        __metadata("design:type", GetBackendApiRequestBodyResourceConfigConflictResolution)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "conflictResolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultAuthType" }),
        __metadata("design:type", GetBackendApiRequestBodyResourceConfigDefaultAuthType)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "defaultAuthType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Service" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TransformSchema" }),
        __metadata("design:type", Object)
    ], GetBackendApiRequestBodyResourceConfig.prototype, "transformSchema", void 0);
    return GetBackendApiRequestBodyResourceConfig;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiRequestBodyResourceConfig = GetBackendApiRequestBodyResourceConfig;
var GetBackendApiRequestBody = /** @class */ (function (_super) {
    __extends(GetBackendApiRequestBody, _super);
    function GetBackendApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceConfig" }),
        __metadata("design:type", GetBackendApiRequestBodyResourceConfig)
    ], GetBackendApiRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], GetBackendApiRequestBody.prototype, "resourceName", void 0);
    return GetBackendApiRequestBody;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiRequestBody = GetBackendApiRequestBody;
var GetBackendApiRequest = /** @class */ (function (_super) {
    __extends(GetBackendApiRequest, _super);
    function GetBackendApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBackendApiPathParams)
    ], GetBackendApiRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetBackendApiHeaders)
    ], GetBackendApiRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetBackendApiRequestBody)
    ], GetBackendApiRequest.prototype, "request", void 0);
    return GetBackendApiRequest;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiRequest = GetBackendApiRequest;
var GetBackendApiResponse = /** @class */ (function (_super) {
    __extends(GetBackendApiResponse, _super);
    function GetBackendApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetBackendApiResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.GetBackendApiResponse)
    ], GetBackendApiResponse.prototype, "getBackendAPIResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetBackendApiResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetBackendApiResponse.prototype, "tooManyRequestsException", void 0);
    return GetBackendApiResponse;
}(utils_1.SpeakeasyBase));
exports.GetBackendApiResponse = GetBackendApiResponse;
