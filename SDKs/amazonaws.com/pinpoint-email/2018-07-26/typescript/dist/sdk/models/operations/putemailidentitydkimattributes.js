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
exports.PutEmailIdentityDkimAttributesResponse = exports.PutEmailIdentityDkimAttributesRequest = exports.PutEmailIdentityDkimAttributesRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var PutEmailIdentityDkimAttributesRequestBody = /** @class */ (function (_super) {
    __extends(PutEmailIdentityDkimAttributesRequestBody, _super);
    function PutEmailIdentityDkimAttributesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "SigningEnabled" }),
        __metadata("design:type", Boolean)
    ], PutEmailIdentityDkimAttributesRequestBody.prototype, "signingEnabled", void 0);
    return PutEmailIdentityDkimAttributesRequestBody;
}(utils_1.SpeakeasyBase));
exports.PutEmailIdentityDkimAttributesRequestBody = PutEmailIdentityDkimAttributesRequestBody;
var PutEmailIdentityDkimAttributesRequest = /** @class */ (function (_super) {
    __extends(PutEmailIdentityDkimAttributesRequest, _super);
    function PutEmailIdentityDkimAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=EmailIdentity",
        }),
        __metadata("design:type", String)
    ], PutEmailIdentityDkimAttributesRequest.prototype, "emailIdentity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutEmailIdentityDkimAttributesRequestBody)
    ], PutEmailIdentityDkimAttributesRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
        }),
        __metadata("design:type", String)
    ], PutEmailIdentityDkimAttributesRequest.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
        }),
        __metadata("design:type", String)
    ], PutEmailIdentityDkimAttributesRequest.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Credential",
        }),
        __metadata("design:type", String)
    ], PutEmailIdentityDkimAttributesRequest.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Date",
        }),
        __metadata("design:type", String)
    ], PutEmailIdentityDkimAttributesRequest.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
        }),
        __metadata("design:type", String)
    ], PutEmailIdentityDkimAttributesRequest.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-Signature",
        }),
        __metadata("design:type", String)
    ], PutEmailIdentityDkimAttributesRequest.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
        }),
        __metadata("design:type", String)
    ], PutEmailIdentityDkimAttributesRequest.prototype, "xAmzSignedHeaders", void 0);
    return PutEmailIdentityDkimAttributesRequest;
}(utils_1.SpeakeasyBase));
exports.PutEmailIdentityDkimAttributesRequest = PutEmailIdentityDkimAttributesRequest;
var PutEmailIdentityDkimAttributesResponse = /** @class */ (function (_super) {
    __extends(PutEmailIdentityDkimAttributesResponse, _super);
    function PutEmailIdentityDkimAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutEmailIdentityDkimAttributesResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutEmailIdentityDkimAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutEmailIdentityDkimAttributesResponse.prototype, "notFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutEmailIdentityDkimAttributesResponse.prototype, "putEmailIdentityDkimAttributesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutEmailIdentityDkimAttributesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutEmailIdentityDkimAttributesResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PutEmailIdentityDkimAttributesResponse.prototype, "tooManyRequestsException", void 0);
    return PutEmailIdentityDkimAttributesResponse;
}(utils_1.SpeakeasyBase));
exports.PutEmailIdentityDkimAttributesResponse = PutEmailIdentityDkimAttributesResponse;
