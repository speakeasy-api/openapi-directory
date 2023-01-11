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
exports.PostUntagResourceResponse = exports.PostUntagResourceRequest = exports.PostUntagResourceHeaders = exports.PostUntagResourceQueryParams = exports.PostUntagResourceVersionEnum = exports.PostUntagResourceActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUntagResourceActionEnum;
(function (PostUntagResourceActionEnum) {
    PostUntagResourceActionEnum["UntagResource"] = "UntagResource";
})(PostUntagResourceActionEnum = exports.PostUntagResourceActionEnum || (exports.PostUntagResourceActionEnum = {}));
var PostUntagResourceVersionEnum;
(function (PostUntagResourceVersionEnum) {
    PostUntagResourceVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(PostUntagResourceVersionEnum = exports.PostUntagResourceVersionEnum || (exports.PostUntagResourceVersionEnum = {}));
var PostUntagResourceQueryParams = /** @class */ (function (_super) {
    __extends(PostUntagResourceQueryParams, _super);
    function PostUntagResourceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUntagResourceQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUntagResourceQueryParams.prototype, "version", void 0);
    return PostUntagResourceQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUntagResourceQueryParams = PostUntagResourceQueryParams;
var PostUntagResourceHeaders = /** @class */ (function (_super) {
    __extends(PostUntagResourceHeaders, _super);
    function PostUntagResourceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUntagResourceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUntagResourceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUntagResourceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUntagResourceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUntagResourceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUntagResourceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUntagResourceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUntagResourceHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUntagResourceHeaders = PostUntagResourceHeaders;
var PostUntagResourceRequest = /** @class */ (function (_super) {
    __extends(PostUntagResourceRequest, _super);
    function PostUntagResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUntagResourceQueryParams)
    ], PostUntagResourceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUntagResourceHeaders)
    ], PostUntagResourceRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUntagResourceRequest.prototype, "request", void 0);
    return PostUntagResourceRequest;
}(utils_1.SpeakeasyBase));
exports.PostUntagResourceRequest = PostUntagResourceRequest;
var PostUntagResourceResponse = /** @class */ (function (_super) {
    __extends(PostUntagResourceResponse, _super);
    function PostUntagResourceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUntagResourceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUntagResourceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUntagResourceResponse.prototype, "statusCode", void 0);
    return PostUntagResourceResponse;
}(utils_1.SpeakeasyBase));
exports.PostUntagResourceResponse = PostUntagResourceResponse;
