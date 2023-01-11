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
exports.PostDescribeDbClusterSnapshotAttributesResponse = exports.PostDescribeDbClusterSnapshotAttributesRequest = exports.PostDescribeDbClusterSnapshotAttributesHeaders = exports.PostDescribeDbClusterSnapshotAttributesQueryParams = exports.PostDescribeDbClusterSnapshotAttributesVersionEnum = exports.PostDescribeDbClusterSnapshotAttributesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeDbClusterSnapshotAttributesActionEnum;
(function (PostDescribeDbClusterSnapshotAttributesActionEnum) {
    PostDescribeDbClusterSnapshotAttributesActionEnum["DescribeDbClusterSnapshotAttributes"] = "DescribeDBClusterSnapshotAttributes";
})(PostDescribeDbClusterSnapshotAttributesActionEnum = exports.PostDescribeDbClusterSnapshotAttributesActionEnum || (exports.PostDescribeDbClusterSnapshotAttributesActionEnum = {}));
var PostDescribeDbClusterSnapshotAttributesVersionEnum;
(function (PostDescribeDbClusterSnapshotAttributesVersionEnum) {
    PostDescribeDbClusterSnapshotAttributesVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDescribeDbClusterSnapshotAttributesVersionEnum = exports.PostDescribeDbClusterSnapshotAttributesVersionEnum || (exports.PostDescribeDbClusterSnapshotAttributesVersionEnum = {}));
var PostDescribeDbClusterSnapshotAttributesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterSnapshotAttributesQueryParams, _super);
    function PostDescribeDbClusterSnapshotAttributesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterSnapshotAttributesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterSnapshotAttributesQueryParams.prototype, "version", void 0);
    return PostDescribeDbClusterSnapshotAttributesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbClusterSnapshotAttributesQueryParams = PostDescribeDbClusterSnapshotAttributesQueryParams;
var PostDescribeDbClusterSnapshotAttributesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterSnapshotAttributesHeaders, _super);
    function PostDescribeDbClusterSnapshotAttributesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterSnapshotAttributesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDbClusterSnapshotAttributesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbClusterSnapshotAttributesHeaders = PostDescribeDbClusterSnapshotAttributesHeaders;
var PostDescribeDbClusterSnapshotAttributesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterSnapshotAttributesRequest, _super);
    function PostDescribeDbClusterSnapshotAttributesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeDbClusterSnapshotAttributesQueryParams)
    ], PostDescribeDbClusterSnapshotAttributesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeDbClusterSnapshotAttributesHeaders)
    ], PostDescribeDbClusterSnapshotAttributesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbClusterSnapshotAttributesRequest.prototype, "request", void 0);
    return PostDescribeDbClusterSnapshotAttributesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbClusterSnapshotAttributesRequest = PostDescribeDbClusterSnapshotAttributesRequest;
var PostDescribeDbClusterSnapshotAttributesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterSnapshotAttributesResponse, _super);
    function PostDescribeDbClusterSnapshotAttributesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbClusterSnapshotAttributesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeDbClusterSnapshotAttributesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeDbClusterSnapshotAttributesResponse.prototype, "statusCode", void 0);
    return PostDescribeDbClusterSnapshotAttributesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbClusterSnapshotAttributesResponse = PostDescribeDbClusterSnapshotAttributesResponse;
