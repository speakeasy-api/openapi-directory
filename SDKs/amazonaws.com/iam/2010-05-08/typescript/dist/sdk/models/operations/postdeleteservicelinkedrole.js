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
exports.PostDeleteServiceLinkedRoleResponse = exports.PostDeleteServiceLinkedRoleRequest = exports.PostDeleteServiceLinkedRoleHeaders = exports.PostDeleteServiceLinkedRoleQueryParams = exports.PostDeleteServiceLinkedRoleVersionEnum = exports.PostDeleteServiceLinkedRoleActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteServiceLinkedRoleActionEnum;
(function (PostDeleteServiceLinkedRoleActionEnum) {
    PostDeleteServiceLinkedRoleActionEnum["DeleteServiceLinkedRole"] = "DeleteServiceLinkedRole";
})(PostDeleteServiceLinkedRoleActionEnum = exports.PostDeleteServiceLinkedRoleActionEnum || (exports.PostDeleteServiceLinkedRoleActionEnum = {}));
var PostDeleteServiceLinkedRoleVersionEnum;
(function (PostDeleteServiceLinkedRoleVersionEnum) {
    PostDeleteServiceLinkedRoleVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteServiceLinkedRoleVersionEnum = exports.PostDeleteServiceLinkedRoleVersionEnum || (exports.PostDeleteServiceLinkedRoleVersionEnum = {}));
var PostDeleteServiceLinkedRoleQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteServiceLinkedRoleQueryParams, _super);
    function PostDeleteServiceLinkedRoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteServiceLinkedRoleQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteServiceLinkedRoleQueryParams.prototype, "version", void 0);
    return PostDeleteServiceLinkedRoleQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteServiceLinkedRoleQueryParams = PostDeleteServiceLinkedRoleQueryParams;
var PostDeleteServiceLinkedRoleHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteServiceLinkedRoleHeaders, _super);
    function PostDeleteServiceLinkedRoleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteServiceLinkedRoleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteServiceLinkedRoleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteServiceLinkedRoleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteServiceLinkedRoleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteServiceLinkedRoleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteServiceLinkedRoleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteServiceLinkedRoleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteServiceLinkedRoleHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteServiceLinkedRoleHeaders = PostDeleteServiceLinkedRoleHeaders;
var PostDeleteServiceLinkedRoleRequest = /** @class */ (function (_super) {
    __extends(PostDeleteServiceLinkedRoleRequest, _super);
    function PostDeleteServiceLinkedRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteServiceLinkedRoleQueryParams)
    ], PostDeleteServiceLinkedRoleRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteServiceLinkedRoleHeaders)
    ], PostDeleteServiceLinkedRoleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteServiceLinkedRoleRequest.prototype, "request", void 0);
    return PostDeleteServiceLinkedRoleRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteServiceLinkedRoleRequest = PostDeleteServiceLinkedRoleRequest;
var PostDeleteServiceLinkedRoleResponse = /** @class */ (function (_super) {
    __extends(PostDeleteServiceLinkedRoleResponse, _super);
    function PostDeleteServiceLinkedRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteServiceLinkedRoleResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteServiceLinkedRoleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteServiceLinkedRoleResponse.prototype, "statusCode", void 0);
    return PostDeleteServiceLinkedRoleResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteServiceLinkedRoleResponse = PostDeleteServiceLinkedRoleResponse;
