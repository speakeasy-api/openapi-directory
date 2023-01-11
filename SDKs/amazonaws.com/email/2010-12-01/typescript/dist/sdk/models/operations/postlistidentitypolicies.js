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
exports.PostListIdentityPoliciesResponse = exports.PostListIdentityPoliciesRequest = exports.PostListIdentityPoliciesHeaders = exports.PostListIdentityPoliciesQueryParams = exports.PostListIdentityPoliciesVersionEnum = exports.PostListIdentityPoliciesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostListIdentityPoliciesActionEnum;
(function (PostListIdentityPoliciesActionEnum) {
    PostListIdentityPoliciesActionEnum["ListIdentityPolicies"] = "ListIdentityPolicies";
})(PostListIdentityPoliciesActionEnum = exports.PostListIdentityPoliciesActionEnum || (exports.PostListIdentityPoliciesActionEnum = {}));
var PostListIdentityPoliciesVersionEnum;
(function (PostListIdentityPoliciesVersionEnum) {
    PostListIdentityPoliciesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostListIdentityPoliciesVersionEnum = exports.PostListIdentityPoliciesVersionEnum || (exports.PostListIdentityPoliciesVersionEnum = {}));
var PostListIdentityPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(PostListIdentityPoliciesQueryParams, _super);
    function PostListIdentityPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListIdentityPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListIdentityPoliciesQueryParams.prototype, "version", void 0);
    return PostListIdentityPoliciesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostListIdentityPoliciesQueryParams = PostListIdentityPoliciesQueryParams;
var PostListIdentityPoliciesHeaders = /** @class */ (function (_super) {
    __extends(PostListIdentityPoliciesHeaders, _super);
    function PostListIdentityPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListIdentityPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListIdentityPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListIdentityPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListIdentityPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListIdentityPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListIdentityPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListIdentityPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListIdentityPoliciesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostListIdentityPoliciesHeaders = PostListIdentityPoliciesHeaders;
var PostListIdentityPoliciesRequest = /** @class */ (function (_super) {
    __extends(PostListIdentityPoliciesRequest, _super);
    function PostListIdentityPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListIdentityPoliciesQueryParams)
    ], PostListIdentityPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListIdentityPoliciesHeaders)
    ], PostListIdentityPoliciesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListIdentityPoliciesRequest.prototype, "request", void 0);
    return PostListIdentityPoliciesRequest;
}(utils_1.SpeakeasyBase));
exports.PostListIdentityPoliciesRequest = PostListIdentityPoliciesRequest;
var PostListIdentityPoliciesResponse = /** @class */ (function (_super) {
    __extends(PostListIdentityPoliciesResponse, _super);
    function PostListIdentityPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostListIdentityPoliciesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostListIdentityPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostListIdentityPoliciesResponse.prototype, "statusCode", void 0);
    return PostListIdentityPoliciesResponse;
}(utils_1.SpeakeasyBase));
exports.PostListIdentityPoliciesResponse = PostListIdentityPoliciesResponse;
