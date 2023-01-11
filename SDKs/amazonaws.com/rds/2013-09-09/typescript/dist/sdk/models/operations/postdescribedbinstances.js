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
exports.PostDescribeDbInstancesResponse = exports.PostDescribeDbInstancesRequest = exports.PostDescribeDbInstancesHeaders = exports.PostDescribeDbInstancesQueryParams = exports.PostDescribeDbInstancesVersionEnum = exports.PostDescribeDbInstancesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeDbInstancesActionEnum;
(function (PostDescribeDbInstancesActionEnum) {
    PostDescribeDbInstancesActionEnum["DescribeDbInstances"] = "DescribeDBInstances";
})(PostDescribeDbInstancesActionEnum = exports.PostDescribeDbInstancesActionEnum || (exports.PostDescribeDbInstancesActionEnum = {}));
var PostDescribeDbInstancesVersionEnum;
(function (PostDescribeDbInstancesVersionEnum) {
    PostDescribeDbInstancesVersionEnum["TwoThousandAndThirteen0909"] = "2013-09-09";
})(PostDescribeDbInstancesVersionEnum = exports.PostDescribeDbInstancesVersionEnum || (exports.PostDescribeDbInstancesVersionEnum = {}));
var PostDescribeDbInstancesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDbInstancesQueryParams, _super);
    function PostDescribeDbInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesQueryParams.prototype, "version", void 0);
    return PostDescribeDbInstancesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbInstancesQueryParams = PostDescribeDbInstancesQueryParams;
var PostDescribeDbInstancesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDbInstancesHeaders, _super);
    function PostDescribeDbInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDbInstancesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbInstancesHeaders = PostDescribeDbInstancesHeaders;
var PostDescribeDbInstancesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDbInstancesRequest, _super);
    function PostDescribeDbInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeDbInstancesQueryParams)
    ], PostDescribeDbInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeDbInstancesHeaders)
    ], PostDescribeDbInstancesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbInstancesRequest.prototype, "request", void 0);
    return PostDescribeDbInstancesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbInstancesRequest = PostDescribeDbInstancesRequest;
var PostDescribeDbInstancesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDbInstancesResponse, _super);
    function PostDescribeDbInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbInstancesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeDbInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeDbInstancesResponse.prototype, "statusCode", void 0);
    return PostDescribeDbInstancesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbInstancesResponse = PostDescribeDbInstancesResponse;
