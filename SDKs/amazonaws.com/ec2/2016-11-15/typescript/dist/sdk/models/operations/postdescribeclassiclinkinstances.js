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
exports.PostDescribeClassicLinkInstancesResponse = exports.PostDescribeClassicLinkInstancesRequest = exports.PostDescribeClassicLinkInstancesHeaders = exports.PostDescribeClassicLinkInstancesQueryParams = exports.PostDescribeClassicLinkInstancesVersionEnum = exports.PostDescribeClassicLinkInstancesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeClassicLinkInstancesActionEnum;
(function (PostDescribeClassicLinkInstancesActionEnum) {
    PostDescribeClassicLinkInstancesActionEnum["DescribeClassicLinkInstances"] = "DescribeClassicLinkInstances";
})(PostDescribeClassicLinkInstancesActionEnum = exports.PostDescribeClassicLinkInstancesActionEnum || (exports.PostDescribeClassicLinkInstancesActionEnum = {}));
var PostDescribeClassicLinkInstancesVersionEnum;
(function (PostDescribeClassicLinkInstancesVersionEnum) {
    PostDescribeClassicLinkInstancesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeClassicLinkInstancesVersionEnum = exports.PostDescribeClassicLinkInstancesVersionEnum || (exports.PostDescribeClassicLinkInstancesVersionEnum = {}));
var PostDescribeClassicLinkInstancesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeClassicLinkInstancesQueryParams, _super);
    function PostDescribeClassicLinkInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesQueryParams.prototype, "version", void 0);
    return PostDescribeClassicLinkInstancesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClassicLinkInstancesQueryParams = PostDescribeClassicLinkInstancesQueryParams;
var PostDescribeClassicLinkInstancesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeClassicLinkInstancesHeaders, _super);
    function PostDescribeClassicLinkInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeClassicLinkInstancesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClassicLinkInstancesHeaders = PostDescribeClassicLinkInstancesHeaders;
var PostDescribeClassicLinkInstancesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeClassicLinkInstancesRequest, _super);
    function PostDescribeClassicLinkInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeClassicLinkInstancesQueryParams)
    ], PostDescribeClassicLinkInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeClassicLinkInstancesHeaders)
    ], PostDescribeClassicLinkInstancesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClassicLinkInstancesRequest.prototype, "request", void 0);
    return PostDescribeClassicLinkInstancesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClassicLinkInstancesRequest = PostDescribeClassicLinkInstancesRequest;
var PostDescribeClassicLinkInstancesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeClassicLinkInstancesResponse, _super);
    function PostDescribeClassicLinkInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClassicLinkInstancesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeClassicLinkInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeClassicLinkInstancesResponse.prototype, "statusCode", void 0);
    return PostDescribeClassicLinkInstancesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClassicLinkInstancesResponse = PostDescribeClassicLinkInstancesResponse;
