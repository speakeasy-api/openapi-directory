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
exports.PostCreateServiceLinkedRoleResponse = exports.PostCreateServiceLinkedRoleRequest = exports.PostCreateServiceLinkedRoleHeaders = exports.PostCreateServiceLinkedRoleQueryParams = exports.PostCreateServiceLinkedRoleVersionEnum = exports.PostCreateServiceLinkedRoleActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateServiceLinkedRoleActionEnum;
(function (PostCreateServiceLinkedRoleActionEnum) {
    PostCreateServiceLinkedRoleActionEnum["CreateServiceLinkedRole"] = "CreateServiceLinkedRole";
})(PostCreateServiceLinkedRoleActionEnum = exports.PostCreateServiceLinkedRoleActionEnum || (exports.PostCreateServiceLinkedRoleActionEnum = {}));
var PostCreateServiceLinkedRoleVersionEnum;
(function (PostCreateServiceLinkedRoleVersionEnum) {
    PostCreateServiceLinkedRoleVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostCreateServiceLinkedRoleVersionEnum = exports.PostCreateServiceLinkedRoleVersionEnum || (exports.PostCreateServiceLinkedRoleVersionEnum = {}));
var PostCreateServiceLinkedRoleQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateServiceLinkedRoleQueryParams, _super);
    function PostCreateServiceLinkedRoleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateServiceLinkedRoleQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateServiceLinkedRoleQueryParams.prototype, "version", void 0);
    return PostCreateServiceLinkedRoleQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateServiceLinkedRoleQueryParams = PostCreateServiceLinkedRoleQueryParams;
var PostCreateServiceLinkedRoleHeaders = /** @class */ (function (_super) {
    __extends(PostCreateServiceLinkedRoleHeaders, _super);
    function PostCreateServiceLinkedRoleHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateServiceLinkedRoleHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateServiceLinkedRoleHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateServiceLinkedRoleHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateServiceLinkedRoleHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateServiceLinkedRoleHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateServiceLinkedRoleHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateServiceLinkedRoleHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateServiceLinkedRoleHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateServiceLinkedRoleHeaders = PostCreateServiceLinkedRoleHeaders;
var PostCreateServiceLinkedRoleRequest = /** @class */ (function (_super) {
    __extends(PostCreateServiceLinkedRoleRequest, _super);
    function PostCreateServiceLinkedRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateServiceLinkedRoleQueryParams)
    ], PostCreateServiceLinkedRoleRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateServiceLinkedRoleHeaders)
    ], PostCreateServiceLinkedRoleRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateServiceLinkedRoleRequest.prototype, "request", void 0);
    return PostCreateServiceLinkedRoleRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateServiceLinkedRoleRequest = PostCreateServiceLinkedRoleRequest;
var PostCreateServiceLinkedRoleResponse = /** @class */ (function (_super) {
    __extends(PostCreateServiceLinkedRoleResponse, _super);
    function PostCreateServiceLinkedRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateServiceLinkedRoleResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateServiceLinkedRoleResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateServiceLinkedRoleResponse.prototype, "statusCode", void 0);
    return PostCreateServiceLinkedRoleResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateServiceLinkedRoleResponse = PostCreateServiceLinkedRoleResponse;
