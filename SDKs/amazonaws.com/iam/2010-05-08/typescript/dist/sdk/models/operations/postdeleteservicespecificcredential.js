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
exports.PostDeleteServiceSpecificCredentialResponse = exports.PostDeleteServiceSpecificCredentialRequest = exports.PostDeleteServiceSpecificCredentialHeaders = exports.PostDeleteServiceSpecificCredentialQueryParams = exports.PostDeleteServiceSpecificCredentialVersionEnum = exports.PostDeleteServiceSpecificCredentialActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteServiceSpecificCredentialActionEnum;
(function (PostDeleteServiceSpecificCredentialActionEnum) {
    PostDeleteServiceSpecificCredentialActionEnum["DeleteServiceSpecificCredential"] = "DeleteServiceSpecificCredential";
})(PostDeleteServiceSpecificCredentialActionEnum = exports.PostDeleteServiceSpecificCredentialActionEnum || (exports.PostDeleteServiceSpecificCredentialActionEnum = {}));
var PostDeleteServiceSpecificCredentialVersionEnum;
(function (PostDeleteServiceSpecificCredentialVersionEnum) {
    PostDeleteServiceSpecificCredentialVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteServiceSpecificCredentialVersionEnum = exports.PostDeleteServiceSpecificCredentialVersionEnum || (exports.PostDeleteServiceSpecificCredentialVersionEnum = {}));
var PostDeleteServiceSpecificCredentialQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteServiceSpecificCredentialQueryParams, _super);
    function PostDeleteServiceSpecificCredentialQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteServiceSpecificCredentialQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteServiceSpecificCredentialQueryParams.prototype, "version", void 0);
    return PostDeleteServiceSpecificCredentialQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteServiceSpecificCredentialQueryParams = PostDeleteServiceSpecificCredentialQueryParams;
var PostDeleteServiceSpecificCredentialHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteServiceSpecificCredentialHeaders, _super);
    function PostDeleteServiceSpecificCredentialHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteServiceSpecificCredentialHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteServiceSpecificCredentialHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteServiceSpecificCredentialHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteServiceSpecificCredentialHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteServiceSpecificCredentialHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteServiceSpecificCredentialHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteServiceSpecificCredentialHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteServiceSpecificCredentialHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteServiceSpecificCredentialHeaders = PostDeleteServiceSpecificCredentialHeaders;
var PostDeleteServiceSpecificCredentialRequest = /** @class */ (function (_super) {
    __extends(PostDeleteServiceSpecificCredentialRequest, _super);
    function PostDeleteServiceSpecificCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteServiceSpecificCredentialQueryParams)
    ], PostDeleteServiceSpecificCredentialRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteServiceSpecificCredentialHeaders)
    ], PostDeleteServiceSpecificCredentialRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteServiceSpecificCredentialRequest.prototype, "request", void 0);
    return PostDeleteServiceSpecificCredentialRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteServiceSpecificCredentialRequest = PostDeleteServiceSpecificCredentialRequest;
var PostDeleteServiceSpecificCredentialResponse = /** @class */ (function (_super) {
    __extends(PostDeleteServiceSpecificCredentialResponse, _super);
    function PostDeleteServiceSpecificCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteServiceSpecificCredentialResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteServiceSpecificCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteServiceSpecificCredentialResponse.prototype, "statusCode", void 0);
    return PostDeleteServiceSpecificCredentialResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteServiceSpecificCredentialResponse = PostDeleteServiceSpecificCredentialResponse;
