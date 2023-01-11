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
exports.PostPutRolePermissionsBoundaryResponse = exports.PostPutRolePermissionsBoundaryRequest = exports.PostPutRolePermissionsBoundaryHeaders = exports.PostPutRolePermissionsBoundaryQueryParams = exports.PostPutRolePermissionsBoundaryVersionEnum = exports.PostPutRolePermissionsBoundaryActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostPutRolePermissionsBoundaryActionEnum;
(function (PostPutRolePermissionsBoundaryActionEnum) {
    PostPutRolePermissionsBoundaryActionEnum["PutRolePermissionsBoundary"] = "PutRolePermissionsBoundary";
})(PostPutRolePermissionsBoundaryActionEnum = exports.PostPutRolePermissionsBoundaryActionEnum || (exports.PostPutRolePermissionsBoundaryActionEnum = {}));
var PostPutRolePermissionsBoundaryVersionEnum;
(function (PostPutRolePermissionsBoundaryVersionEnum) {
    PostPutRolePermissionsBoundaryVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostPutRolePermissionsBoundaryVersionEnum = exports.PostPutRolePermissionsBoundaryVersionEnum || (exports.PostPutRolePermissionsBoundaryVersionEnum = {}));
var PostPutRolePermissionsBoundaryQueryParams = /** @class */ (function (_super) {
    __extends(PostPutRolePermissionsBoundaryQueryParams, _super);
    function PostPutRolePermissionsBoundaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostPutRolePermissionsBoundaryQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostPutRolePermissionsBoundaryQueryParams.prototype, "version", void 0);
    return PostPutRolePermissionsBoundaryQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostPutRolePermissionsBoundaryQueryParams = PostPutRolePermissionsBoundaryQueryParams;
var PostPutRolePermissionsBoundaryHeaders = /** @class */ (function (_super) {
    __extends(PostPutRolePermissionsBoundaryHeaders, _super);
    function PostPutRolePermissionsBoundaryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostPutRolePermissionsBoundaryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostPutRolePermissionsBoundaryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostPutRolePermissionsBoundaryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostPutRolePermissionsBoundaryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostPutRolePermissionsBoundaryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostPutRolePermissionsBoundaryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostPutRolePermissionsBoundaryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostPutRolePermissionsBoundaryHeaders;
}(utils_1.SpeakeasyBase));
exports.PostPutRolePermissionsBoundaryHeaders = PostPutRolePermissionsBoundaryHeaders;
var PostPutRolePermissionsBoundaryRequest = /** @class */ (function (_super) {
    __extends(PostPutRolePermissionsBoundaryRequest, _super);
    function PostPutRolePermissionsBoundaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPutRolePermissionsBoundaryQueryParams)
    ], PostPutRolePermissionsBoundaryRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostPutRolePermissionsBoundaryHeaders)
    ], PostPutRolePermissionsBoundaryRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostPutRolePermissionsBoundaryRequest.prototype, "request", void 0);
    return PostPutRolePermissionsBoundaryRequest;
}(utils_1.SpeakeasyBase));
exports.PostPutRolePermissionsBoundaryRequest = PostPutRolePermissionsBoundaryRequest;
var PostPutRolePermissionsBoundaryResponse = /** @class */ (function (_super) {
    __extends(PostPutRolePermissionsBoundaryResponse, _super);
    function PostPutRolePermissionsBoundaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostPutRolePermissionsBoundaryResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostPutRolePermissionsBoundaryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostPutRolePermissionsBoundaryResponse.prototype, "statusCode", void 0);
    return PostPutRolePermissionsBoundaryResponse;
}(utils_1.SpeakeasyBase));
exports.PostPutRolePermissionsBoundaryResponse = PostPutRolePermissionsBoundaryResponse;
