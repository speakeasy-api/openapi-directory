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
exports.PostListMfaDevicesResponse = exports.PostListMfaDevicesRequest = exports.PostListMfaDevicesHeaders = exports.PostListMfaDevicesQueryParams = exports.PostListMfaDevicesVersionEnum = exports.PostListMfaDevicesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostListMfaDevicesActionEnum;
(function (PostListMfaDevicesActionEnum) {
    PostListMfaDevicesActionEnum["ListMfaDevices"] = "ListMFADevices";
})(PostListMfaDevicesActionEnum = exports.PostListMfaDevicesActionEnum || (exports.PostListMfaDevicesActionEnum = {}));
var PostListMfaDevicesVersionEnum;
(function (PostListMfaDevicesVersionEnum) {
    PostListMfaDevicesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostListMfaDevicesVersionEnum = exports.PostListMfaDevicesVersionEnum || (exports.PostListMfaDevicesVersionEnum = {}));
var PostListMfaDevicesQueryParams = /** @class */ (function (_super) {
    __extends(PostListMfaDevicesQueryParams, _super);
    function PostListMfaDevicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesQueryParams.prototype, "version", void 0);
    return PostListMfaDevicesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostListMfaDevicesQueryParams = PostListMfaDevicesQueryParams;
var PostListMfaDevicesHeaders = /** @class */ (function (_super) {
    __extends(PostListMfaDevicesHeaders, _super);
    function PostListMfaDevicesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListMfaDevicesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListMfaDevicesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostListMfaDevicesHeaders = PostListMfaDevicesHeaders;
var PostListMfaDevicesRequest = /** @class */ (function (_super) {
    __extends(PostListMfaDevicesRequest, _super);
    function PostListMfaDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListMfaDevicesQueryParams)
    ], PostListMfaDevicesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListMfaDevicesHeaders)
    ], PostListMfaDevicesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListMfaDevicesRequest.prototype, "request", void 0);
    return PostListMfaDevicesRequest;
}(utils_1.SpeakeasyBase));
exports.PostListMfaDevicesRequest = PostListMfaDevicesRequest;
var PostListMfaDevicesResponse = /** @class */ (function (_super) {
    __extends(PostListMfaDevicesResponse, _super);
    function PostListMfaDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostListMfaDevicesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostListMfaDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostListMfaDevicesResponse.prototype, "statusCode", void 0);
    return PostListMfaDevicesResponse;
}(utils_1.SpeakeasyBase));
exports.PostListMfaDevicesResponse = PostListMfaDevicesResponse;
