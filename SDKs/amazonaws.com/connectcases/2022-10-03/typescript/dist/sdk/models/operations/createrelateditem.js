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
exports.CreateRelatedItemResponse = exports.CreateRelatedItemRequest = exports.CreateRelatedItemRequestBody = exports.CreateRelatedItemRequestBodyTypeEnum = exports.CreateRelatedItemRequestBodyContent = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
/**
 * Represents the content of a related item to be created.
 */
var CreateRelatedItemRequestBodyContent = /** @class */ (function (_super) {
    __extends(CreateRelatedItemRequestBodyContent, _super);
    function CreateRelatedItemRequestBodyContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "comment" }),
        (0, class_transformer_1.Type)(function () { return shared.CommentContent; }),
        __metadata("design:type", shared.CommentContent)
    ], CreateRelatedItemRequestBodyContent.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "contact" }),
        (0, class_transformer_1.Type)(function () { return shared.Contact; }),
        __metadata("design:type", shared.Contact)
    ], CreateRelatedItemRequestBodyContent.prototype, "contact", void 0);
    return CreateRelatedItemRequestBodyContent;
}(utils_1.SpeakeasyBase));
exports.CreateRelatedItemRequestBodyContent = CreateRelatedItemRequestBodyContent;
/**
 * The type of a related item.
 */
var CreateRelatedItemRequestBodyTypeEnum;
(function (CreateRelatedItemRequestBodyTypeEnum) {
    CreateRelatedItemRequestBodyTypeEnum["Contact"] = "Contact";
    CreateRelatedItemRequestBodyTypeEnum["Comment"] = "Comment";
})(CreateRelatedItemRequestBodyTypeEnum = exports.CreateRelatedItemRequestBodyTypeEnum || (exports.CreateRelatedItemRequestBodyTypeEnum = {}));
var CreateRelatedItemRequestBody = /** @class */ (function (_super) {
    __extends(CreateRelatedItemRequestBody, _super);
    function CreateRelatedItemRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "content" }),
        (0, class_transformer_1.Type)(function () { return CreateRelatedItemRequestBodyContent; }),
        __metadata("design:type", CreateRelatedItemRequestBodyContent)
    ], CreateRelatedItemRequestBody.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], CreateRelatedItemRequestBody.prototype, "type", void 0);
    return CreateRelatedItemRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateRelatedItemRequestBody = CreateRelatedItemRequestBody;
var CreateRelatedItemRequest = /** @class */ (function (_super) {
    __extends(CreateRelatedItemRequest, _super);
    function CreateRelatedItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateRelatedItemRequestBody)
    ], CreateRelatedItemRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], CreateRelatedItemRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], CreateRelatedItemRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], CreateRelatedItemRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], CreateRelatedItemRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], CreateRelatedItemRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], CreateRelatedItemRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], CreateRelatedItemRequest.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=caseId",
        }),
        __metadata("design:type", String)
    ], CreateRelatedItemRequest.prototype, "caseId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=domainId",
        }),
        __metadata("design:type", String)
    ], CreateRelatedItemRequest.prototype, "domainId", void 0);
    return CreateRelatedItemRequest;
}(utils_1.SpeakeasyBase));
exports.CreateRelatedItemRequest = CreateRelatedItemRequest;
var CreateRelatedItemResponse = /** @class */ (function (_super) {
    __extends(CreateRelatedItemResponse, _super);
    function CreateRelatedItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRelatedItemResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateRelatedItemResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateRelatedItemResponse)
    ], CreateRelatedItemResponse.prototype, "createRelatedItemResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRelatedItemResponse.prototype, "internalServerException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRelatedItemResponse.prototype, "serviceQuotaExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateRelatedItemResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRelatedItemResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRelatedItemResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRelatedItemResponse.prototype, "throttlingException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateRelatedItemResponse.prototype, "validationException", void 0);
    return CreateRelatedItemResponse;
}(utils_1.SpeakeasyBase));
exports.CreateRelatedItemResponse = CreateRelatedItemResponse;
