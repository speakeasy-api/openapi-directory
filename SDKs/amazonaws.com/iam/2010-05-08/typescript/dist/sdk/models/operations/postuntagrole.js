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
exports.PostUntagRoleResponse = exports.PostUntagRoleRequest = exports.PostUntagRoleHeaders = exports.PostUntagRoleQueryParams = exports.PostUntagRoleVersionEnum = exports.PostUntagRoleActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUntagRoleActionEnum;
(function (PostUntagRoleActionEnum) {
    PostUntagRoleActionEnum["UntagRole"] = "UntagRole";
})(PostUntagRoleActionEnum = exports.PostUntagRoleActionEnum || (exports.PostUntagRoleActionEnum = {}));
var PostUntagRoleVersionEnum;
(function (PostUntagRoleVersionEnum) {
    PostUntagRoleVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUntagRoleVersionEnum = exports.PostUntagRoleVersionEnum || (exports.PostUntagRoleVersionEnum = {}));
var PostUntagRoleQueryParams = /** @class */ (function (_super) {
    __extends(PostUntagRoleQueryParams, _super);
    function PostUntagRoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUntagRoleQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUntagRoleQueryParams.prototype, "version", void 0);
    return PostUntagRoleQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUntagRoleQueryParams = PostUntagRoleQueryParams;
var PostUntagRoleHeaders = /** @class */ (function (_super) {
    __extends(PostUntagRoleHeaders, _super);
    function PostUntagRoleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUntagRoleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUntagRoleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUntagRoleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUntagRoleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUntagRoleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUntagRoleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUntagRoleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUntagRoleHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUntagRoleHeaders = PostUntagRoleHeaders;
var PostUntagRoleRequest = /** @class */ (function (_super) {
    __extends(PostUntagRoleRequest, _super);
    function PostUntagRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUntagRoleQueryParams)
    ], PostUntagRoleRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUntagRoleHeaders)
    ], PostUntagRoleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUntagRoleRequest.prototype, "request", void 0);
    return PostUntagRoleRequest;
}(utils_1.SpeakeasyBase));
exports.PostUntagRoleRequest = PostUntagRoleRequest;
var PostUntagRoleResponse = /** @class */ (function (_super) {
    __extends(PostUntagRoleResponse, _super);
    function PostUntagRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUntagRoleResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUntagRoleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUntagRoleResponse.prototype, "statusCode", void 0);
    return PostUntagRoleResponse;
}(utils_1.SpeakeasyBase));
exports.PostUntagRoleResponse = PostUntagRoleResponse;
