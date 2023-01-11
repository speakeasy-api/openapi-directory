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
exports.PostDescribeNetworkAclsResponse = exports.PostDescribeNetworkAclsRequest = exports.PostDescribeNetworkAclsHeaders = exports.PostDescribeNetworkAclsQueryParams = exports.PostDescribeNetworkAclsVersionEnum = exports.PostDescribeNetworkAclsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeNetworkAclsActionEnum;
(function (PostDescribeNetworkAclsActionEnum) {
    PostDescribeNetworkAclsActionEnum["DescribeNetworkAcls"] = "DescribeNetworkAcls";
})(PostDescribeNetworkAclsActionEnum = exports.PostDescribeNetworkAclsActionEnum || (exports.PostDescribeNetworkAclsActionEnum = {}));
var PostDescribeNetworkAclsVersionEnum;
(function (PostDescribeNetworkAclsVersionEnum) {
    PostDescribeNetworkAclsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeNetworkAclsVersionEnum = exports.PostDescribeNetworkAclsVersionEnum || (exports.PostDescribeNetworkAclsVersionEnum = {}));
var PostDescribeNetworkAclsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeNetworkAclsQueryParams, _super);
    function PostDescribeNetworkAclsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsQueryParams.prototype, "version", void 0);
    return PostDescribeNetworkAclsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeNetworkAclsQueryParams = PostDescribeNetworkAclsQueryParams;
var PostDescribeNetworkAclsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeNetworkAclsHeaders, _super);
    function PostDescribeNetworkAclsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeNetworkAclsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeNetworkAclsHeaders = PostDescribeNetworkAclsHeaders;
var PostDescribeNetworkAclsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeNetworkAclsRequest, _super);
    function PostDescribeNetworkAclsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeNetworkAclsQueryParams)
    ], PostDescribeNetworkAclsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeNetworkAclsHeaders)
    ], PostDescribeNetworkAclsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeNetworkAclsRequest.prototype, "request", void 0);
    return PostDescribeNetworkAclsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeNetworkAclsRequest = PostDescribeNetworkAclsRequest;
var PostDescribeNetworkAclsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeNetworkAclsResponse, _super);
    function PostDescribeNetworkAclsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeNetworkAclsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeNetworkAclsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeNetworkAclsResponse.prototype, "statusCode", void 0);
    return PostDescribeNetworkAclsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeNetworkAclsResponse = PostDescribeNetworkAclsResponse;
