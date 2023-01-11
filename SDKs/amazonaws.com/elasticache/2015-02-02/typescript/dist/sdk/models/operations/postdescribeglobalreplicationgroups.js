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
exports.PostDescribeGlobalReplicationGroupsResponse = exports.PostDescribeGlobalReplicationGroupsRequest = exports.PostDescribeGlobalReplicationGroupsHeaders = exports.PostDescribeGlobalReplicationGroupsQueryParams = exports.PostDescribeGlobalReplicationGroupsVersionEnum = exports.PostDescribeGlobalReplicationGroupsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeGlobalReplicationGroupsActionEnum;
(function (PostDescribeGlobalReplicationGroupsActionEnum) {
    PostDescribeGlobalReplicationGroupsActionEnum["DescribeGlobalReplicationGroups"] = "DescribeGlobalReplicationGroups";
})(PostDescribeGlobalReplicationGroupsActionEnum = exports.PostDescribeGlobalReplicationGroupsActionEnum || (exports.PostDescribeGlobalReplicationGroupsActionEnum = {}));
var PostDescribeGlobalReplicationGroupsVersionEnum;
(function (PostDescribeGlobalReplicationGroupsVersionEnum) {
    PostDescribeGlobalReplicationGroupsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDescribeGlobalReplicationGroupsVersionEnum = exports.PostDescribeGlobalReplicationGroupsVersionEnum || (exports.PostDescribeGlobalReplicationGroupsVersionEnum = {}));
var PostDescribeGlobalReplicationGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeGlobalReplicationGroupsQueryParams, _super);
    function PostDescribeGlobalReplicationGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsQueryParams.prototype, "version", void 0);
    return PostDescribeGlobalReplicationGroupsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeGlobalReplicationGroupsQueryParams = PostDescribeGlobalReplicationGroupsQueryParams;
var PostDescribeGlobalReplicationGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeGlobalReplicationGroupsHeaders, _super);
    function PostDescribeGlobalReplicationGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeGlobalReplicationGroupsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeGlobalReplicationGroupsHeaders = PostDescribeGlobalReplicationGroupsHeaders;
var PostDescribeGlobalReplicationGroupsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeGlobalReplicationGroupsRequest, _super);
    function PostDescribeGlobalReplicationGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeGlobalReplicationGroupsQueryParams)
    ], PostDescribeGlobalReplicationGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeGlobalReplicationGroupsHeaders)
    ], PostDescribeGlobalReplicationGroupsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeGlobalReplicationGroupsRequest.prototype, "request", void 0);
    return PostDescribeGlobalReplicationGroupsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeGlobalReplicationGroupsRequest = PostDescribeGlobalReplicationGroupsRequest;
var PostDescribeGlobalReplicationGroupsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeGlobalReplicationGroupsResponse, _super);
    function PostDescribeGlobalReplicationGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeGlobalReplicationGroupsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeGlobalReplicationGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeGlobalReplicationGroupsResponse.prototype, "statusCode", void 0);
    return PostDescribeGlobalReplicationGroupsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeGlobalReplicationGroupsResponse = PostDescribeGlobalReplicationGroupsResponse;
