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
exports.PostGetEbsDefaultKmsKeyIdResponse = exports.PostGetEbsDefaultKmsKeyIdRequest = exports.PostGetEbsDefaultKmsKeyIdHeaders = exports.PostGetEbsDefaultKmsKeyIdQueryParams = exports.PostGetEbsDefaultKmsKeyIdVersionEnum = exports.PostGetEbsDefaultKmsKeyIdActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostGetEbsDefaultKmsKeyIdActionEnum;
(function (PostGetEbsDefaultKmsKeyIdActionEnum) {
    PostGetEbsDefaultKmsKeyIdActionEnum["GetEbsDefaultKmsKeyId"] = "GetEbsDefaultKmsKeyId";
})(PostGetEbsDefaultKmsKeyIdActionEnum = exports.PostGetEbsDefaultKmsKeyIdActionEnum || (exports.PostGetEbsDefaultKmsKeyIdActionEnum = {}));
var PostGetEbsDefaultKmsKeyIdVersionEnum;
(function (PostGetEbsDefaultKmsKeyIdVersionEnum) {
    PostGetEbsDefaultKmsKeyIdVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostGetEbsDefaultKmsKeyIdVersionEnum = exports.PostGetEbsDefaultKmsKeyIdVersionEnum || (exports.PostGetEbsDefaultKmsKeyIdVersionEnum = {}));
var PostGetEbsDefaultKmsKeyIdQueryParams = /** @class */ (function (_super) {
    __extends(PostGetEbsDefaultKmsKeyIdQueryParams, _super);
    function PostGetEbsDefaultKmsKeyIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostGetEbsDefaultKmsKeyIdQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostGetEbsDefaultKmsKeyIdQueryParams.prototype, "version", void 0);
    return PostGetEbsDefaultKmsKeyIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostGetEbsDefaultKmsKeyIdQueryParams = PostGetEbsDefaultKmsKeyIdQueryParams;
var PostGetEbsDefaultKmsKeyIdHeaders = /** @class */ (function (_super) {
    __extends(PostGetEbsDefaultKmsKeyIdHeaders, _super);
    function PostGetEbsDefaultKmsKeyIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostGetEbsDefaultKmsKeyIdHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostGetEbsDefaultKmsKeyIdHeaders;
}(utils_1.SpeakeasyBase));
exports.PostGetEbsDefaultKmsKeyIdHeaders = PostGetEbsDefaultKmsKeyIdHeaders;
var PostGetEbsDefaultKmsKeyIdRequest = /** @class */ (function (_super) {
    __extends(PostGetEbsDefaultKmsKeyIdRequest, _super);
    function PostGetEbsDefaultKmsKeyIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetEbsDefaultKmsKeyIdQueryParams)
    ], PostGetEbsDefaultKmsKeyIdRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostGetEbsDefaultKmsKeyIdHeaders)
    ], PostGetEbsDefaultKmsKeyIdRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostGetEbsDefaultKmsKeyIdRequest.prototype, "request", void 0);
    return PostGetEbsDefaultKmsKeyIdRequest;
}(utils_1.SpeakeasyBase));
exports.PostGetEbsDefaultKmsKeyIdRequest = PostGetEbsDefaultKmsKeyIdRequest;
var PostGetEbsDefaultKmsKeyIdResponse = /** @class */ (function (_super) {
    __extends(PostGetEbsDefaultKmsKeyIdResponse, _super);
    function PostGetEbsDefaultKmsKeyIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostGetEbsDefaultKmsKeyIdResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostGetEbsDefaultKmsKeyIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostGetEbsDefaultKmsKeyIdResponse.prototype, "statusCode", void 0);
    return PostGetEbsDefaultKmsKeyIdResponse;
}(utils_1.SpeakeasyBase));
exports.PostGetEbsDefaultKmsKeyIdResponse = PostGetEbsDefaultKmsKeyIdResponse;
