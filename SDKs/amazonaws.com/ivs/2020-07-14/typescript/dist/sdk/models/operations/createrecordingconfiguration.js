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
exports.CreateRecordingConfigurationResponse = exports.CreateRecordingConfigurationRequest = exports.CreateRecordingConfigurationRequestBody = exports.CreateRecordingConfigurationRequestBodyDestinationConfiguration = exports.CreateRecordingConfigurationHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateRecordingConfigurationHeaders = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationHeaders, _super);
    function CreateRecordingConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateRecordingConfigurationHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateRecordingConfigurationHeaders = CreateRecordingConfigurationHeaders;
// CreateRecordingConfigurationRequestBodyDestinationConfiguration
/**
 * A complex type that describes a location where recorded videos will be stored. Each member represents a type of destination configuration. For recording, you define one and only one type of destination configuration.
**/
var CreateRecordingConfigurationRequestBodyDestinationConfiguration = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationRequestBodyDestinationConfiguration, _super);
    function CreateRecordingConfigurationRequestBodyDestinationConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=s3" }),
        __metadata("design:type", shared.S3DestinationConfiguration)
    ], CreateRecordingConfigurationRequestBodyDestinationConfiguration.prototype, "s3", void 0);
    return CreateRecordingConfigurationRequestBodyDestinationConfiguration;
}(utils_1.SpeakeasyBase));
exports.CreateRecordingConfigurationRequestBodyDestinationConfiguration = CreateRecordingConfigurationRequestBodyDestinationConfiguration;
var CreateRecordingConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationRequestBody, _super);
    function CreateRecordingConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinationConfiguration" }),
        __metadata("design:type", CreateRecordingConfigurationRequestBodyDestinationConfiguration)
    ], CreateRecordingConfigurationRequestBody.prototype, "destinationConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationRequestBody.prototype, "tags", void 0);
    return CreateRecordingConfigurationRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateRecordingConfigurationRequestBody = CreateRecordingConfigurationRequestBody;
var CreateRecordingConfigurationRequest = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationRequest, _super);
    function CreateRecordingConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateRecordingConfigurationHeaders)
    ], CreateRecordingConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRecordingConfigurationRequestBody)
    ], CreateRecordingConfigurationRequest.prototype, "request", void 0);
    return CreateRecordingConfigurationRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRecordingConfigurationRequest = CreateRecordingConfigurationRequest;
var CreateRecordingConfigurationResponse = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationResponse, _super);
    function CreateRecordingConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateRecordingConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateRecordingConfigurationResponse)
    ], CreateRecordingConfigurationResponse.prototype, "createRecordingConfigurationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "pendingVerification", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateRecordingConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRecordingConfigurationResponse.prototype, "validationException", void 0);
    return CreateRecordingConfigurationResponse;
}(utils_1.SpeakeasyBase));
exports.CreateRecordingConfigurationResponse = CreateRecordingConfigurationResponse;
