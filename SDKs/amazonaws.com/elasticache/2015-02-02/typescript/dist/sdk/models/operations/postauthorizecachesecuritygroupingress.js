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
exports.PostAuthorizeCacheSecurityGroupIngressResponse = exports.PostAuthorizeCacheSecurityGroupIngressRequest = exports.PostAuthorizeCacheSecurityGroupIngressHeaders = exports.PostAuthorizeCacheSecurityGroupIngressQueryParams = exports.PostAuthorizeCacheSecurityGroupIngressVersionEnum = exports.PostAuthorizeCacheSecurityGroupIngressActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAuthorizeCacheSecurityGroupIngressActionEnum;
(function (PostAuthorizeCacheSecurityGroupIngressActionEnum) {
    PostAuthorizeCacheSecurityGroupIngressActionEnum["AuthorizeCacheSecurityGroupIngress"] = "AuthorizeCacheSecurityGroupIngress";
})(PostAuthorizeCacheSecurityGroupIngressActionEnum = exports.PostAuthorizeCacheSecurityGroupIngressActionEnum || (exports.PostAuthorizeCacheSecurityGroupIngressActionEnum = {}));
var PostAuthorizeCacheSecurityGroupIngressVersionEnum;
(function (PostAuthorizeCacheSecurityGroupIngressVersionEnum) {
    PostAuthorizeCacheSecurityGroupIngressVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostAuthorizeCacheSecurityGroupIngressVersionEnum = exports.PostAuthorizeCacheSecurityGroupIngressVersionEnum || (exports.PostAuthorizeCacheSecurityGroupIngressVersionEnum = {}));
var PostAuthorizeCacheSecurityGroupIngressQueryParams = /** @class */ (function (_super) {
    __extends(PostAuthorizeCacheSecurityGroupIngressQueryParams, _super);
    function PostAuthorizeCacheSecurityGroupIngressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAuthorizeCacheSecurityGroupIngressQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAuthorizeCacheSecurityGroupIngressQueryParams.prototype, "version", void 0);
    return PostAuthorizeCacheSecurityGroupIngressQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAuthorizeCacheSecurityGroupIngressQueryParams = PostAuthorizeCacheSecurityGroupIngressQueryParams;
var PostAuthorizeCacheSecurityGroupIngressHeaders = /** @class */ (function (_super) {
    __extends(PostAuthorizeCacheSecurityGroupIngressHeaders, _super);
    function PostAuthorizeCacheSecurityGroupIngressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAuthorizeCacheSecurityGroupIngressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAuthorizeCacheSecurityGroupIngressHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAuthorizeCacheSecurityGroupIngressHeaders = PostAuthorizeCacheSecurityGroupIngressHeaders;
var PostAuthorizeCacheSecurityGroupIngressRequest = /** @class */ (function (_super) {
    __extends(PostAuthorizeCacheSecurityGroupIngressRequest, _super);
    function PostAuthorizeCacheSecurityGroupIngressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthorizeCacheSecurityGroupIngressQueryParams)
    ], PostAuthorizeCacheSecurityGroupIngressRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAuthorizeCacheSecurityGroupIngressHeaders)
    ], PostAuthorizeCacheSecurityGroupIngressRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAuthorizeCacheSecurityGroupIngressRequest.prototype, "request", void 0);
    return PostAuthorizeCacheSecurityGroupIngressRequest;
}(utils_1.SpeakeasyBase));
exports.PostAuthorizeCacheSecurityGroupIngressRequest = PostAuthorizeCacheSecurityGroupIngressRequest;
var PostAuthorizeCacheSecurityGroupIngressResponse = /** @class */ (function (_super) {
    __extends(PostAuthorizeCacheSecurityGroupIngressResponse, _super);
    function PostAuthorizeCacheSecurityGroupIngressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAuthorizeCacheSecurityGroupIngressResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAuthorizeCacheSecurityGroupIngressResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAuthorizeCacheSecurityGroupIngressResponse.prototype, "statusCode", void 0);
    return PostAuthorizeCacheSecurityGroupIngressResponse;
}(utils_1.SpeakeasyBase));
exports.PostAuthorizeCacheSecurityGroupIngressResponse = PostAuthorizeCacheSecurityGroupIngressResponse;
