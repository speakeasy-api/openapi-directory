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
exports.PostDescribeLoggingStatusResponse = exports.PostDescribeLoggingStatusRequest = exports.PostDescribeLoggingStatusHeaders = exports.PostDescribeLoggingStatusQueryParams = exports.PostDescribeLoggingStatusVersionEnum = exports.PostDescribeLoggingStatusActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeLoggingStatusActionEnum;
(function (PostDescribeLoggingStatusActionEnum) {
    PostDescribeLoggingStatusActionEnum["DescribeLoggingStatus"] = "DescribeLoggingStatus";
})(PostDescribeLoggingStatusActionEnum = exports.PostDescribeLoggingStatusActionEnum || (exports.PostDescribeLoggingStatusActionEnum = {}));
var PostDescribeLoggingStatusVersionEnum;
(function (PostDescribeLoggingStatusVersionEnum) {
    PostDescribeLoggingStatusVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeLoggingStatusVersionEnum = exports.PostDescribeLoggingStatusVersionEnum || (exports.PostDescribeLoggingStatusVersionEnum = {}));
var PostDescribeLoggingStatusQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeLoggingStatusQueryParams, _super);
    function PostDescribeLoggingStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeLoggingStatusQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeLoggingStatusQueryParams.prototype, "version", void 0);
    return PostDescribeLoggingStatusQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLoggingStatusQueryParams = PostDescribeLoggingStatusQueryParams;
var PostDescribeLoggingStatusHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeLoggingStatusHeaders, _super);
    function PostDescribeLoggingStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeLoggingStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeLoggingStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeLoggingStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeLoggingStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeLoggingStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeLoggingStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeLoggingStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeLoggingStatusHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLoggingStatusHeaders = PostDescribeLoggingStatusHeaders;
var PostDescribeLoggingStatusRequest = /** @class */ (function (_super) {
    __extends(PostDescribeLoggingStatusRequest, _super);
    function PostDescribeLoggingStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeLoggingStatusQueryParams)
    ], PostDescribeLoggingStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeLoggingStatusHeaders)
    ], PostDescribeLoggingStatusRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLoggingStatusRequest.prototype, "request", void 0);
    return PostDescribeLoggingStatusRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLoggingStatusRequest = PostDescribeLoggingStatusRequest;
var PostDescribeLoggingStatusResponse = /** @class */ (function (_super) {
    __extends(PostDescribeLoggingStatusResponse, _super);
    function PostDescribeLoggingStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLoggingStatusResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeLoggingStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeLoggingStatusResponse.prototype, "statusCode", void 0);
    return PostDescribeLoggingStatusResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLoggingStatusResponse = PostDescribeLoggingStatusResponse;
