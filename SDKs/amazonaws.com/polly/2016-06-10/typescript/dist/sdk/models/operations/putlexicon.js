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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutLexiconResponse = exports.PutLexiconRequest = exports.PutLexiconRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var PutLexiconRequestBody = /** @class */ (function (_super) {
    __extends(PutLexiconRequestBody, _super);
    function PutLexiconRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Content" }),
        __metadata("design:type", String)
    ], PutLexiconRequestBody.prototype, "content", void 0);
    return PutLexiconRequestBody;
}(utils_1.SpeakeasyBase));
exports.PutLexiconRequestBody = PutLexiconRequestBody;
var PutLexiconRequest = /** @class */ (function (_super) {
    __extends(PutLexiconRequest, _super);
    function PutLexiconRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=LexiconName",
        }),
        __metadata("design:type", String)
    ], PutLexiconRequest.prototype, "lexiconName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutLexiconRequestBody)
    ], PutLexiconRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], PutLexiconRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], PutLexiconRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], PutLexiconRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], PutLexiconRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], PutLexiconRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], PutLexiconRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], PutLexiconRequest.prototype, "xAmzSignedHeaders", void 0);
    return PutLexiconRequest;
}(utils_1.SpeakeasyBase));
exports.PutLexiconRequest = PutLexiconRequest;
var PutLexiconResponse = /** @class */ (function (_super) {
    __extends(PutLexiconResponse, _super);
    function PutLexiconResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutLexiconResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutLexiconResponse.prototype, "invalidLexiconException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutLexiconResponse.prototype, "lexiconSizeExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutLexiconResponse.prototype, "maxLexemeLengthExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutLexiconResponse.prototype, "maxLexiconsNumberExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutLexiconResponse.prototype, "putLexiconOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutLexiconResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutLexiconResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutLexiconResponse.prototype, "serviceFailureException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutLexiconResponse.prototype, "unsupportedPlsAlphabetException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutLexiconResponse.prototype, "unsupportedPlsLanguageException", void 0);
    return PutLexiconResponse;
}(utils_1.SpeakeasyBase));
exports.PutLexiconResponse = PutLexiconResponse;
