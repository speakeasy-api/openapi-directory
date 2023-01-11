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
exports.PostDescribeSpotInstanceRequestsResponse = exports.PostDescribeSpotInstanceRequestsRequest = exports.PostDescribeSpotInstanceRequestsHeaders = exports.PostDescribeSpotInstanceRequestsQueryParams = exports.PostDescribeSpotInstanceRequestsVersionEnum = exports.PostDescribeSpotInstanceRequestsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeSpotInstanceRequestsActionEnum;
(function (PostDescribeSpotInstanceRequestsActionEnum) {
    PostDescribeSpotInstanceRequestsActionEnum["DescribeSpotInstanceRequests"] = "DescribeSpotInstanceRequests";
})(PostDescribeSpotInstanceRequestsActionEnum = exports.PostDescribeSpotInstanceRequestsActionEnum || (exports.PostDescribeSpotInstanceRequestsActionEnum = {}));
var PostDescribeSpotInstanceRequestsVersionEnum;
(function (PostDescribeSpotInstanceRequestsVersionEnum) {
    PostDescribeSpotInstanceRequestsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeSpotInstanceRequestsVersionEnum = exports.PostDescribeSpotInstanceRequestsVersionEnum || (exports.PostDescribeSpotInstanceRequestsVersionEnum = {}));
var PostDescribeSpotInstanceRequestsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeSpotInstanceRequestsQueryParams, _super);
    function PostDescribeSpotInstanceRequestsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsQueryParams.prototype, "version", void 0);
    return PostDescribeSpotInstanceRequestsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSpotInstanceRequestsQueryParams = PostDescribeSpotInstanceRequestsQueryParams;
var PostDescribeSpotInstanceRequestsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeSpotInstanceRequestsHeaders, _super);
    function PostDescribeSpotInstanceRequestsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeSpotInstanceRequestsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSpotInstanceRequestsHeaders = PostDescribeSpotInstanceRequestsHeaders;
var PostDescribeSpotInstanceRequestsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeSpotInstanceRequestsRequest, _super);
    function PostDescribeSpotInstanceRequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeSpotInstanceRequestsQueryParams)
    ], PostDescribeSpotInstanceRequestsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeSpotInstanceRequestsHeaders)
    ], PostDescribeSpotInstanceRequestsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSpotInstanceRequestsRequest.prototype, "request", void 0);
    return PostDescribeSpotInstanceRequestsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSpotInstanceRequestsRequest = PostDescribeSpotInstanceRequestsRequest;
var PostDescribeSpotInstanceRequestsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeSpotInstanceRequestsResponse, _super);
    function PostDescribeSpotInstanceRequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSpotInstanceRequestsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeSpotInstanceRequestsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeSpotInstanceRequestsResponse.prototype, "statusCode", void 0);
    return PostDescribeSpotInstanceRequestsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSpotInstanceRequestsResponse = PostDescribeSpotInstanceRequestsResponse;
