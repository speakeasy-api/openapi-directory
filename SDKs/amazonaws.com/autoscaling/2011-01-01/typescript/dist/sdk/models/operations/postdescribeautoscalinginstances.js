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
exports.PostDescribeAutoScalingInstancesResponse = exports.PostDescribeAutoScalingInstancesRequest = exports.PostDescribeAutoScalingInstancesHeaders = exports.PostDescribeAutoScalingInstancesQueryParams = exports.PostDescribeAutoScalingInstancesVersionEnum = exports.PostDescribeAutoScalingInstancesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeAutoScalingInstancesActionEnum;
(function (PostDescribeAutoScalingInstancesActionEnum) {
    PostDescribeAutoScalingInstancesActionEnum["DescribeAutoScalingInstances"] = "DescribeAutoScalingInstances";
})(PostDescribeAutoScalingInstancesActionEnum = exports.PostDescribeAutoScalingInstancesActionEnum || (exports.PostDescribeAutoScalingInstancesActionEnum = {}));
var PostDescribeAutoScalingInstancesVersionEnum;
(function (PostDescribeAutoScalingInstancesVersionEnum) {
    PostDescribeAutoScalingInstancesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostDescribeAutoScalingInstancesVersionEnum = exports.PostDescribeAutoScalingInstancesVersionEnum || (exports.PostDescribeAutoScalingInstancesVersionEnum = {}));
var PostDescribeAutoScalingInstancesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingInstancesQueryParams, _super);
    function PostDescribeAutoScalingInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesQueryParams.prototype, "version", void 0);
    return PostDescribeAutoScalingInstancesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAutoScalingInstancesQueryParams = PostDescribeAutoScalingInstancesQueryParams;
var PostDescribeAutoScalingInstancesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingInstancesHeaders, _super);
    function PostDescribeAutoScalingInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeAutoScalingInstancesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAutoScalingInstancesHeaders = PostDescribeAutoScalingInstancesHeaders;
var PostDescribeAutoScalingInstancesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingInstancesRequest, _super);
    function PostDescribeAutoScalingInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeAutoScalingInstancesQueryParams)
    ], PostDescribeAutoScalingInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeAutoScalingInstancesHeaders)
    ], PostDescribeAutoScalingInstancesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAutoScalingInstancesRequest.prototype, "request", void 0);
    return PostDescribeAutoScalingInstancesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAutoScalingInstancesRequest = PostDescribeAutoScalingInstancesRequest;
var PostDescribeAutoScalingInstancesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeAutoScalingInstancesResponse, _super);
    function PostDescribeAutoScalingInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAutoScalingInstancesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeAutoScalingInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeAutoScalingInstancesResponse.prototype, "statusCode", void 0);
    return PostDescribeAutoScalingInstancesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAutoScalingInstancesResponse = PostDescribeAutoScalingInstancesResponse;
