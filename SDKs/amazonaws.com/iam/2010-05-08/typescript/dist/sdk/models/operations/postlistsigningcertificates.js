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
exports.PostListSigningCertificatesResponse = exports.PostListSigningCertificatesRequest = exports.PostListSigningCertificatesHeaders = exports.PostListSigningCertificatesQueryParams = exports.PostListSigningCertificatesVersionEnum = exports.PostListSigningCertificatesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostListSigningCertificatesActionEnum;
(function (PostListSigningCertificatesActionEnum) {
    PostListSigningCertificatesActionEnum["ListSigningCertificates"] = "ListSigningCertificates";
})(PostListSigningCertificatesActionEnum = exports.PostListSigningCertificatesActionEnum || (exports.PostListSigningCertificatesActionEnum = {}));
var PostListSigningCertificatesVersionEnum;
(function (PostListSigningCertificatesVersionEnum) {
    PostListSigningCertificatesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListSigningCertificatesVersionEnum = exports.PostListSigningCertificatesVersionEnum || (exports.PostListSigningCertificatesVersionEnum = {}));
var PostListSigningCertificatesQueryParams = /** @class */ (function (_super) {
    __extends(PostListSigningCertificatesQueryParams, _super);
    function PostListSigningCertificatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesQueryParams.prototype, "version", void 0);
    return PostListSigningCertificatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostListSigningCertificatesQueryParams = PostListSigningCertificatesQueryParams;
var PostListSigningCertificatesHeaders = /** @class */ (function (_super) {
    __extends(PostListSigningCertificatesHeaders, _super);
    function PostListSigningCertificatesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListSigningCertificatesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListSigningCertificatesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostListSigningCertificatesHeaders = PostListSigningCertificatesHeaders;
var PostListSigningCertificatesRequest = /** @class */ (function (_super) {
    __extends(PostListSigningCertificatesRequest, _super);
    function PostListSigningCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListSigningCertificatesQueryParams)
    ], PostListSigningCertificatesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListSigningCertificatesHeaders)
    ], PostListSigningCertificatesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListSigningCertificatesRequest.prototype, "request", void 0);
    return PostListSigningCertificatesRequest;
}(utils_1.SpeakeasyBase));
exports.PostListSigningCertificatesRequest = PostListSigningCertificatesRequest;
var PostListSigningCertificatesResponse = /** @class */ (function (_super) {
    __extends(PostListSigningCertificatesResponse, _super);
    function PostListSigningCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostListSigningCertificatesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostListSigningCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostListSigningCertificatesResponse.prototype, "statusCode", void 0);
    return PostListSigningCertificatesResponse;
}(utils_1.SpeakeasyBase));
exports.PostListSigningCertificatesResponse = PostListSigningCertificatesResponse;
