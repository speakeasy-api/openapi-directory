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
exports.PostDeleteOpenIdConnectProviderResponse = exports.PostDeleteOpenIdConnectProviderRequest = exports.PostDeleteOpenIdConnectProviderHeaders = exports.PostDeleteOpenIdConnectProviderQueryParams = exports.PostDeleteOpenIdConnectProviderVersionEnum = exports.PostDeleteOpenIdConnectProviderActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteOpenIdConnectProviderActionEnum;
(function (PostDeleteOpenIdConnectProviderActionEnum) {
    PostDeleteOpenIdConnectProviderActionEnum["DeleteOpenIdConnectProvider"] = "DeleteOpenIDConnectProvider";
})(PostDeleteOpenIdConnectProviderActionEnum = exports.PostDeleteOpenIdConnectProviderActionEnum || (exports.PostDeleteOpenIdConnectProviderActionEnum = {}));
var PostDeleteOpenIdConnectProviderVersionEnum;
(function (PostDeleteOpenIdConnectProviderVersionEnum) {
    PostDeleteOpenIdConnectProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostDeleteOpenIdConnectProviderVersionEnum = exports.PostDeleteOpenIdConnectProviderVersionEnum || (exports.PostDeleteOpenIdConnectProviderVersionEnum = {}));
var PostDeleteOpenIdConnectProviderQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteOpenIdConnectProviderQueryParams, _super);
    function PostDeleteOpenIdConnectProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteOpenIdConnectProviderQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteOpenIdConnectProviderQueryParams.prototype, "version", void 0);
    return PostDeleteOpenIdConnectProviderQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteOpenIdConnectProviderQueryParams = PostDeleteOpenIdConnectProviderQueryParams;
var PostDeleteOpenIdConnectProviderHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteOpenIdConnectProviderHeaders, _super);
    function PostDeleteOpenIdConnectProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteOpenIdConnectProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteOpenIdConnectProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteOpenIdConnectProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteOpenIdConnectProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteOpenIdConnectProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteOpenIdConnectProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteOpenIdConnectProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteOpenIdConnectProviderHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteOpenIdConnectProviderHeaders = PostDeleteOpenIdConnectProviderHeaders;
var PostDeleteOpenIdConnectProviderRequest = /** @class */ (function (_super) {
    __extends(PostDeleteOpenIdConnectProviderRequest, _super);
    function PostDeleteOpenIdConnectProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteOpenIdConnectProviderQueryParams)
    ], PostDeleteOpenIdConnectProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteOpenIdConnectProviderHeaders)
    ], PostDeleteOpenIdConnectProviderRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteOpenIdConnectProviderRequest.prototype, "request", void 0);
    return PostDeleteOpenIdConnectProviderRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteOpenIdConnectProviderRequest = PostDeleteOpenIdConnectProviderRequest;
var PostDeleteOpenIdConnectProviderResponse = /** @class */ (function (_super) {
    __extends(PostDeleteOpenIdConnectProviderResponse, _super);
    function PostDeleteOpenIdConnectProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteOpenIdConnectProviderResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteOpenIdConnectProviderResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteOpenIdConnectProviderResponse.prototype, "statusCode", void 0);
    return PostDeleteOpenIdConnectProviderResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteOpenIdConnectProviderResponse = PostDeleteOpenIdConnectProviderResponse;
