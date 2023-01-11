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
exports.PostDescribeImageAttributeResponse = exports.PostDescribeImageAttributeRequest = exports.PostDescribeImageAttributeHeaders = exports.PostDescribeImageAttributeQueryParams = exports.PostDescribeImageAttributeVersionEnum = exports.PostDescribeImageAttributeActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeImageAttributeActionEnum;
(function (PostDescribeImageAttributeActionEnum) {
    PostDescribeImageAttributeActionEnum["DescribeImageAttribute"] = "DescribeImageAttribute";
})(PostDescribeImageAttributeActionEnum = exports.PostDescribeImageAttributeActionEnum || (exports.PostDescribeImageAttributeActionEnum = {}));
var PostDescribeImageAttributeVersionEnum;
(function (PostDescribeImageAttributeVersionEnum) {
    PostDescribeImageAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeImageAttributeVersionEnum = exports.PostDescribeImageAttributeVersionEnum || (exports.PostDescribeImageAttributeVersionEnum = {}));
var PostDescribeImageAttributeQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeImageAttributeQueryParams, _super);
    function PostDescribeImageAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeImageAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeImageAttributeQueryParams.prototype, "version", void 0);
    return PostDescribeImageAttributeQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeImageAttributeQueryParams = PostDescribeImageAttributeQueryParams;
var PostDescribeImageAttributeHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeImageAttributeHeaders, _super);
    function PostDescribeImageAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeImageAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeImageAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeImageAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeImageAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeImageAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeImageAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeImageAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeImageAttributeHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeImageAttributeHeaders = PostDescribeImageAttributeHeaders;
var PostDescribeImageAttributeRequest = /** @class */ (function (_super) {
    __extends(PostDescribeImageAttributeRequest, _super);
    function PostDescribeImageAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeImageAttributeQueryParams)
    ], PostDescribeImageAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeImageAttributeHeaders)
    ], PostDescribeImageAttributeRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeImageAttributeRequest.prototype, "request", void 0);
    return PostDescribeImageAttributeRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeImageAttributeRequest = PostDescribeImageAttributeRequest;
var PostDescribeImageAttributeResponse = /** @class */ (function (_super) {
    __extends(PostDescribeImageAttributeResponse, _super);
    function PostDescribeImageAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeImageAttributeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeImageAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeImageAttributeResponse.prototype, "statusCode", void 0);
    return PostDescribeImageAttributeResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeImageAttributeResponse = PostDescribeImageAttributeResponse;
