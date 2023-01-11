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
exports.PostUploadSshPublicKeyResponse = exports.PostUploadSshPublicKeyRequest = exports.PostUploadSshPublicKeyHeaders = exports.PostUploadSshPublicKeyQueryParams = exports.PostUploadSshPublicKeyVersionEnum = exports.PostUploadSshPublicKeyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUploadSshPublicKeyActionEnum;
(function (PostUploadSshPublicKeyActionEnum) {
    PostUploadSshPublicKeyActionEnum["UploadSshPublicKey"] = "UploadSSHPublicKey";
})(PostUploadSshPublicKeyActionEnum = exports.PostUploadSshPublicKeyActionEnum || (exports.PostUploadSshPublicKeyActionEnum = {}));
var PostUploadSshPublicKeyVersionEnum;
(function (PostUploadSshPublicKeyVersionEnum) {
    PostUploadSshPublicKeyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUploadSshPublicKeyVersionEnum = exports.PostUploadSshPublicKeyVersionEnum || (exports.PostUploadSshPublicKeyVersionEnum = {}));
var PostUploadSshPublicKeyQueryParams = /** @class */ (function (_super) {
    __extends(PostUploadSshPublicKeyQueryParams, _super);
    function PostUploadSshPublicKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUploadSshPublicKeyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUploadSshPublicKeyQueryParams.prototype, "version", void 0);
    return PostUploadSshPublicKeyQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUploadSshPublicKeyQueryParams = PostUploadSshPublicKeyQueryParams;
var PostUploadSshPublicKeyHeaders = /** @class */ (function (_super) {
    __extends(PostUploadSshPublicKeyHeaders, _super);
    function PostUploadSshPublicKeyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUploadSshPublicKeyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUploadSshPublicKeyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUploadSshPublicKeyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUploadSshPublicKeyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUploadSshPublicKeyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUploadSshPublicKeyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUploadSshPublicKeyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUploadSshPublicKeyHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUploadSshPublicKeyHeaders = PostUploadSshPublicKeyHeaders;
var PostUploadSshPublicKeyRequest = /** @class */ (function (_super) {
    __extends(PostUploadSshPublicKeyRequest, _super);
    function PostUploadSshPublicKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUploadSshPublicKeyQueryParams)
    ], PostUploadSshPublicKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUploadSshPublicKeyHeaders)
    ], PostUploadSshPublicKeyRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUploadSshPublicKeyRequest.prototype, "request", void 0);
    return PostUploadSshPublicKeyRequest;
}(utils_1.SpeakeasyBase));
exports.PostUploadSshPublicKeyRequest = PostUploadSshPublicKeyRequest;
var PostUploadSshPublicKeyResponse = /** @class */ (function (_super) {
    __extends(PostUploadSshPublicKeyResponse, _super);
    function PostUploadSshPublicKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUploadSshPublicKeyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUploadSshPublicKeyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUploadSshPublicKeyResponse.prototype, "statusCode", void 0);
    return PostUploadSshPublicKeyResponse;
}(utils_1.SpeakeasyBase));
exports.PostUploadSshPublicKeyResponse = PostUploadSshPublicKeyResponse;
