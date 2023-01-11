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
exports.PostCreateOrUpdateTagsResponse = exports.PostCreateOrUpdateTagsRequest = exports.PostCreateOrUpdateTagsHeaders = exports.PostCreateOrUpdateTagsQueryParams = exports.PostCreateOrUpdateTagsVersionEnum = exports.PostCreateOrUpdateTagsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateOrUpdateTagsActionEnum;
(function (PostCreateOrUpdateTagsActionEnum) {
    PostCreateOrUpdateTagsActionEnum["CreateOrUpdateTags"] = "CreateOrUpdateTags";
})(PostCreateOrUpdateTagsActionEnum = exports.PostCreateOrUpdateTagsActionEnum || (exports.PostCreateOrUpdateTagsActionEnum = {}));
var PostCreateOrUpdateTagsVersionEnum;
(function (PostCreateOrUpdateTagsVersionEnum) {
    PostCreateOrUpdateTagsVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostCreateOrUpdateTagsVersionEnum = exports.PostCreateOrUpdateTagsVersionEnum || (exports.PostCreateOrUpdateTagsVersionEnum = {}));
var PostCreateOrUpdateTagsQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateOrUpdateTagsQueryParams, _super);
    function PostCreateOrUpdateTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateOrUpdateTagsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateOrUpdateTagsQueryParams.prototype, "version", void 0);
    return PostCreateOrUpdateTagsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateOrUpdateTagsQueryParams = PostCreateOrUpdateTagsQueryParams;
var PostCreateOrUpdateTagsHeaders = /** @class */ (function (_super) {
    __extends(PostCreateOrUpdateTagsHeaders, _super);
    function PostCreateOrUpdateTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateOrUpdateTagsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateOrUpdateTagsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateOrUpdateTagsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateOrUpdateTagsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateOrUpdateTagsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateOrUpdateTagsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateOrUpdateTagsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateOrUpdateTagsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateOrUpdateTagsHeaders = PostCreateOrUpdateTagsHeaders;
var PostCreateOrUpdateTagsRequest = /** @class */ (function (_super) {
    __extends(PostCreateOrUpdateTagsRequest, _super);
    function PostCreateOrUpdateTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateOrUpdateTagsQueryParams)
    ], PostCreateOrUpdateTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateOrUpdateTagsHeaders)
    ], PostCreateOrUpdateTagsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateOrUpdateTagsRequest.prototype, "request", void 0);
    return PostCreateOrUpdateTagsRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateOrUpdateTagsRequest = PostCreateOrUpdateTagsRequest;
var PostCreateOrUpdateTagsResponse = /** @class */ (function (_super) {
    __extends(PostCreateOrUpdateTagsResponse, _super);
    function PostCreateOrUpdateTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateOrUpdateTagsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateOrUpdateTagsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateOrUpdateTagsResponse.prototype, "statusCode", void 0);
    return PostCreateOrUpdateTagsResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateOrUpdateTagsResponse = PostCreateOrUpdateTagsResponse;
