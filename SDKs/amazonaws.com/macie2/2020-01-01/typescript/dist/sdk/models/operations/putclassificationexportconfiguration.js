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
exports.PutClassificationExportConfigurationResponse = exports.PutClassificationExportConfigurationRequest = exports.PutClassificationExportConfigurationRequestBody = exports.PutClassificationExportConfigurationRequestBodyConfiguration = exports.PutClassificationExportConfigurationHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutClassificationExportConfigurationHeaders = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationHeaders, _super);
    function PutClassificationExportConfigurationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PutClassificationExportConfigurationHeaders;
}(utils_1.SpeakeasyBase));
exports.PutClassificationExportConfigurationHeaders = PutClassificationExportConfigurationHeaders;
// PutClassificationExportConfigurationRequestBodyConfiguration
/**
 * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
**/
var PutClassificationExportConfigurationRequestBodyConfiguration = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationRequestBodyConfiguration, _super);
    function PutClassificationExportConfigurationRequestBodyConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=s3Destination" }),
        __metadata("design:type", shared.S3Destination)
    ], PutClassificationExportConfigurationRequestBodyConfiguration.prototype, "s3Destination", void 0);
    return PutClassificationExportConfigurationRequestBodyConfiguration;
}(utils_1.SpeakeasyBase));
exports.PutClassificationExportConfigurationRequestBodyConfiguration = PutClassificationExportConfigurationRequestBodyConfiguration;
var PutClassificationExportConfigurationRequestBody = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationRequestBody, _super);
    function PutClassificationExportConfigurationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configuration" }),
        __metadata("design:type", PutClassificationExportConfigurationRequestBodyConfiguration)
    ], PutClassificationExportConfigurationRequestBody.prototype, "configuration", void 0);
    return PutClassificationExportConfigurationRequestBody;
}(utils_1.SpeakeasyBase));
exports.PutClassificationExportConfigurationRequestBody = PutClassificationExportConfigurationRequestBody;
var PutClassificationExportConfigurationRequest = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationRequest, _super);
    function PutClassificationExportConfigurationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutClassificationExportConfigurationHeaders)
    ], PutClassificationExportConfigurationRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutClassificationExportConfigurationRequestBody)
    ], PutClassificationExportConfigurationRequest.prototype, "request", void 0);
    return PutClassificationExportConfigurationRequest;
}(utils_1.SpeakeasyBase));
exports.PutClassificationExportConfigurationRequest = PutClassificationExportConfigurationRequest;
var PutClassificationExportConfigurationResponse = /** @class */ (function (_super) {
    __extends(PutClassificationExportConfigurationResponse, _super);
    function PutClassificationExportConfigurationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutClassificationExportConfigurationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.PutClassificationExportConfigurationResponse)
    ], PutClassificationExportConfigurationResponse.prototype, "putClassificationExportConfigurationResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutClassificationExportConfigurationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutClassificationExportConfigurationResponse.prototype, "validationException", void 0);
    return PutClassificationExportConfigurationResponse;
}(utils_1.SpeakeasyBase));
exports.PutClassificationExportConfigurationResponse = PutClassificationExportConfigurationResponse;
