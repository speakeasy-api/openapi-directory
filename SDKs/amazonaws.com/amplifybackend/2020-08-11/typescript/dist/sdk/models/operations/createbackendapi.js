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
exports.CreateBackendApiResponse = exports.CreateBackendApiRequest = exports.CreateBackendApiRequestBody = exports.CreateBackendApiRequestBodyResourceConfig = exports.CreateBackendApiRequestBodyResourceConfigDefaultAuthType = exports.CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = exports.CreateBackendApiRequestBodyResourceConfigConflictResolution = exports.CreateBackendApiHeaders = exports.CreateBackendApiPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateBackendApiPathParams = /** @class */ (function (_super) {
    __extends(CreateBackendApiPathParams, _super);
    function CreateBackendApiPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], CreateBackendApiPathParams.prototype, "appId", void 0);
    return CreateBackendApiPathParams;
}(utils_1.SpeakeasyBase));
exports.CreateBackendApiPathParams = CreateBackendApiPathParams;
var CreateBackendApiHeaders = /** @class */ (function (_super) {
    __extends(CreateBackendApiHeaders, _super);
    function CreateBackendApiHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateBackendApiHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateBackendApiHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateBackendApiHeaders = CreateBackendApiHeaders;
// CreateBackendApiRequestBodyResourceConfigConflictResolution
/**
 * The conflict resolution strategy for your data stored in the data models.
**/
var CreateBackendApiRequestBodyResourceConfigConflictResolution = /** @class */ (function (_super) {
    __extends(CreateBackendApiRequestBodyResourceConfigConflictResolution, _super);
    function CreateBackendApiRequestBodyResourceConfigConflictResolution() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResolutionStrategy" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfigConflictResolution.prototype, "resolutionStrategy", void 0);
    return CreateBackendApiRequestBodyResourceConfigConflictResolution;
}(utils_1.SpeakeasyBase));
exports.CreateBackendApiRequestBodyResourceConfigConflictResolution = CreateBackendApiRequestBodyResourceConfigConflictResolution;
// CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings
/**
 * Describes settings for the authentication mode.
**/
var CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = /** @class */ (function (_super) {
    __extends(CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings, _super);
    function CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CognitoUserPoolId" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "cognitoUserPoolId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ExpirationTime" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "expirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDAuthTTL" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDAuthTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDClientId" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDClientID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDIatTTL" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDIatTTL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDIssueURL" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDIssueURL", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OpenIDProviderName" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings.prototype, "openIDProviderName", void 0);
    return CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
}(utils_1.SpeakeasyBase));
exports.CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings = CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings;
// CreateBackendApiRequestBodyResourceConfigDefaultAuthType
/**
 * The default authentication type for interacting with the configured data models in your Amplify project.
**/
var CreateBackendApiRequestBodyResourceConfigDefaultAuthType = /** @class */ (function (_super) {
    __extends(CreateBackendApiRequestBodyResourceConfigDefaultAuthType, _super);
    function CreateBackendApiRequestBodyResourceConfigDefaultAuthType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Mode" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfigDefaultAuthType.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Settings" }),
        __metadata("design:type", CreateBackendApiRequestBodyResourceConfigDefaultAuthTypeSettings)
    ], CreateBackendApiRequestBodyResourceConfigDefaultAuthType.prototype, "settings", void 0);
    return CreateBackendApiRequestBodyResourceConfigDefaultAuthType;
}(utils_1.SpeakeasyBase));
exports.CreateBackendApiRequestBodyResourceConfigDefaultAuthType = CreateBackendApiRequestBodyResourceConfigDefaultAuthType;
// CreateBackendApiRequestBodyResourceConfig
/**
 * The resource config for the data model, configured as a part of the Amplify project.
**/
var CreateBackendApiRequestBodyResourceConfig = /** @class */ (function (_super) {
    __extends(CreateBackendApiRequestBodyResourceConfig, _super);
    function CreateBackendApiRequestBodyResourceConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AdditionalAuthTypes" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "additionalAuthTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ApiName" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "apiName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConflictResolution" }),
        __metadata("design:type", CreateBackendApiRequestBodyResourceConfigConflictResolution)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "conflictResolution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultAuthType" }),
        __metadata("design:type", CreateBackendApiRequestBodyResourceConfigDefaultAuthType)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "defaultAuthType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Service" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "service", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TransformSchema" }),
        __metadata("design:type", Object)
    ], CreateBackendApiRequestBodyResourceConfig.prototype, "transformSchema", void 0);
    return CreateBackendApiRequestBodyResourceConfig;
}(utils_1.SpeakeasyBase));
exports.CreateBackendApiRequestBodyResourceConfig = CreateBackendApiRequestBodyResourceConfig;
var CreateBackendApiRequestBody = /** @class */ (function (_super) {
    __extends(CreateBackendApiRequestBody, _super);
    function CreateBackendApiRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backendEnvironmentName" }),
        __metadata("design:type", String)
    ], CreateBackendApiRequestBody.prototype, "backendEnvironmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceConfig" }),
        __metadata("design:type", CreateBackendApiRequestBodyResourceConfig)
    ], CreateBackendApiRequestBody.prototype, "resourceConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], CreateBackendApiRequestBody.prototype, "resourceName", void 0);
    return CreateBackendApiRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateBackendApiRequestBody = CreateBackendApiRequestBody;
var CreateBackendApiRequest = /** @class */ (function (_super) {
    __extends(CreateBackendApiRequest, _super);
    function CreateBackendApiRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateBackendApiPathParams)
    ], CreateBackendApiRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateBackendApiHeaders)
    ], CreateBackendApiRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateBackendApiRequestBody)
    ], CreateBackendApiRequest.prototype, "request", void 0);
    return CreateBackendApiRequest;
}(utils_1.SpeakeasyBase));
exports.CreateBackendApiRequest = CreateBackendApiRequest;
var CreateBackendApiResponse = /** @class */ (function (_super) {
    __extends(CreateBackendApiResponse, _super);
    function CreateBackendApiResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBackendApiResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateBackendApiResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateBackendApiResponse)
    ], CreateBackendApiResponse.prototype, "createBackendAPIResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBackendApiResponse.prototype, "gatewayTimeoutException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBackendApiResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateBackendApiResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateBackendApiResponse.prototype, "tooManyRequestsException", void 0);
    return CreateBackendApiResponse;
}(utils_1.SpeakeasyBase));
exports.CreateBackendApiResponse = CreateBackendApiResponse;
