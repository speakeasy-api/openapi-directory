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
exports.PostListPlatformBranchesResponse = exports.PostListPlatformBranchesRequest = exports.PostListPlatformBranchesHeaders = exports.PostListPlatformBranchesQueryParams = exports.PostListPlatformBranchesVersionEnum = exports.PostListPlatformBranchesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostListPlatformBranchesActionEnum;
(function (PostListPlatformBranchesActionEnum) {
    PostListPlatformBranchesActionEnum["ListPlatformBranches"] = "ListPlatformBranches";
})(PostListPlatformBranchesActionEnum = exports.PostListPlatformBranchesActionEnum || (exports.PostListPlatformBranchesActionEnum = {}));
var PostListPlatformBranchesVersionEnum;
(function (PostListPlatformBranchesVersionEnum) {
    PostListPlatformBranchesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostListPlatformBranchesVersionEnum = exports.PostListPlatformBranchesVersionEnum || (exports.PostListPlatformBranchesVersionEnum = {}));
var PostListPlatformBranchesQueryParams = /** @class */ (function (_super) {
    __extends(PostListPlatformBranchesQueryParams, _super);
    function PostListPlatformBranchesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesQueryParams.prototype, "version", void 0);
    return PostListPlatformBranchesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostListPlatformBranchesQueryParams = PostListPlatformBranchesQueryParams;
var PostListPlatformBranchesHeaders = /** @class */ (function (_super) {
    __extends(PostListPlatformBranchesHeaders, _super);
    function PostListPlatformBranchesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListPlatformBranchesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListPlatformBranchesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostListPlatformBranchesHeaders = PostListPlatformBranchesHeaders;
var PostListPlatformBranchesRequest = /** @class */ (function (_super) {
    __extends(PostListPlatformBranchesRequest, _super);
    function PostListPlatformBranchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListPlatformBranchesQueryParams)
    ], PostListPlatformBranchesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListPlatformBranchesHeaders)
    ], PostListPlatformBranchesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListPlatformBranchesRequest.prototype, "request", void 0);
    return PostListPlatformBranchesRequest;
}(utils_1.SpeakeasyBase));
exports.PostListPlatformBranchesRequest = PostListPlatformBranchesRequest;
var PostListPlatformBranchesResponse = /** @class */ (function (_super) {
    __extends(PostListPlatformBranchesResponse, _super);
    function PostListPlatformBranchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostListPlatformBranchesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostListPlatformBranchesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostListPlatformBranchesResponse.prototype, "statusCode", void 0);
    return PostListPlatformBranchesResponse;
}(utils_1.SpeakeasyBase));
exports.PostListPlatformBranchesResponse = PostListPlatformBranchesResponse;
