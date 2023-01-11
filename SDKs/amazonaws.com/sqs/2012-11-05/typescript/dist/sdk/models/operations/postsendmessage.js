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
exports.PostSendMessageResponse = exports.PostSendMessageRequest = exports.PostSendMessageHeaders = exports.PostSendMessageQueryParams = exports.PostSendMessageVersionEnum = exports.PostSendMessageActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostSendMessageActionEnum;
(function (PostSendMessageActionEnum) {
    PostSendMessageActionEnum["SendMessage"] = "SendMessage";
})(PostSendMessageActionEnum = exports.PostSendMessageActionEnum || (exports.PostSendMessageActionEnum = {}));
var PostSendMessageVersionEnum;
(function (PostSendMessageVersionEnum) {
    PostSendMessageVersionEnum["TwoThousandAndTwelve1105"] = "2012-11-05";
})(PostSendMessageVersionEnum = exports.PostSendMessageVersionEnum || (exports.PostSendMessageVersionEnum = {}));
var PostSendMessageQueryParams = /** @class */ (function (_super) {
    __extends(PostSendMessageQueryParams, _super);
    function PostSendMessageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostSendMessageQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostSendMessageQueryParams.prototype, "version", void 0);
    return PostSendMessageQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostSendMessageQueryParams = PostSendMessageQueryParams;
var PostSendMessageHeaders = /** @class */ (function (_super) {
    __extends(PostSendMessageHeaders, _super);
    function PostSendMessageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostSendMessageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostSendMessageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostSendMessageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostSendMessageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostSendMessageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostSendMessageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostSendMessageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostSendMessageHeaders;
}(utils_1.SpeakeasyBase));
exports.PostSendMessageHeaders = PostSendMessageHeaders;
var PostSendMessageRequest = /** @class */ (function (_super) {
    __extends(PostSendMessageRequest, _super);
    function PostSendMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSendMessageQueryParams)
    ], PostSendMessageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostSendMessageHeaders)
    ], PostSendMessageRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostSendMessageRequest.prototype, "request", void 0);
    return PostSendMessageRequest;
}(utils_1.SpeakeasyBase));
exports.PostSendMessageRequest = PostSendMessageRequest;
var PostSendMessageResponse = /** @class */ (function (_super) {
    __extends(PostSendMessageResponse, _super);
    function PostSendMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostSendMessageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostSendMessageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostSendMessageResponse.prototype, "statusCode", void 0);
    return PostSendMessageResponse;
}(utils_1.SpeakeasyBase));
exports.PostSendMessageResponse = PostSendMessageResponse;
