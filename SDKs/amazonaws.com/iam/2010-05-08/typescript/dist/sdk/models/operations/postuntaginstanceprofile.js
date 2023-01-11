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
exports.PostUntagInstanceProfileResponse = exports.PostUntagInstanceProfileRequest = exports.PostUntagInstanceProfileHeaders = exports.PostUntagInstanceProfileQueryParams = exports.PostUntagInstanceProfileVersionEnum = exports.PostUntagInstanceProfileActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUntagInstanceProfileActionEnum;
(function (PostUntagInstanceProfileActionEnum) {
    PostUntagInstanceProfileActionEnum["UntagInstanceProfile"] = "UntagInstanceProfile";
})(PostUntagInstanceProfileActionEnum = exports.PostUntagInstanceProfileActionEnum || (exports.PostUntagInstanceProfileActionEnum = {}));
var PostUntagInstanceProfileVersionEnum;
(function (PostUntagInstanceProfileVersionEnum) {
    PostUntagInstanceProfileVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUntagInstanceProfileVersionEnum = exports.PostUntagInstanceProfileVersionEnum || (exports.PostUntagInstanceProfileVersionEnum = {}));
var PostUntagInstanceProfileQueryParams = /** @class */ (function (_super) {
    __extends(PostUntagInstanceProfileQueryParams, _super);
    function PostUntagInstanceProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUntagInstanceProfileQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUntagInstanceProfileQueryParams.prototype, "version", void 0);
    return PostUntagInstanceProfileQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUntagInstanceProfileQueryParams = PostUntagInstanceProfileQueryParams;
var PostUntagInstanceProfileHeaders = /** @class */ (function (_super) {
    __extends(PostUntagInstanceProfileHeaders, _super);
    function PostUntagInstanceProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUntagInstanceProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUntagInstanceProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUntagInstanceProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUntagInstanceProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUntagInstanceProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUntagInstanceProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUntagInstanceProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUntagInstanceProfileHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUntagInstanceProfileHeaders = PostUntagInstanceProfileHeaders;
var PostUntagInstanceProfileRequest = /** @class */ (function (_super) {
    __extends(PostUntagInstanceProfileRequest, _super);
    function PostUntagInstanceProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUntagInstanceProfileQueryParams)
    ], PostUntagInstanceProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUntagInstanceProfileHeaders)
    ], PostUntagInstanceProfileRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUntagInstanceProfileRequest.prototype, "request", void 0);
    return PostUntagInstanceProfileRequest;
}(utils_1.SpeakeasyBase));
exports.PostUntagInstanceProfileRequest = PostUntagInstanceProfileRequest;
var PostUntagInstanceProfileResponse = /** @class */ (function (_super) {
    __extends(PostUntagInstanceProfileResponse, _super);
    function PostUntagInstanceProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUntagInstanceProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUntagInstanceProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUntagInstanceProfileResponse.prototype, "statusCode", void 0);
    return PostUntagInstanceProfileResponse;
}(utils_1.SpeakeasyBase));
exports.PostUntagInstanceProfileResponse = PostUntagInstanceProfileResponse;
