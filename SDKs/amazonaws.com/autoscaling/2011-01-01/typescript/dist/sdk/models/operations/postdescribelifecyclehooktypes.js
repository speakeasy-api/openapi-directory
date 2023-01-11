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
exports.PostDescribeLifecycleHookTypesResponse = exports.PostDescribeLifecycleHookTypesRequest = exports.PostDescribeLifecycleHookTypesHeaders = exports.PostDescribeLifecycleHookTypesQueryParams = exports.PostDescribeLifecycleHookTypesVersionEnum = exports.PostDescribeLifecycleHookTypesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeLifecycleHookTypesActionEnum;
(function (PostDescribeLifecycleHookTypesActionEnum) {
    PostDescribeLifecycleHookTypesActionEnum["DescribeLifecycleHookTypes"] = "DescribeLifecycleHookTypes";
})(PostDescribeLifecycleHookTypesActionEnum = exports.PostDescribeLifecycleHookTypesActionEnum || (exports.PostDescribeLifecycleHookTypesActionEnum = {}));
var PostDescribeLifecycleHookTypesVersionEnum;
(function (PostDescribeLifecycleHookTypesVersionEnum) {
    PostDescribeLifecycleHookTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(PostDescribeLifecycleHookTypesVersionEnum = exports.PostDescribeLifecycleHookTypesVersionEnum || (exports.PostDescribeLifecycleHookTypesVersionEnum = {}));
var PostDescribeLifecycleHookTypesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeLifecycleHookTypesQueryParams, _super);
    function PostDescribeLifecycleHookTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeLifecycleHookTypesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeLifecycleHookTypesQueryParams.prototype, "version", void 0);
    return PostDescribeLifecycleHookTypesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLifecycleHookTypesQueryParams = PostDescribeLifecycleHookTypesQueryParams;
var PostDescribeLifecycleHookTypesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeLifecycleHookTypesHeaders, _super);
    function PostDescribeLifecycleHookTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeLifecycleHookTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeLifecycleHookTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeLifecycleHookTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeLifecycleHookTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeLifecycleHookTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeLifecycleHookTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeLifecycleHookTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeLifecycleHookTypesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLifecycleHookTypesHeaders = PostDescribeLifecycleHookTypesHeaders;
var PostDescribeLifecycleHookTypesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeLifecycleHookTypesRequest, _super);
    function PostDescribeLifecycleHookTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeLifecycleHookTypesQueryParams)
    ], PostDescribeLifecycleHookTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeLifecycleHookTypesHeaders)
    ], PostDescribeLifecycleHookTypesRequest.prototype, "headers", void 0);
    return PostDescribeLifecycleHookTypesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLifecycleHookTypesRequest = PostDescribeLifecycleHookTypesRequest;
var PostDescribeLifecycleHookTypesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeLifecycleHookTypesResponse, _super);
    function PostDescribeLifecycleHookTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeLifecycleHookTypesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeLifecycleHookTypesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeLifecycleHookTypesResponse.prototype, "statusCode", void 0);
    return PostDescribeLifecycleHookTypesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeLifecycleHookTypesResponse = PostDescribeLifecycleHookTypesResponse;
