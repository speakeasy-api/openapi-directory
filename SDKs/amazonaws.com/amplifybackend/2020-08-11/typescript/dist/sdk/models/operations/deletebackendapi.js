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
exports.DeleteBackendApiResponse = exports.DeleteBackendApiRequest = exports.DeleteBackendApiRequestBody = exports.DeleteBackendApiRequestBodyResourceConfig = exports.DeleteBackendApiRequestBodyResourceConfigDefaultAuthType = exports.DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = exports.DeleteBackendApiRequestBodyResourceConfigConflictResolution = exports.DeleteBackendApiHeaders = exports.DeleteBackendApiPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DeleteBackendApiPathParams = /** @class */ (function (_super) {
    __extends(DeleteBackendApiPathParams, _super);
    function DeleteBackendApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], DeleteBackendApiPathParams.prototype, "appId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], DeleteBackendApiPathParams.prototype, "backendEnvironmentName", void 0);
    return DeleteBackendApiPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteBackendApiPathParams = DeleteBackendApiPathParams;
var DeleteBackendApiHeaders = /** @class */ (function (_super) {
    __extends(DeleteBackendApiHeaders, _super);
    function DeleteBackendApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], DeleteBackendApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return DeleteBackendApiHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteBackendApiHeaders = DeleteBackendApiHeaders;
// DeleteBackendApiRequestBodyResourceConfigConflictResolution
/**
 * The conflict resolution strategy for your data stored in the data models.
**/
var DeleteBackendApiRequestBodyResourceConfigConflictResolution = /** @class */ (function (_super) {
    __extends(DeleteBackendApiRequestBodyResourceConfigConflictResolution, _super);
    function DeleteBackendApiRequestBodyResourceConfigConflictResolution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResolutionStrategy" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfigConflictResolution.prototype, "resolutionStrategy", void 0);
    return DeleteBackendApiRequestBodyResourceConfigConflictResolution;
}(utils_1.SpeakeasyBase));
exports.DeleteBackendApiRequestBodyResourceConfigConflictResolution = DeleteBackendApiRequestBodyResourceConfigConflictResolution;
// DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings
/**
 * Describes settings for the authentication mode.
**/
var DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = /** @class */ (function (_super) {
    __extends(DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings, _super);
    function DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CognitoUserPoolId" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "cognitoUserPoolId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExpirationTime" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "expirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDAuthTTL" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDAuthTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDClientId" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDClientID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDIatTTL" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDIatTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDIssueURL" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDIssueURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDProviderName" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDProviderName", void 0);
    return DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
}(utils_1.SpeakeasyBase));
exports.DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
// DeleteBackendApiRequestBodyResourceConfigDefaultAuthType
/**
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
var DeleteBackendApiRequestBodyResourceConfigDefaultAuthType = /** @class */ (function (_super) {
    __extends(DeleteBackendApiRequestBodyResourceConfigDefaultAuthType, _super);
    function DeleteBackendApiRequestBodyResourceConfigDefaultAuthType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Mode" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfigDefaultAuthType.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Settings" }),
        __metadata("design:type", DeleteBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings)
    ], DeleteBackendApiRequestBodyResourceConfigDefaultAuthType.prototype, "settings", void 0);
    return DeleteBackendApiRequestBodyResourceConfigDefaultAuthType;
}(utils_1.SpeakeasyBase));
exports.DeleteBackendApiRequestBodyResourceConfigDefaultAuthType = DeleteBackendApiRequestBodyResourceConfigDefaultAuthType;
// DeleteBackendApiRequestBodyResourceConfig
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
var DeleteBackendApiRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(DeleteBackendApiRequestBodyResourceConfig, _super);
    function DeleteBackendApiRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdditionalAuthTypes" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "additionalAuthTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiName" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "apiName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConflictResolution" }),
        __metadata("design:type", DeleteBackendApiRequestBodyResourceConfigConflictResolution)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "conflictResolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultAuthType" }),
        __metadata("design:type", DeleteBackendApiRequestBodyResourceConfigDefaultAuthType)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "defaultAuthType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Service" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TransformSchema" }),
        __metadata("design:type", Object)
    ], DeleteBackendApiRequestBodyResourceConfig.prototype, "transformSchema", void 0);
    return DeleteBackendApiRequestBodyResourceConfig;
}(utils_1.SpeakeasyBase));
exports.DeleteBackendApiRequestBodyResourceConfig = DeleteBackendApiRequestBodyResourceConfig;
var DeleteBackendApiRequestBody = /** @class */ (function (_super) {
    __extends(DeleteBackendApiRequestBody, _super);
    function DeleteBackendApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceConfig" }),
        __metadata("design:type", DeleteBackendApiRequestBodyResourceConfig)
    ], DeleteBackendApiRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], DeleteBackendApiRequestBody.prototype, "resourceName", void 0);
    return DeleteBackendApiRequestBody;
}(utils_1.SpeakeasyBase));
exports.DeleteBackendApiRequestBody = DeleteBackendApiRequestBody;
var DeleteBackendApiRequest = /** @class */ (function (_super) {
    __extends(DeleteBackendApiRequest, _super);
    function DeleteBackendApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteBackendApiPathParams)
    ], DeleteBackendApiRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteBackendApiHeaders)
    ], DeleteBackendApiRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DeleteBackendApiRequestBody)
    ], DeleteBackendApiRequest.prototype, "request", void 0);
    return DeleteBackendApiRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteBackendApiRequest = DeleteBackendApiRequest;
var DeleteBackendApiResponse = /** @class */ (function (_super) {
    __extends(DeleteBackendApiResponse, _super);
    function DeleteBackendApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteBackendApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteBackendApiResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeleteBackendApiResponse)
    ], DeleteBackendApiResponse.prototype, "deleteBackendAPIResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteBackendApiResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteBackendApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteBackendApiResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteBackendApiResponse.prototype, "tooManyRequestsException", void 0);
    return DeleteBackendApiResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteBackendApiResponse = DeleteBackendApiResponse;
