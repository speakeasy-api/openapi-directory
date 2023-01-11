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
exports.PostCancelResizeResponse = exports.PostCancelResizeRequest = exports.PostCancelResizeHeaders = exports.PostCancelResizeQueryParams = exports.PostCancelResizeVersionEnum = exports.PostCancelResizeActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCancelResizeActionEnum;
(function (PostCancelResizeActionEnum) {
    PostCancelResizeActionEnum["CancelResize"] = "CancelResize";
})(PostCancelResizeActionEnum = exports.PostCancelResizeActionEnum || (exports.PostCancelResizeActionEnum = {}));
var PostCancelResizeVersionEnum;
(function (PostCancelResizeVersionEnum) {
    PostCancelResizeVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostCancelResizeVersionEnum = exports.PostCancelResizeVersionEnum || (exports.PostCancelResizeVersionEnum = {}));
var PostCancelResizeQueryParams = /** @class */ (function (_super) {
    __extends(PostCancelResizeQueryParams, _super);
    function PostCancelResizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCancelResizeQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCancelResizeQueryParams.prototype, "version", void 0);
    return PostCancelResizeQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCancelResizeQueryParams = PostCancelResizeQueryParams;
var PostCancelResizeHeaders = /** @class */ (function (_super) {
    __extends(PostCancelResizeHeaders, _super);
    function PostCancelResizeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCancelResizeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCancelResizeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCancelResizeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCancelResizeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCancelResizeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCancelResizeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCancelResizeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCancelResizeHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCancelResizeHeaders = PostCancelResizeHeaders;
var PostCancelResizeRequest = /** @class */ (function (_super) {
    __extends(PostCancelResizeRequest, _super);
    function PostCancelResizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCancelResizeQueryParams)
    ], PostCancelResizeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCancelResizeHeaders)
    ], PostCancelResizeRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCancelResizeRequest.prototype, "request", void 0);
    return PostCancelResizeRequest;
}(utils_1.SpeakeasyBase));
exports.PostCancelResizeRequest = PostCancelResizeRequest;
var PostCancelResizeResponse = /** @class */ (function (_super) {
    __extends(PostCancelResizeResponse, _super);
    function PostCancelResizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCancelResizeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCancelResizeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCancelResizeResponse.prototype, "statusCode", void 0);
    return PostCancelResizeResponse;
}(utils_1.SpeakeasyBase));
exports.PostCancelResizeResponse = PostCancelResizeResponse;
