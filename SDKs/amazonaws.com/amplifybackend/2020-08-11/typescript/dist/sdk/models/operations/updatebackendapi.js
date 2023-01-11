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
exports.UpdateBackendApiResponse = exports.UpdateBackendApiRequest = exports.UpdateBackendApiRequestBody = exports.UpdateBackendApiRequestBodyResourceConfig = exports.UpdateBackendApiRequestBodyResourceConfigDefaultAuthType = exports.UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = exports.UpdateBackendApiRequestBodyResourceConfigConflictResolution = exports.UpdateBackendApiHeaders = exports.UpdateBackendApiPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateBackendApiPathParams = /** @class */ (function (_super) {
    __extends(UpdateBackendApiPathParams, _super);
    function UpdateBackendApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], UpdateBackendApiPathParams.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], UpdateBackendApiPathParams.prototype, "backendEnvironmentName", void 0);
    return UpdateBackendApiPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendApiPathParams = UpdateBackendApiPathParams;
var UpdateBackendApiHeaders = /** @class */ (function (_super) {
    __extends(UpdateBackendApiHeaders, _super);
    function UpdateBackendApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateBackendApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateBackendApiHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendApiHeaders = UpdateBackendApiHeaders;
// UpdateBackendApiRequestBodyResourceConfigConflictResolution
/**
 * The conflict resolution strategy for your data stored in the data models.
**/
var UpdateBackendApiRequestBodyResourceConfigConflictResolution = /** @class */ (function (_super) {
    __extends(UpdateBackendApiRequestBodyResourceConfigConflictResolution, _super);
    function UpdateBackendApiRequestBodyResourceConfigConflictResolution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResolutionStrategy" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfigConflictResolution.prototype, "resolutionStrategy", void 0);
    return UpdateBackendApiRequestBodyResourceConfigConflictResolution;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendApiRequestBodyResourceConfigConflictResolution = UpdateBackendApiRequestBodyResourceConfigConflictResolution;
// UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings
/**
 * Describes settings for the authentication mode.
**/
var UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = /** @class */ (function (_super) {
    __extends(UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings, _super);
    function UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CognitoUserPoolId" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "cognitoUserPoolId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExpirationTime" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "expirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDAuthTTL" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDAuthTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDClientId" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDClientID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDIatTTL" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDIatTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDIssueURL" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDIssueURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDProviderName" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDProviderName", void 0);
    return UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
// UpdateBackendApiRequestBodyResourceConfigDefaultAuthType
/**
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
var UpdateBackendApiRequestBodyResourceConfigDefaultAuthType = /** @class */ (function (_super) {
    __extends(UpdateBackendApiRequestBodyResourceConfigDefaultAuthType, _super);
    function UpdateBackendApiRequestBodyResourceConfigDefaultAuthType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Mode" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfigDefaultAuthType.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Settings" }),
        __metadata("design:type", UpdateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings)
    ], UpdateBackendApiRequestBodyResourceConfigDefaultAuthType.prototype, "settings", void 0);
    return UpdateBackendApiRequestBodyResourceConfigDefaultAuthType;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendApiRequestBodyResourceConfigDefaultAuthType = UpdateBackendApiRequestBodyResourceConfigDefaultAuthType;
// UpdateBackendApiRequestBodyResourceConfig
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
var UpdateBackendApiRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(UpdateBackendApiRequestBodyResourceConfig, _super);
    function UpdateBackendApiRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdditionalAuthTypes" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "additionalAuthTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiName" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "apiName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConflictResolution" }),
        __metadata("design:type", UpdateBackendApiRequestBodyResourceConfigConflictResolution)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "conflictResolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultAuthType" }),
        __metadata("design:type", UpdateBackendApiRequestBodyResourceConfigDefaultAuthType)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "defaultAuthType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Service" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TransformSchema" }),
        __metadata("design:type", Object)
    ], UpdateBackendApiRequestBodyResourceConfig.prototype, "transformSchema", void 0);
    return UpdateBackendApiRequestBodyResourceConfig;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendApiRequestBodyResourceConfig = UpdateBackendApiRequestBodyResourceConfig;
var UpdateBackendApiRequestBody = /** @class */ (function (_super) {
    __extends(UpdateBackendApiRequestBody, _super);
    function UpdateBackendApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceConfig" }),
        __metadata("design:type", UpdateBackendApiRequestBodyResourceConfig)
    ], UpdateBackendApiRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], UpdateBackendApiRequestBody.prototype, "resourceName", void 0);
    return UpdateBackendApiRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendApiRequestBody = UpdateBackendApiRequestBody;
var UpdateBackendApiRequest = /** @class */ (function (_super) {
    __extends(UpdateBackendApiRequest, _super);
    function UpdateBackendApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBackendApiPathParams)
    ], UpdateBackendApiRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateBackendApiHeaders)
    ], UpdateBackendApiRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateBackendApiRequestBody)
    ], UpdateBackendApiRequest.prototype, "request", void 0);
    return UpdateBackendApiRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendApiRequest = UpdateBackendApiRequest;
var UpdateBackendApiResponse = /** @class */ (function (_super) {
    __extends(UpdateBackendApiResponse, _super);
    function UpdateBackendApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBackendApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateBackendApiResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBackendApiResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBackendApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateBackendApiResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateBackendApiResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateBackendApiResponse)
    ], UpdateBackendApiResponse.prototype, "updateBackendAPIResponse", void 0);
    return UpdateBackendApiResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateBackendApiResponse = UpdateBackendApiResponse;
