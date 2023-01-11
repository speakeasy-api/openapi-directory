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
exports.PostListMetricStreamsResponse = exports.PostListMetricStreamsRequest = exports.PostListMetricStreamsHeaders = exports.PostListMetricStreamsQueryParams = exports.PostListMetricStreamsVersionEnum = exports.PostListMetricStreamsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostListMetricStreamsActionEnum;
(function (PostListMetricStreamsActionEnum) {
    PostListMetricStreamsActionEnum["ListMetricStreams"] = "ListMetricStreams";
})(PostListMetricStreamsActionEnum = exports.PostListMetricStreamsActionEnum || (exports.PostListMetricStreamsActionEnum = {}));
var PostListMetricStreamsVersionEnum;
(function (PostListMetricStreamsVersionEnum) {
    PostListMetricStreamsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(PostListMetricStreamsVersionEnum = exports.PostListMetricStreamsVersionEnum || (exports.PostListMetricStreamsVersionEnum = {}));
var PostListMetricStreamsQueryParams = /** @class */ (function (_super) {
    __extends(PostListMetricStreamsQueryParams, _super);
    function PostListMetricStreamsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsQueryParams.prototype, "version", void 0);
    return PostListMetricStreamsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostListMetricStreamsQueryParams = PostListMetricStreamsQueryParams;
var PostListMetricStreamsHeaders = /** @class */ (function (_super) {
    __extends(PostListMetricStreamsHeaders, _super);
    function PostListMetricStreamsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListMetricStreamsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListMetricStreamsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostListMetricStreamsHeaders = PostListMetricStreamsHeaders;
var PostListMetricStreamsRequest = /** @class */ (function (_super) {
    __extends(PostListMetricStreamsRequest, _super);
    function PostListMetricStreamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListMetricStreamsQueryParams)
    ], PostListMetricStreamsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListMetricStreamsHeaders)
    ], PostListMetricStreamsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListMetricStreamsRequest.prototype, "request", void 0);
    return PostListMetricStreamsRequest;
}(utils_1.SpeakeasyBase));
exports.PostListMetricStreamsRequest = PostListMetricStreamsRequest;
var PostListMetricStreamsResponse = /** @class */ (function (_super) {
    __extends(PostListMetricStreamsResponse, _super);
    function PostListMetricStreamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostListMetricStreamsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostListMetricStreamsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostListMetricStreamsResponse.prototype, "statusCode", void 0);
    return PostListMetricStreamsResponse;
}(utils_1.SpeakeasyBase));
exports.PostListMetricStreamsResponse = PostListMetricStreamsResponse;
