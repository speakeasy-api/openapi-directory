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
exports.PostDescribeOptionGroupsResponse = exports.PostDescribeOptionGroupsRequest = exports.PostDescribeOptionGroupsHeaders = exports.PostDescribeOptionGroupsQueryParams = exports.PostDescribeOptionGroupsVersionEnum = exports.PostDescribeOptionGroupsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeOptionGroupsActionEnum;
(function (PostDescribeOptionGroupsActionEnum) {
    PostDescribeOptionGroupsActionEnum["DescribeOptionGroups"] = "DescribeOptionGroups";
})(PostDescribeOptionGroupsActionEnum = exports.PostDescribeOptionGroupsActionEnum || (exports.PostDescribeOptionGroupsActionEnum = {}));
var PostDescribeOptionGroupsVersionEnum;
(function (PostDescribeOptionGroupsVersionEnum) {
    PostDescribeOptionGroupsVersionEnum["TwoThousandAndThirteen0909"] = "2013-09-09";
})(PostDescribeOptionGroupsVersionEnum = exports.PostDescribeOptionGroupsVersionEnum || (exports.PostDescribeOptionGroupsVersionEnum = {}));
var PostDescribeOptionGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeOptionGroupsQueryParams, _super);
    function PostDescribeOptionGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeOptionGroupsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOptionGroupsQueryParams = PostDescribeOptionGroupsQueryParams;
var PostDescribeOptionGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeOptionGroupsHeaders, _super);
    function PostDescribeOptionGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeOptionGroupsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOptionGroupsHeaders = PostDescribeOptionGroupsHeaders;
var PostDescribeOptionGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeOptionGroupsRequest, _super);
    function PostDescribeOptionGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeOptionGroupsQueryParams)
    ], PostDescribeOptionGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeOptionGroupsHeaders)
    ], PostDescribeOptionGroupsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeOptionGroupsRequest.prototype, "request", void 0);
    return PostDescribeOptionGroupsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOptionGroupsRequest = PostDescribeOptionGroupsRequest;
var PostDescribeOptionGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeOptionGroupsResponse, _super);
    function PostDescribeOptionGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeOptionGroupsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeOptionGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeOptionGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeOptionGroupsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOptionGroupsResponse = PostDescribeOptionGroupsResponse;
