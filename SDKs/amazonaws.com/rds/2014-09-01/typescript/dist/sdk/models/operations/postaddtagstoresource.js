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
exports.PostAddTagsToResourceResponse = exports.PostAddTagsToResourceRequest = exports.PostAddTagsToResourceHeaders = exports.PostAddTagsToResourceQueryParams = exports.PostAddTagsToResourceVersionEnum = exports.PostAddTagsToResourceActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAddTagsToResourceActionEnum;
(function (PostAddTagsToResourceActionEnum) {
    PostAddTagsToResourceActionEnum["AddTagsToResource"] = "AddTagsToResource";
})(PostAddTagsToResourceActionEnum = exports.PostAddTagsToResourceActionEnum || (exports.PostAddTagsToResourceActionEnum = {}));
var PostAddTagsToResourceVersionEnum;
(function (PostAddTagsToResourceVersionEnum) {
    PostAddTagsToResourceVersionEnum["TwoThousandAndFourteen0901"] = "2014-09-01";
})(PostAddTagsToResourceVersionEnum = exports.PostAddTagsToResourceVersionEnum || (exports.PostAddTagsToResourceVersionEnum = {}));
var PostAddTagsToResourceQueryParams = /** @class */ (function (_super) {
    __extends(PostAddTagsToResourceQueryParams, _super);
    function PostAddTagsToResourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAddTagsToResourceQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAddTagsToResourceQueryParams.prototype, "version", void 0);
    return PostAddTagsToResourceQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAddTagsToResourceQueryParams = PostAddTagsToResourceQueryParams;
var PostAddTagsToResourceHeaders = /** @class */ (function (_super) {
    __extends(PostAddTagsToResourceHeaders, _super);
    function PostAddTagsToResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAddTagsToResourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAddTagsToResourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAddTagsToResourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAddTagsToResourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAddTagsToResourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAddTagsToResourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAddTagsToResourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAddTagsToResourceHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAddTagsToResourceHeaders = PostAddTagsToResourceHeaders;
var PostAddTagsToResourceRequest = /** @class */ (function (_super) {
    __extends(PostAddTagsToResourceRequest, _super);
    function PostAddTagsToResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAddTagsToResourceQueryParams)
    ], PostAddTagsToResourceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAddTagsToResourceHeaders)
    ], PostAddTagsToResourceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAddTagsToResourceRequest.prototype, "request", void 0);
    return PostAddTagsToResourceRequest;
}(utils_1.SpeakeasyBase));
exports.PostAddTagsToResourceRequest = PostAddTagsToResourceRequest;
var PostAddTagsToResourceResponse = /** @class */ (function (_super) {
    __extends(PostAddTagsToResourceResponse, _super);
    function PostAddTagsToResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAddTagsToResourceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAddTagsToResourceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAddTagsToResourceResponse.prototype, "statusCode", void 0);
    return PostAddTagsToResourceResponse;
}(utils_1.SpeakeasyBase));
exports.PostAddTagsToResourceResponse = PostAddTagsToResourceResponse;
