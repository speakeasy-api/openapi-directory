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
exports.PostUpdateServerCertificateResponse = exports.PostUpdateServerCertificateRequest = exports.PostUpdateServerCertificateHeaders = exports.PostUpdateServerCertificateQueryParams = exports.PostUpdateServerCertificateVersionEnum = exports.PostUpdateServerCertificateActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUpdateServerCertificateActionEnum;
(function (PostUpdateServerCertificateActionEnum) {
    PostUpdateServerCertificateActionEnum["UpdateServerCertificate"] = "UpdateServerCertificate";
})(PostUpdateServerCertificateActionEnum = exports.PostUpdateServerCertificateActionEnum || (exports.PostUpdateServerCertificateActionEnum = {}));
var PostUpdateServerCertificateVersionEnum;
(function (PostUpdateServerCertificateVersionEnum) {
    PostUpdateServerCertificateVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUpdateServerCertificateVersionEnum = exports.PostUpdateServerCertificateVersionEnum || (exports.PostUpdateServerCertificateVersionEnum = {}));
var PostUpdateServerCertificateQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateServerCertificateQueryParams, _super);
    function PostUpdateServerCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateServerCertificateQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateServerCertificateQueryParams.prototype, "version", void 0);
    return PostUpdateServerCertificateQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUpdateServerCertificateQueryParams = PostUpdateServerCertificateQueryParams;
var PostUpdateServerCertificateHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateServerCertificateHeaders, _super);
    function PostUpdateServerCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateServerCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateServerCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateServerCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateServerCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateServerCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateServerCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateServerCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateServerCertificateHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUpdateServerCertificateHeaders = PostUpdateServerCertificateHeaders;
var PostUpdateServerCertificateRequest = /** @class */ (function (_super) {
    __extends(PostUpdateServerCertificateRequest, _super);
    function PostUpdateServerCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateServerCertificateQueryParams)
    ], PostUpdateServerCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateServerCertificateHeaders)
    ], PostUpdateServerCertificateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateServerCertificateRequest.prototype, "request", void 0);
    return PostUpdateServerCertificateRequest;
}(utils_1.SpeakeasyBase));
exports.PostUpdateServerCertificateRequest = PostUpdateServerCertificateRequest;
var PostUpdateServerCertificateResponse = /** @class */ (function (_super) {
    __extends(PostUpdateServerCertificateResponse, _super);
    function PostUpdateServerCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateServerCertificateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUpdateServerCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUpdateServerCertificateResponse.prototype, "statusCode", void 0);
    return PostUpdateServerCertificateResponse;
}(utils_1.SpeakeasyBase));
exports.PostUpdateServerCertificateResponse = PostUpdateServerCertificateResponse;
