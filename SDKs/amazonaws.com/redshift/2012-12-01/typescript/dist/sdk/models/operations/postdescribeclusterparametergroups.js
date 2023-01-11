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
exports.PostDescribeClusterParameterGroupsResponse = exports.PostDescribeClusterParameterGroupsRequest = exports.PostDescribeClusterParameterGroupsHeaders = exports.PostDescribeClusterParameterGroupsQueryParams = exports.PostDescribeClusterParameterGroupsVersionEnum = exports.PostDescribeClusterParameterGroupsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeClusterParameterGroupsActionEnum;
(function (PostDescribeClusterParameterGroupsActionEnum) {
    PostDescribeClusterParameterGroupsActionEnum["DescribeClusterParameterGroups"] = "DescribeClusterParameterGroups";
})(PostDescribeClusterParameterGroupsActionEnum = exports.PostDescribeClusterParameterGroupsActionEnum || (exports.PostDescribeClusterParameterGroupsActionEnum = {}));
var PostDescribeClusterParameterGroupsVersionEnum;
(function (PostDescribeClusterParameterGroupsVersionEnum) {
    PostDescribeClusterParameterGroupsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeClusterParameterGroupsVersionEnum = exports.PostDescribeClusterParameterGroupsVersionEnum || (exports.PostDescribeClusterParameterGroupsVersionEnum = {}));
var PostDescribeClusterParameterGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeClusterParameterGroupsQueryParams, _super);
    function PostDescribeClusterParameterGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeClusterParameterGroupsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClusterParameterGroupsQueryParams = PostDescribeClusterParameterGroupsQueryParams;
var PostDescribeClusterParameterGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeClusterParameterGroupsHeaders, _super);
    function PostDescribeClusterParameterGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeClusterParameterGroupsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClusterParameterGroupsHeaders = PostDescribeClusterParameterGroupsHeaders;
var PostDescribeClusterParameterGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeClusterParameterGroupsRequest, _super);
    function PostDescribeClusterParameterGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeClusterParameterGroupsQueryParams)
    ], PostDescribeClusterParameterGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeClusterParameterGroupsHeaders)
    ], PostDescribeClusterParameterGroupsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClusterParameterGroupsRequest.prototype, "request", void 0);
    return PostDescribeClusterParameterGroupsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClusterParameterGroupsRequest = PostDescribeClusterParameterGroupsRequest;
var PostDescribeClusterParameterGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeClusterParameterGroupsResponse, _super);
    function PostDescribeClusterParameterGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClusterParameterGroupsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeClusterParameterGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeClusterParameterGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeClusterParameterGroupsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClusterParameterGroupsResponse = PostDescribeClusterParameterGroupsResponse;
