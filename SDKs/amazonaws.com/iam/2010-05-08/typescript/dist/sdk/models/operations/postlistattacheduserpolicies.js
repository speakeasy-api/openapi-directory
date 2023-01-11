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
exports.PostListAttachedUserPoliciesResponse = exports.PostListAttachedUserPoliciesRequest = exports.PostListAttachedUserPoliciesHeaders = exports.PostListAttachedUserPoliciesQueryParams = exports.PostListAttachedUserPoliciesVersionEnum = exports.PostListAttachedUserPoliciesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostListAttachedUserPoliciesActionEnum;
(function (PostListAttachedUserPoliciesActionEnum) {
    PostListAttachedUserPoliciesActionEnum["ListAttachedUserPolicies"] = "ListAttachedUserPolicies";
})(PostListAttachedUserPoliciesActionEnum = exports.PostListAttachedUserPoliciesActionEnum || (exports.PostListAttachedUserPoliciesActionEnum = {}));
var PostListAttachedUserPoliciesVersionEnum;
(function (PostListAttachedUserPoliciesVersionEnum) {
    PostListAttachedUserPoliciesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListAttachedUserPoliciesVersionEnum = exports.PostListAttachedUserPoliciesVersionEnum || (exports.PostListAttachedUserPoliciesVersionEnum = {}));
var PostListAttachedUserPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(PostListAttachedUserPoliciesQueryParams, _super);
    function PostListAttachedUserPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesQueryParams.prototype, "version", void 0);
    return PostListAttachedUserPoliciesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostListAttachedUserPoliciesQueryParams = PostListAttachedUserPoliciesQueryParams;
var PostListAttachedUserPoliciesHeaders = /** @class */ (function (_super) {
    __extends(PostListAttachedUserPoliciesHeaders, _super);
    function PostListAttachedUserPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListAttachedUserPoliciesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostListAttachedUserPoliciesHeaders = PostListAttachedUserPoliciesHeaders;
var PostListAttachedUserPoliciesRequest = /** @class */ (function (_super) {
    __extends(PostListAttachedUserPoliciesRequest, _super);
    function PostListAttachedUserPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListAttachedUserPoliciesQueryParams)
    ], PostListAttachedUserPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListAttachedUserPoliciesHeaders)
    ], PostListAttachedUserPoliciesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListAttachedUserPoliciesRequest.prototype, "request", void 0);
    return PostListAttachedUserPoliciesRequest;
}(utils_1.SpeakeasyBase));
exports.PostListAttachedUserPoliciesRequest = PostListAttachedUserPoliciesRequest;
var PostListAttachedUserPoliciesResponse = /** @class */ (function (_super) {
    __extends(PostListAttachedUserPoliciesResponse, _super);
    function PostListAttachedUserPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostListAttachedUserPoliciesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostListAttachedUserPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostListAttachedUserPoliciesResponse.prototype, "statusCode", void 0);
    return PostListAttachedUserPoliciesResponse;
}(utils_1.SpeakeasyBase));
exports.PostListAttachedUserPoliciesResponse = PostListAttachedUserPoliciesResponse;
