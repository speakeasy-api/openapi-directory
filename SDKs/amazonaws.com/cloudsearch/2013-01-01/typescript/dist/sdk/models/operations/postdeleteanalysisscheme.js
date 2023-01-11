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
exports.PostDeleteAnalysisSchemeResponse = exports.PostDeleteAnalysisSchemeRequest = exports.PostDeleteAnalysisSchemeHeaders = exports.PostDeleteAnalysisSchemeQueryParams = exports.PostDeleteAnalysisSchemeVersionEnum = exports.PostDeleteAnalysisSchemeActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteAnalysisSchemeActionEnum;
(function (PostDeleteAnalysisSchemeActionEnum) {
    PostDeleteAnalysisSchemeActionEnum["DeleteAnalysisScheme"] = "DeleteAnalysisScheme";
})(PostDeleteAnalysisSchemeActionEnum = exports.PostDeleteAnalysisSchemeActionEnum || (exports.PostDeleteAnalysisSchemeActionEnum = {}));
var PostDeleteAnalysisSchemeVersionEnum;
(function (PostDeleteAnalysisSchemeVersionEnum) {
    PostDeleteAnalysisSchemeVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(PostDeleteAnalysisSchemeVersionEnum = exports.PostDeleteAnalysisSchemeVersionEnum || (exports.PostDeleteAnalysisSchemeVersionEnum = {}));
var PostDeleteAnalysisSchemeQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteAnalysisSchemeQueryParams, _super);
    function PostDeleteAnalysisSchemeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteAnalysisSchemeQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteAnalysisSchemeQueryParams.prototype, "version", void 0);
    return PostDeleteAnalysisSchemeQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteAnalysisSchemeQueryParams = PostDeleteAnalysisSchemeQueryParams;
var PostDeleteAnalysisSchemeHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteAnalysisSchemeHeaders, _super);
    function PostDeleteAnalysisSchemeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteAnalysisSchemeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteAnalysisSchemeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteAnalysisSchemeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteAnalysisSchemeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteAnalysisSchemeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteAnalysisSchemeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteAnalysisSchemeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteAnalysisSchemeHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteAnalysisSchemeHeaders = PostDeleteAnalysisSchemeHeaders;
var PostDeleteAnalysisSchemeRequest = /** @class */ (function (_super) {
    __extends(PostDeleteAnalysisSchemeRequest, _super);
    function PostDeleteAnalysisSchemeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteAnalysisSchemeQueryParams)
    ], PostDeleteAnalysisSchemeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteAnalysisSchemeHeaders)
    ], PostDeleteAnalysisSchemeRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteAnalysisSchemeRequest.prototype, "request", void 0);
    return PostDeleteAnalysisSchemeRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteAnalysisSchemeRequest = PostDeleteAnalysisSchemeRequest;
var PostDeleteAnalysisSchemeResponse = /** @class */ (function (_super) {
    __extends(PostDeleteAnalysisSchemeResponse, _super);
    function PostDeleteAnalysisSchemeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteAnalysisSchemeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteAnalysisSchemeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteAnalysisSchemeResponse.prototype, "statusCode", void 0);
    return PostDeleteAnalysisSchemeResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteAnalysisSchemeResponse = PostDeleteAnalysisSchemeResponse;
