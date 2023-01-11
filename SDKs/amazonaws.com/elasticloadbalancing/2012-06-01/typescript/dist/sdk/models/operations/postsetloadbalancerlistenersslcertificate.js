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
exports.PostSetLoadBalancerListenerSslCertificateResponse = exports.PostSetLoadBalancerListenerSslCertificateRequest = exports.PostSetLoadBalancerListenerSslCertificateHeaders = exports.PostSetLoadBalancerListenerSslCertificateQueryParams = exports.PostSetLoadBalancerListenerSslCertificateVersionEnum = exports.PostSetLoadBalancerListenerSslCertificateActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostSetLoadBalancerListenerSslCertificateActionEnum;
(function (PostSetLoadBalancerListenerSslCertificateActionEnum) {
    PostSetLoadBalancerListenerSslCertificateActionEnum["SetLoadBalancerListenerSslCertificate"] = "SetLoadBalancerListenerSSLCertificate";
})(PostSetLoadBalancerListenerSslCertificateActionEnum = exports.PostSetLoadBalancerListenerSslCertificateActionEnum || (exports.PostSetLoadBalancerListenerSslCertificateActionEnum = {}));
var PostSetLoadBalancerListenerSslCertificateVersionEnum;
(function (PostSetLoadBalancerListenerSslCertificateVersionEnum) {
    PostSetLoadBalancerListenerSslCertificateVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(PostSetLoadBalancerListenerSslCertificateVersionEnum = exports.PostSetLoadBalancerListenerSslCertificateVersionEnum || (exports.PostSetLoadBalancerListenerSslCertificateVersionEnum = {}));
var PostSetLoadBalancerListenerSslCertificateQueryParams = /** @class */ (function (_super) {
    __extends(PostSetLoadBalancerListenerSslCertificateQueryParams, _super);
    function PostSetLoadBalancerListenerSslCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerListenerSslCertificateQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerListenerSslCertificateQueryParams.prototype, "version", void 0);
    return PostSetLoadBalancerListenerSslCertificateQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostSetLoadBalancerListenerSslCertificateQueryParams = PostSetLoadBalancerListenerSslCertificateQueryParams;
var PostSetLoadBalancerListenerSslCertificateHeaders = /** @class */ (function (_super) {
    __extends(PostSetLoadBalancerListenerSslCertificateHeaders, _super);
    function PostSetLoadBalancerListenerSslCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerListenerSslCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerListenerSslCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerListenerSslCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerListenerSslCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerListenerSslCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerListenerSslCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSetLoadBalancerListenerSslCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSetLoadBalancerListenerSslCertificateHeaders;
}(utils_1.SpeakeasyBase));
exports.PostSetLoadBalancerListenerSslCertificateHeaders = PostSetLoadBalancerListenerSslCertificateHeaders;
var PostSetLoadBalancerListenerSslCertificateRequest = /** @class */ (function (_super) {
    __extends(PostSetLoadBalancerListenerSslCertificateRequest, _super);
    function PostSetLoadBalancerListenerSslCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSetLoadBalancerListenerSslCertificateQueryParams)
    ], PostSetLoadBalancerListenerSslCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSetLoadBalancerListenerSslCertificateHeaders)
    ], PostSetLoadBalancerListenerSslCertificateRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSetLoadBalancerListenerSslCertificateRequest.prototype, "request", void 0);
    return PostSetLoadBalancerListenerSslCertificateRequest;
}(utils_1.SpeakeasyBase));
exports.PostSetLoadBalancerListenerSslCertificateRequest = PostSetLoadBalancerListenerSslCertificateRequest;
var PostSetLoadBalancerListenerSslCertificateResponse = /** @class */ (function (_super) {
    __extends(PostSetLoadBalancerListenerSslCertificateResponse, _super);
    function PostSetLoadBalancerListenerSslCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostSetLoadBalancerListenerSslCertificateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSetLoadBalancerListenerSslCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSetLoadBalancerListenerSslCertificateResponse.prototype, "statusCode", void 0);
    return PostSetLoadBalancerListenerSslCertificateResponse;
}(utils_1.SpeakeasyBase));
exports.PostSetLoadBalancerListenerSslCertificateResponse = PostSetLoadBalancerListenerSslCertificateResponse;
