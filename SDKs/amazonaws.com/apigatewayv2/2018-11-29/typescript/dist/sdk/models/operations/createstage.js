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
exports.CreateStageResponse = exports.CreateStageRequest = exports.CreateStageRequestBody = exports.CreateStageRequestBodyDefaultRouteSettings = exports.CreateStageRequestBodyAccessLogSettings = exports.CreateStageHeaders = exports.CreateStagePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateStagePathParams = /** @class */ (function (_super) {
    __extends(CreateStagePathParams, _super);
    function CreateStagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=apiId" }),
        __metadata("design:type", String)
    ], CreateStagePathParams.prototype, "apiId", void 0);
    return CreateStagePathParams;
}(utils_1.SpeakeasyBase));
exports.CreateStagePathParams = CreateStagePathParams;
var CreateStageHeaders = /** @class */ (function (_super) {
    __extends(CreateStageHeaders, _super);
    function CreateStageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateStageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateStageHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateStageHeaders = CreateStageHeaders;
// CreateStageRequestBodyAccessLogSettings
/**
 * Settings for logging access in a stage.
**/
var CreateStageRequestBodyAccessLogSettings = /** @class */ (function (_super) {
    __extends(CreateStageRequestBodyAccessLogSettings, _super);
    function CreateStageRequestBodyAccessLogSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DestinationArn" }),
        __metadata("design:type", Object)
    ], CreateStageRequestBodyAccessLogSettings.prototype, "destinationArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Format" }),
        __metadata("design:type", Object)
    ], CreateStageRequestBodyAccessLogSettings.prototype, "format", void 0);
    return CreateStageRequestBodyAccessLogSettings;
}(utils_1.SpeakeasyBase));
exports.CreateStageRequestBodyAccessLogSettings = CreateStageRequestBodyAccessLogSettings;
// CreateStageRequestBodyDefaultRouteSettings
/**
 * Represents a collection of route settings.
**/
var CreateStageRequestBodyDefaultRouteSettings = /** @class */ (function (_super) {
    __extends(CreateStageRequestBodyDefaultRouteSettings, _super);
    function CreateStageRequestBodyDefaultRouteSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DataTraceEnabled" }),
        __metadata("design:type", Object)
    ], CreateStageRequestBodyDefaultRouteSettings.prototype, "dataTraceEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DetailedMetricsEnabled" }),
        __metadata("design:type", Object)
    ], CreateStageRequestBodyDefaultRouteSettings.prototype, "detailedMetricsEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LoggingLevel" }),
        __metadata("design:type", Object)
    ], CreateStageRequestBodyDefaultRouteSettings.prototype, "loggingLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ThrottlingBurstLimit" }),
        __metadata("design:type", Object)
    ], CreateStageRequestBodyDefaultRouteSettings.prototype, "throttlingBurstLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ThrottlingRateLimit" }),
        __metadata("design:type", Object)
    ], CreateStageRequestBodyDefaultRouteSettings.prototype, "throttlingRateLimit", void 0);
    return CreateStageRequestBodyDefaultRouteSettings;
}(utils_1.SpeakeasyBase));
exports.CreateStageRequestBodyDefaultRouteSettings = CreateStageRequestBodyDefaultRouteSettings;
var CreateStageRequestBody = /** @class */ (function (_super) {
    __extends(CreateStageRequestBody, _super);
    function CreateStageRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessLogSettings" }),
        __metadata("design:type", CreateStageRequestBodyAccessLogSettings)
    ], CreateStageRequestBody.prototype, "accessLogSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoDeploy" }),
        __metadata("design:type", Boolean)
    ], CreateStageRequestBody.prototype, "autoDeploy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientCertificateId" }),
        __metadata("design:type", String)
    ], CreateStageRequestBody.prototype, "clientCertificateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defaultRouteSettings" }),
        __metadata("design:type", CreateStageRequestBodyDefaultRouteSettings)
    ], CreateStageRequestBody.prototype, "defaultRouteSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deploymentId" }),
        __metadata("design:type", String)
    ], CreateStageRequestBody.prototype, "deploymentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], CreateStageRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=routeSettings", elemType: shared.RouteSettings }),
        __metadata("design:type", Object)
    ], CreateStageRequestBody.prototype, "routeSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stageName" }),
        __metadata("design:type", String)
    ], CreateStageRequestBody.prototype, "stageName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stageVariables" }),
        __metadata("design:type", Object)
    ], CreateStageRequestBody.prototype, "stageVariables", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateStageRequestBody.prototype, "tags", void 0);
    return CreateStageRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateStageRequestBody = CreateStageRequestBody;
var CreateStageRequest = /** @class */ (function (_super) {
    __extends(CreateStageRequest, _super);
    function CreateStageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateStagePathParams)
    ], CreateStageRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateStageHeaders)
    ], CreateStageRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateStageRequestBody)
    ], CreateStageRequest.prototype, "request", void 0);
    return CreateStageRequest;
}(utils_1.SpeakeasyBase));
exports.CreateStageRequest = CreateStageRequest;
var CreateStageResponse = /** @class */ (function (_super) {
    __extends(CreateStageResponse, _super);
    function CreateStageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateStageResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateStageResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateStageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateStageResponse)
    ], CreateStageResponse.prototype, "createStageResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateStageResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateStageResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateStageResponse.prototype, "tooManyRequestsException", void 0);
    return CreateStageResponse;
}(utils_1.SpeakeasyBase));
exports.CreateStageResponse = CreateStageResponse;
