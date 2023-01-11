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
exports.UpdateSmsTemplateResponse = exports.UpdateSmsTemplateRequest = exports.UpdateSmsTemplateRequestBody = exports.UpdateSmsTemplateRequestBodySmsTemplateRequest = exports.UpdateSmsTemplateHeaders = exports.UpdateSmsTemplateQueryParams = exports.UpdateSmsTemplatePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateSmsTemplatePathParams = /** @class */ (function (_super) {
    __extends(UpdateSmsTemplatePathParams, _super);
    function UpdateSmsTemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=template-name" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplatePathParams.prototype, "templateName", void 0);
    return UpdateSmsTemplatePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSmsTemplatePathParams = UpdateSmsTemplatePathParams;
var UpdateSmsTemplateQueryParams = /** @class */ (function (_super) {
    __extends(UpdateSmsTemplateQueryParams, _super);
    function UpdateSmsTemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=create-new-version" }),
        __metadata("design:type", Boolean)
    ], UpdateSmsTemplateQueryParams.prototype, "createNewVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateQueryParams.prototype, "version", void 0);
    return UpdateSmsTemplateQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdateSmsTemplateQueryParams = UpdateSmsTemplateQueryParams;
var UpdateSmsTemplateHeaders = /** @class */ (function (_super) {
    __extends(UpdateSmsTemplateHeaders, _super);
    function UpdateSmsTemplateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return UpdateSmsTemplateHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdateSmsTemplateHeaders = UpdateSmsTemplateHeaders;
// UpdateSmsTemplateRequestBodySmsTemplateRequest
/**
 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
**/
var UpdateSmsTemplateRequestBodySmsTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateSmsTemplateRequestBodySmsTemplateRequest, _super);
    function UpdateSmsTemplateRequestBodySmsTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Body" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateRequestBodySmsTemplateRequest.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultSubstitutions" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateRequestBodySmsTemplateRequest.prototype, "defaultSubstitutions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RecommenderId" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateRequestBodySmsTemplateRequest.prototype, "recommenderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TemplateDescription" }),
        __metadata("design:type", String)
    ], UpdateSmsTemplateRequestBodySmsTemplateRequest.prototype, "templateDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], UpdateSmsTemplateRequestBodySmsTemplateRequest.prototype, "tags", void 0);
    return UpdateSmsTemplateRequestBodySmsTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSmsTemplateRequestBodySmsTemplateRequest = UpdateSmsTemplateRequestBodySmsTemplateRequest;
var UpdateSmsTemplateRequestBody = /** @class */ (function (_super) {
    __extends(UpdateSmsTemplateRequestBody, _super);
    function UpdateSmsTemplateRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SMSTemplateRequest" }),
        __metadata("design:type", UpdateSmsTemplateRequestBodySmsTemplateRequest)
    ], UpdateSmsTemplateRequestBody.prototype, "smsTemplateRequest", void 0);
    return UpdateSmsTemplateRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateSmsTemplateRequestBody = UpdateSmsTemplateRequestBody;
var UpdateSmsTemplateRequest = /** @class */ (function (_super) {
    __extends(UpdateSmsTemplateRequest, _super);
    function UpdateSmsTemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSmsTemplatePathParams)
    ], UpdateSmsTemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSmsTemplateQueryParams)
    ], UpdateSmsTemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateSmsTemplateHeaders)
    ], UpdateSmsTemplateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateSmsTemplateRequestBody)
    ], UpdateSmsTemplateRequest.prototype, "request", void 0);
    return UpdateSmsTemplateRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateSmsTemplateRequest = UpdateSmsTemplateRequest;
var UpdateSmsTemplateResponse = /** @class */ (function (_super) {
    __extends(UpdateSmsTemplateResponse, _super);
    function UpdateSmsTemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSmsTemplateResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateSmsTemplateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSmsTemplateResponse.prototype, "forbiddenException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSmsTemplateResponse.prototype, "internalServerErrorException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSmsTemplateResponse.prototype, "methodNotAllowedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSmsTemplateResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSmsTemplateResponse.prototype, "payloadTooLargeException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateSmsTemplateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateSmsTemplateResponse.prototype, "tooManyRequestsException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.UpdateSmsTemplateResponse)
    ], UpdateSmsTemplateResponse.prototype, "updateSmsTemplateResponse", void 0);
    return UpdateSmsTemplateResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateSmsTemplateResponse = UpdateSmsTemplateResponse;
