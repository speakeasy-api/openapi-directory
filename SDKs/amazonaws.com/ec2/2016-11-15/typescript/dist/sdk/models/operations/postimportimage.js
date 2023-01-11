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
exports.PostImportImageResponse = exports.PostImportImageRequest = exports.PostImportImageHeaders = exports.PostImportImageQueryParams = exports.PostImportImageVersionEnum = exports.PostImportImageActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostImportImageActionEnum;
(function (PostImportImageActionEnum) {
    PostImportImageActionEnum["ImportImage"] = "ImportImage";
})(PostImportImageActionEnum = exports.PostImportImageActionEnum || (exports.PostImportImageActionEnum = {}));
var PostImportImageVersionEnum;
(function (PostImportImageVersionEnum) {
    PostImportImageVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostImportImageVersionEnum = exports.PostImportImageVersionEnum || (exports.PostImportImageVersionEnum = {}));
var PostImportImageQueryParams = /** @class */ (function (_super) {
    __extends(PostImportImageQueryParams, _super);
    function PostImportImageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostImportImageQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostImportImageQueryParams.prototype, "version", void 0);
    return PostImportImageQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostImportImageQueryParams = PostImportImageQueryParams;
var PostImportImageHeaders = /** @class */ (function (_super) {
    __extends(PostImportImageHeaders, _super);
    function PostImportImageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostImportImageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostImportImageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostImportImageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostImportImageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostImportImageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostImportImageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostImportImageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostImportImageHeaders;
}(utils_1.SpeakeasyBase));
exports.PostImportImageHeaders = PostImportImageHeaders;
var PostImportImageRequest = /** @class */ (function (_super) {
    __extends(PostImportImageRequest, _super);
    function PostImportImageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostImportImageQueryParams)
    ], PostImportImageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostImportImageHeaders)
    ], PostImportImageRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostImportImageRequest.prototype, "request", void 0);
    return PostImportImageRequest;
}(utils_1.SpeakeasyBase));
exports.PostImportImageRequest = PostImportImageRequest;
var PostImportImageResponse = /** @class */ (function (_super) {
    __extends(PostImportImageResponse, _super);
    function PostImportImageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostImportImageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostImportImageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostImportImageResponse.prototype, "statusCode", void 0);
    return PostImportImageResponse;
}(utils_1.SpeakeasyBase));
exports.PostImportImageResponse = PostImportImageResponse;
