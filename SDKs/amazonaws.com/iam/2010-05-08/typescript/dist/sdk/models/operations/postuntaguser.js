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
exports.PostUntagUserResponse = exports.PostUntagUserRequest = exports.PostUntagUserHeaders = exports.PostUntagUserQueryParams = exports.PostUntagUserVersionEnum = exports.PostUntagUserActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUntagUserActionEnum;
(function (PostUntagUserActionEnum) {
    PostUntagUserActionEnum["UntagUser"] = "UntagUser";
})(PostUntagUserActionEnum = exports.PostUntagUserActionEnum || (exports.PostUntagUserActionEnum = {}));
var PostUntagUserVersionEnum;
(function (PostUntagUserVersionEnum) {
    PostUntagUserVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUntagUserVersionEnum = exports.PostUntagUserVersionEnum || (exports.PostUntagUserVersionEnum = {}));
var PostUntagUserQueryParams = /** @class */ (function (_super) {
    __extends(PostUntagUserQueryParams, _super);
    function PostUntagUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUntagUserQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUntagUserQueryParams.prototype, "version", void 0);
    return PostUntagUserQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUntagUserQueryParams = PostUntagUserQueryParams;
var PostUntagUserHeaders = /** @class */ (function (_super) {
    __extends(PostUntagUserHeaders, _super);
    function PostUntagUserHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUntagUserHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUntagUserHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUntagUserHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUntagUserHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUntagUserHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUntagUserHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUntagUserHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUntagUserHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUntagUserHeaders = PostUntagUserHeaders;
var PostUntagUserRequest = /** @class */ (function (_super) {
    __extends(PostUntagUserRequest, _super);
    function PostUntagUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUntagUserQueryParams)
    ], PostUntagUserRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUntagUserHeaders)
    ], PostUntagUserRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUntagUserRequest.prototype, "request", void 0);
    return PostUntagUserRequest;
}(utils_1.SpeakeasyBase));
exports.PostUntagUserRequest = PostUntagUserRequest;
var PostUntagUserResponse = /** @class */ (function (_super) {
    __extends(PostUntagUserResponse, _super);
    function PostUntagUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUntagUserResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUntagUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUntagUserResponse.prototype, "statusCode", void 0);
    return PostUntagUserResponse;
}(utils_1.SpeakeasyBase));
exports.PostUntagUserResponse = PostUntagUserResponse;
