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
exports.UpdateLaunchProfileResponse = exports.UpdateLaunchProfileRequest = exports.UpdateLaunchProfileRequestBody = exports.UpdateLaunchProfileRequestBodyStreamConfiguration = exports.UpdateLaunchProfileHeaders = exports.UpdateLaunchProfilePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateLaunchProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfilePathParams, _super);
    function UpdateLaunchProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=launchProfileId" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfilePathParams.prototype, "launchProfileId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=studioId" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfilePathParams.prototype, "studioId", void 0);
    return UpdateLaunchProfilePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchProfilePathParams = UpdateLaunchProfilePathParams;
var UpdateLaunchProfileHeaders = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileHeaders, _super);
    function UpdateLaunchProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Client-Token" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzClientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateLaunchProfileHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchProfileHeaders = UpdateLaunchProfileHeaders;
var UpdateLaunchProfileRequestBodyStreamConfiguration = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileRequestBodyStreamConfiguration, _super);
    function UpdateLaunchProfileRequestBodyStreamConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clipboardMode" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileRequestBodyStreamConfiguration.prototype, "clipboardMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ec2InstanceTypes" }),
        __metadata("design:type", Array)
    ], UpdateLaunchProfileRequestBodyStreamConfiguration.prototype, "ec2InstanceTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maxSessionLengthInMinutes" }),
        __metadata("design:type", Number)
    ], UpdateLaunchProfileRequestBodyStreamConfiguration.prototype, "maxSessionLengthInMinutes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamingImageIds" }),
        __metadata("design:type", Array)
    ], UpdateLaunchProfileRequestBodyStreamConfiguration.prototype, "streamingImageIds", void 0);
    return UpdateLaunchProfileRequestBodyStreamConfiguration;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchProfileRequestBodyStreamConfiguration = UpdateLaunchProfileRequestBodyStreamConfiguration;
var UpdateLaunchProfileRequestBody = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileRequestBody, _super);
    function UpdateLaunchProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileRequestBody.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=launchProfileProtocolVersions" }),
        __metadata("design:type", Array)
    ], UpdateLaunchProfileRequestBody.prototype, "launchProfileProtocolVersions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateLaunchProfileRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=streamConfiguration" }),
        __metadata("design:type", UpdateLaunchProfileRequestBodyStreamConfiguration)
    ], UpdateLaunchProfileRequestBody.prototype, "streamConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=studioComponentIds" }),
        __metadata("design:type", Array)
    ], UpdateLaunchProfileRequestBody.prototype, "studioComponentIds", void 0);
    return UpdateLaunchProfileRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchProfileRequestBody = UpdateLaunchProfileRequestBody;
var UpdateLaunchProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileRequest, _super);
    function UpdateLaunchProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateLaunchProfilePathParams)
    ], UpdateLaunchProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateLaunchProfileHeaders)
    ], UpdateLaunchProfileRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateLaunchProfileRequestBody)
    ], UpdateLaunchProfileRequest.prototype, "request", void 0);
    return UpdateLaunchProfileRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchProfileRequest = UpdateLaunchProfileRequest;
var UpdateLaunchProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateLaunchProfileResponse, _super);
    function UpdateLaunchProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "conflictException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateLaunchProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateLaunchProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateLaunchProfileResponse)
    ], UpdateLaunchProfileResponse.prototype, "updateLaunchProfileResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateLaunchProfileResponse.prototype, "validationException", void 0);
    return UpdateLaunchProfileResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateLaunchProfileResponse = UpdateLaunchProfileResponse;
