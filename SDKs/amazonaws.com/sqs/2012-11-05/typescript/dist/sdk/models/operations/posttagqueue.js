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
exports.PostTagQueueResponse = exports.PostTagQueueRequest = exports.PostTagQueueHeaders = exports.PostTagQueueQueryParams = exports.PostTagQueueVersionEnum = exports.PostTagQueueActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostTagQueueActionEnum;
(function (PostTagQueueActionEnum) {
    PostTagQueueActionEnum["TagQueue"] = "TagQueue";
})(PostTagQueueActionEnum = exports.PostTagQueueActionEnum || (exports.PostTagQueueActionEnum = {}));
var PostTagQueueVersionEnum;
(function (PostTagQueueVersionEnum) {
    PostTagQueueVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(PostTagQueueVersionEnum = exports.PostTagQueueVersionEnum || (exports.PostTagQueueVersionEnum = {}));
var PostTagQueueQueryParams = /** @class */ (function (_super) {
    __extends(PostTagQueueQueryParams, _super);
    function PostTagQueueQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostTagQueueQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostTagQueueQueryParams.prototype, "version", void 0);
    return PostTagQueueQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostTagQueueQueryParams = PostTagQueueQueryParams;
var PostTagQueueHeaders = /** @class */ (function (_super) {
    __extends(PostTagQueueHeaders, _super);
    function PostTagQueueHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostTagQueueHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostTagQueueHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostTagQueueHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostTagQueueHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostTagQueueHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostTagQueueHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostTagQueueHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostTagQueueHeaders;
}(utils_1.SpeakeasyBase));
exports.PostTagQueueHeaders = PostTagQueueHeaders;
var PostTagQueueRequest = /** @class */ (function (_super) {
    __extends(PostTagQueueRequest, _super);
    function PostTagQueueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTagQueueQueryParams)
    ], PostTagQueueRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostTagQueueHeaders)
    ], PostTagQueueRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostTagQueueRequest.prototype, "request", void 0);
    return PostTagQueueRequest;
}(utils_1.SpeakeasyBase));
exports.PostTagQueueRequest = PostTagQueueRequest;
var PostTagQueueResponse = /** @class */ (function (_super) {
    __extends(PostTagQueueResponse, _super);
    function PostTagQueueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostTagQueueResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostTagQueueResponse.prototype, "statusCode", void 0);
    return PostTagQueueResponse;
}(utils_1.SpeakeasyBase));
exports.PostTagQueueResponse = PostTagQueueResponse;
