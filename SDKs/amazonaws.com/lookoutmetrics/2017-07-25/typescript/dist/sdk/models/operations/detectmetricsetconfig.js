"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.DetectMetricSetConfigResponse = exports.DetectMetricSetConfigRequest = exports.DetectMetricSetConfigRequestBody = exports.DetectMetricSetConfigRequestBodyAutoDetectionMetricSource = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * An auto detection metric source.
 */
var DetectMetricSetConfigRequestBodyAutoDetectionMetricSource = /** @class */ (function (_super) {
    __extends(DetectMetricSetConfigRequestBodyAutoDetectionMetricSource, _super);
    function DetectMetricSetConfigRequestBodyAutoDetectionMetricSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "S3SourceConfig" }),
        (0, class_transformer_1.Type)(function () { return shared.AutoDetectionS3SourceConfig; }),
        __metadata("design:type", shared.AutoDetectionS3SourceConfig)
    ], DetectMetricSetConfigRequestBodyAutoDetectionMetricSource.prototype, "s3SourceConfig", void 0);
    return DetectMetricSetConfigRequestBodyAutoDetectionMetricSource;
}(utils_1.SpeakeasyBase));
exports.DetectMetricSetConfigRequestBodyAutoDetectionMetricSource = DetectMetricSetConfigRequestBodyAutoDetectionMetricSource;
var DetectMetricSetConfigRequestBody = /** @class */ (function (_super) {
    __extends(DetectMetricSetConfigRequestBody, _super);
    function DetectMetricSetConfigRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AnomalyDetectorArn" }),
        __metadata("design:type", String)
    ], DetectMetricSetConfigRequestBody.prototype, "anomalyDetectorArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AutoDetectionMetricSource" }),
        (0, class_transformer_1.Type)(function () { return DetectMetricSetConfigRequestBodyAutoDetectionMetricSource; }),
        __metadata("design:type", DetectMetricSetConfigRequestBodyAutoDetectionMetricSource)
    ], DetectMetricSetConfigRequestBody.prototype, "autoDetectionMetricSource", void 0);
    return DetectMetricSetConfigRequestBody;
}(utils_1.SpeakeasyBase));
exports.DetectMetricSetConfigRequestBody = DetectMetricSetConfigRequestBody;
var DetectMetricSetConfigRequest = /** @class */ (function (_super) {
    __extends(DetectMetricSetConfigRequest, _super);
    function DetectMetricSetConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DetectMetricSetConfigRequestBody)
    ], DetectMetricSetConfigRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], DetectMetricSetConfigRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], DetectMetricSetConfigRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], DetectMetricSetConfigRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], DetectMetricSetConfigRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], DetectMetricSetConfigRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], DetectMetricSetConfigRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], DetectMetricSetConfigRequest.prototype, "xAmzSignedHeaders", void 0);
    return DetectMetricSetConfigRequest;
}(utils_1.SpeakeasyBase));
exports.DetectMetricSetConfigRequest = DetectMetricSetConfigRequest;
var DetectMetricSetConfigResponse = /** @class */ (function (_super) {
    __extends(DetectMetricSetConfigResponse, _super);
    function DetectMetricSetConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DetectMetricSetConfigResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DetectMetricSetConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DetectMetricSetConfigResponse)
    ], DetectMetricSetConfigResponse.prototype, "detectMetricSetConfigResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DetectMetricSetConfigResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DetectMetricSetConfigResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DetectMetricSetConfigResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DetectMetricSetConfigResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DetectMetricSetConfigResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DetectMetricSetConfigResponse.prototype, "validationException", void 0);
    return DetectMetricSetConfigResponse;
}(utils_1.SpeakeasyBase));
exports.DetectMetricSetConfigResponse = DetectMetricSetConfigResponse;
