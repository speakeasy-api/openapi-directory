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
exports.PostDescribeClusterDbRevisionsResponse = exports.PostDescribeClusterDbRevisionsRequest = exports.PostDescribeClusterDbRevisionsHeaders = exports.PostDescribeClusterDbRevisionsQueryParams = exports.PostDescribeClusterDbRevisionsVersionEnum = exports.PostDescribeClusterDbRevisionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeClusterDbRevisionsActionEnum;
(function (PostDescribeClusterDbRevisionsActionEnum) {
    PostDescribeClusterDbRevisionsActionEnum["DescribeClusterDbRevisions"] = "DescribeClusterDbRevisions";
})(PostDescribeClusterDbRevisionsActionEnum = exports.PostDescribeClusterDbRevisionsActionEnum || (exports.PostDescribeClusterDbRevisionsActionEnum = {}));
var PostDescribeClusterDbRevisionsVersionEnum;
(function (PostDescribeClusterDbRevisionsVersionEnum) {
    PostDescribeClusterDbRevisionsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeClusterDbRevisionsVersionEnum = exports.PostDescribeClusterDbRevisionsVersionEnum || (exports.PostDescribeClusterDbRevisionsVersionEnum = {}));
var PostDescribeClusterDbRevisionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeClusterDbRevisionsQueryParams, _super);
    function PostDescribeClusterDbRevisionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsQueryParams.prototype, "version", void 0);
    return PostDescribeClusterDbRevisionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClusterDbRevisionsQueryParams = PostDescribeClusterDbRevisionsQueryParams;
var PostDescribeClusterDbRevisionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeClusterDbRevisionsHeaders, _super);
    function PostDescribeClusterDbRevisionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeClusterDbRevisionsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClusterDbRevisionsHeaders = PostDescribeClusterDbRevisionsHeaders;
var PostDescribeClusterDbRevisionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeClusterDbRevisionsRequest, _super);
    function PostDescribeClusterDbRevisionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeClusterDbRevisionsQueryParams)
    ], PostDescribeClusterDbRevisionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeClusterDbRevisionsHeaders)
    ], PostDescribeClusterDbRevisionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClusterDbRevisionsRequest.prototype, "request", void 0);
    return PostDescribeClusterDbRevisionsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClusterDbRevisionsRequest = PostDescribeClusterDbRevisionsRequest;
var PostDescribeClusterDbRevisionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeClusterDbRevisionsResponse, _super);
    function PostDescribeClusterDbRevisionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeClusterDbRevisionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeClusterDbRevisionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeClusterDbRevisionsResponse.prototype, "statusCode", void 0);
    return PostDescribeClusterDbRevisionsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeClusterDbRevisionsResponse = PostDescribeClusterDbRevisionsResponse;
