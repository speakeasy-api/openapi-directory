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
exports.PostCreateAppCookieStickinessPolicyResponse = exports.PostCreateAppCookieStickinessPolicyRequest = exports.PostCreateAppCookieStickinessPolicyHeaders = exports.PostCreateAppCookieStickinessPolicyQueryParams = exports.PostCreateAppCookieStickinessPolicyVersionEnum = exports.PostCreateAppCookieStickinessPolicyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateAppCookieStickinessPolicyActionEnum;
(function (PostCreateAppCookieStickinessPolicyActionEnum) {
    PostCreateAppCookieStickinessPolicyActionEnum["CreateAppCookieStickinessPolicy"] = "CreateAppCookieStickinessPolicy";
})(PostCreateAppCookieStickinessPolicyActionEnum = exports.PostCreateAppCookieStickinessPolicyActionEnum || (exports.PostCreateAppCookieStickinessPolicyActionEnum = {}));
var PostCreateAppCookieStickinessPolicyVersionEnum;
(function (PostCreateAppCookieStickinessPolicyVersionEnum) {
    PostCreateAppCookieStickinessPolicyVersionEnum["TwoThousandAndTwelve0601"] = "2012-06-01";
})(PostCreateAppCookieStickinessPolicyVersionEnum = exports.PostCreateAppCookieStickinessPolicyVersionEnum || (exports.PostCreateAppCookieStickinessPolicyVersionEnum = {}));
var PostCreateAppCookieStickinessPolicyQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateAppCookieStickinessPolicyQueryParams, _super);
    function PostCreateAppCookieStickinessPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateAppCookieStickinessPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateAppCookieStickinessPolicyQueryParams.prototype, "version", void 0);
    return PostCreateAppCookieStickinessPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateAppCookieStickinessPolicyQueryParams = PostCreateAppCookieStickinessPolicyQueryParams;
var PostCreateAppCookieStickinessPolicyHeaders = /** @class */ (function (_super) {
    __extends(PostCreateAppCookieStickinessPolicyHeaders, _super);
    function PostCreateAppCookieStickinessPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateAppCookieStickinessPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateAppCookieStickinessPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateAppCookieStickinessPolicyHeaders = PostCreateAppCookieStickinessPolicyHeaders;
var PostCreateAppCookieStickinessPolicyRequest = /** @class */ (function (_super) {
    __extends(PostCreateAppCookieStickinessPolicyRequest, _super);
    function PostCreateAppCookieStickinessPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateAppCookieStickinessPolicyQueryParams)
    ], PostCreateAppCookieStickinessPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateAppCookieStickinessPolicyHeaders)
    ], PostCreateAppCookieStickinessPolicyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateAppCookieStickinessPolicyRequest.prototype, "request", void 0);
    return PostCreateAppCookieStickinessPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateAppCookieStickinessPolicyRequest = PostCreateAppCookieStickinessPolicyRequest;
var PostCreateAppCookieStickinessPolicyResponse = /** @class */ (function (_super) {
    __extends(PostCreateAppCookieStickinessPolicyResponse, _super);
    function PostCreateAppCookieStickinessPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateAppCookieStickinessPolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateAppCookieStickinessPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateAppCookieStickinessPolicyResponse.prototype, "statusCode", void 0);
    return PostCreateAppCookieStickinessPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateAppCookieStickinessPolicyResponse = PostCreateAppCookieStickinessPolicyResponse;
