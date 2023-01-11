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
exports.PostAttachLoadBalancerTargetGroupsResponse = exports.PostAttachLoadBalancerTargetGroupsRequest = exports.PostAttachLoadBalancerTargetGroupsHeaders = exports.PostAttachLoadBalancerTargetGroupsQueryParams = exports.PostAttachLoadBalancerTargetGroupsVersionEnum = exports.PostAttachLoadBalancerTargetGroupsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAttachLoadBalancerTargetGroupsActionEnum;
(function (PostAttachLoadBalancerTargetGroupsActionEnum) {
    PostAttachLoadBalancerTargetGroupsActionEnum["AttachLoadBalancerTargetGroups"] = "AttachLoadBalancerTargetGroups";
})(PostAttachLoadBalancerTargetGroupsActionEnum = exports.PostAttachLoadBalancerTargetGroupsActionEnum || (exports.PostAttachLoadBalancerTargetGroupsActionEnum = {}));
var PostAttachLoadBalancerTargetGroupsVersionEnum;
(function (PostAttachLoadBalancerTargetGroupsVersionEnum) {
    PostAttachLoadBalancerTargetGroupsVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostAttachLoadBalancerTargetGroupsVersionEnum = exports.PostAttachLoadBalancerTargetGroupsVersionEnum || (exports.PostAttachLoadBalancerTargetGroupsVersionEnum = {}));
var PostAttachLoadBalancerTargetGroupsQueryParams = /** @class */ (function (_super) {
    __extends(PostAttachLoadBalancerTargetGroupsQueryParams, _super);
    function PostAttachLoadBalancerTargetGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancerTargetGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancerTargetGroupsQueryParams.prototype, "version", void 0);
    return PostAttachLoadBalancerTargetGroupsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAttachLoadBalancerTargetGroupsQueryParams = PostAttachLoadBalancerTargetGroupsQueryParams;
var PostAttachLoadBalancerTargetGroupsHeaders = /** @class */ (function (_super) {
    __extends(PostAttachLoadBalancerTargetGroupsHeaders, _super);
    function PostAttachLoadBalancerTargetGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAttachLoadBalancerTargetGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAttachLoadBalancerTargetGroupsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAttachLoadBalancerTargetGroupsHeaders = PostAttachLoadBalancerTargetGroupsHeaders;
var PostAttachLoadBalancerTargetGroupsRequest = /** @class */ (function (_super) {
    __extends(PostAttachLoadBalancerTargetGroupsRequest, _super);
    function PostAttachLoadBalancerTargetGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAttachLoadBalancerTargetGroupsQueryParams)
    ], PostAttachLoadBalancerTargetGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAttachLoadBalancerTargetGroupsHeaders)
    ], PostAttachLoadBalancerTargetGroupsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAttachLoadBalancerTargetGroupsRequest.prototype, "request", void 0);
    return PostAttachLoadBalancerTargetGroupsRequest;
}(utils_1.SpeakeasyBase));
exports.PostAttachLoadBalancerTargetGroupsRequest = PostAttachLoadBalancerTargetGroupsRequest;
var PostAttachLoadBalancerTargetGroupsResponse = /** @class */ (function (_super) {
    __extends(PostAttachLoadBalancerTargetGroupsResponse, _super);
    function PostAttachLoadBalancerTargetGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAttachLoadBalancerTargetGroupsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAttachLoadBalancerTargetGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAttachLoadBalancerTargetGroupsResponse.prototype, "statusCode", void 0);
    return PostAttachLoadBalancerTargetGroupsResponse;
}(utils_1.SpeakeasyBase));
exports.PostAttachLoadBalancerTargetGroupsResponse = PostAttachLoadBalancerTargetGroupsResponse;
