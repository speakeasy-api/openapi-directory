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
exports.PostModifyVolumeAttributeResponse = exports.PostModifyVolumeAttributeRequest = exports.PostModifyVolumeAttributeHeaders = exports.PostModifyVolumeAttributeQueryParams = exports.PostModifyVolumeAttributeVersionEnum = exports.PostModifyVolumeAttributeActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostModifyVolumeAttributeActionEnum;
(function (PostModifyVolumeAttributeActionEnum) {
    PostModifyVolumeAttributeActionEnum["ModifyVolumeAttribute"] = "ModifyVolumeAttribute";
})(PostModifyVolumeAttributeActionEnum = exports.PostModifyVolumeAttributeActionEnum || (exports.PostModifyVolumeAttributeActionEnum = {}));
var PostModifyVolumeAttributeVersionEnum;
(function (PostModifyVolumeAttributeVersionEnum) {
    PostModifyVolumeAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostModifyVolumeAttributeVersionEnum = exports.PostModifyVolumeAttributeVersionEnum || (exports.PostModifyVolumeAttributeVersionEnum = {}));
var PostModifyVolumeAttributeQueryParams = /** @class */ (function (_super) {
    __extends(PostModifyVolumeAttributeQueryParams, _super);
    function PostModifyVolumeAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostModifyVolumeAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostModifyVolumeAttributeQueryParams.prototype, "version", void 0);
    return PostModifyVolumeAttributeQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostModifyVolumeAttributeQueryParams = PostModifyVolumeAttributeQueryParams;
var PostModifyVolumeAttributeHeaders = /** @class */ (function (_super) {
    __extends(PostModifyVolumeAttributeHeaders, _super);
    function PostModifyVolumeAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostModifyVolumeAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostModifyVolumeAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostModifyVolumeAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostModifyVolumeAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostModifyVolumeAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostModifyVolumeAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostModifyVolumeAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostModifyVolumeAttributeHeaders;
}(utils_1.SpeakeasyBase));
exports.PostModifyVolumeAttributeHeaders = PostModifyVolumeAttributeHeaders;
var PostModifyVolumeAttributeRequest = /** @class */ (function (_super) {
    __extends(PostModifyVolumeAttributeRequest, _super);
    function PostModifyVolumeAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyVolumeAttributeQueryParams)
    ], PostModifyVolumeAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostModifyVolumeAttributeHeaders)
    ], PostModifyVolumeAttributeRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostModifyVolumeAttributeRequest.prototype, "request", void 0);
    return PostModifyVolumeAttributeRequest;
}(utils_1.SpeakeasyBase));
exports.PostModifyVolumeAttributeRequest = PostModifyVolumeAttributeRequest;
var PostModifyVolumeAttributeResponse = /** @class */ (function (_super) {
    __extends(PostModifyVolumeAttributeResponse, _super);
    function PostModifyVolumeAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostModifyVolumeAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostModifyVolumeAttributeResponse.prototype, "statusCode", void 0);
    return PostModifyVolumeAttributeResponse;
}(utils_1.SpeakeasyBase));
exports.PostModifyVolumeAttributeResponse = PostModifyVolumeAttributeResponse;
