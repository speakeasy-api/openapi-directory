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
exports.PostDescribeAccountLimitsResponse = exports.PostDescribeAccountLimitsRequest = exports.PostDescribeAccountLimitsHeaders = exports.PostDescribeAccountLimitsQueryParams = exports.PostDescribeAccountLimitsVersionEnum = exports.PostDescribeAccountLimitsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeAccountLimitsActionEnum;
(function (PostDescribeAccountLimitsActionEnum) {
    PostDescribeAccountLimitsActionEnum["DescribeAccountLimits"] = "DescribeAccountLimits";
})(PostDescribeAccountLimitsActionEnum = exports.PostDescribeAccountLimitsActionEnum || (exports.PostDescribeAccountLimitsActionEnum = {}));
var PostDescribeAccountLimitsVersionEnum;
(function (PostDescribeAccountLimitsVersionEnum) {
    PostDescribeAccountLimitsVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(PostDescribeAccountLimitsVersionEnum = exports.PostDescribeAccountLimitsVersionEnum || (exports.PostDescribeAccountLimitsVersionEnum = {}));
var PostDescribeAccountLimitsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeAccountLimitsQueryParams, _super);
    function PostDescribeAccountLimitsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeAccountLimitsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeAccountLimitsQueryParams.prototype, "version", void 0);
    return PostDescribeAccountLimitsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAccountLimitsQueryParams = PostDescribeAccountLimitsQueryParams;
var PostDescribeAccountLimitsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeAccountLimitsHeaders, _super);
    function PostDescribeAccountLimitsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeAccountLimitsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeAccountLimitsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeAccountLimitsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeAccountLimitsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeAccountLimitsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeAccountLimitsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeAccountLimitsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeAccountLimitsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAccountLimitsHeaders = PostDescribeAccountLimitsHeaders;
var PostDescribeAccountLimitsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeAccountLimitsRequest, _super);
    function PostDescribeAccountLimitsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeAccountLimitsQueryParams)
    ], PostDescribeAccountLimitsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeAccountLimitsHeaders)
    ], PostDescribeAccountLimitsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAccountLimitsRequest.prototype, "request", void 0);
    return PostDescribeAccountLimitsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAccountLimitsRequest = PostDescribeAccountLimitsRequest;
var PostDescribeAccountLimitsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeAccountLimitsResponse, _super);
    function PostDescribeAccountLimitsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAccountLimitsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeAccountLimitsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeAccountLimitsResponse.prototype, "statusCode", void 0);
    return PostDescribeAccountLimitsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAccountLimitsResponse = PostDescribeAccountLimitsResponse;
