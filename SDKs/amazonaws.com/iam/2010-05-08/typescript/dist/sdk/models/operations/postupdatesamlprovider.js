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
exports.PostUpdateSamlProviderResponse = exports.PostUpdateSamlProviderRequest = exports.PostUpdateSamlProviderHeaders = exports.PostUpdateSamlProviderQueryParams = exports.PostUpdateSamlProviderVersionEnum = exports.PostUpdateSamlProviderActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUpdateSamlProviderActionEnum;
(function (PostUpdateSamlProviderActionEnum) {
    PostUpdateSamlProviderActionEnum["UpdateSamlProvider"] = "UpdateSAMLProvider";
})(PostUpdateSamlProviderActionEnum = exports.PostUpdateSamlProviderActionEnum || (exports.PostUpdateSamlProviderActionEnum = {}));
var PostUpdateSamlProviderVersionEnum;
(function (PostUpdateSamlProviderVersionEnum) {
    PostUpdateSamlProviderVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(PostUpdateSamlProviderVersionEnum = exports.PostUpdateSamlProviderVersionEnum || (exports.PostUpdateSamlProviderVersionEnum = {}));
var PostUpdateSamlProviderQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateSamlProviderQueryParams, _super);
    function PostUpdateSamlProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateSamlProviderQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateSamlProviderQueryParams.prototype, "version", void 0);
    return PostUpdateSamlProviderQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUpdateSamlProviderQueryParams = PostUpdateSamlProviderQueryParams;
var PostUpdateSamlProviderHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateSamlProviderHeaders, _super);
    function PostUpdateSamlProviderHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateSamlProviderHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateSamlProviderHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateSamlProviderHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateSamlProviderHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateSamlProviderHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateSamlProviderHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateSamlProviderHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateSamlProviderHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUpdateSamlProviderHeaders = PostUpdateSamlProviderHeaders;
var PostUpdateSamlProviderRequest = /** @class */ (function (_super) {
    __extends(PostUpdateSamlProviderRequest, _super);
    function PostUpdateSamlProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateSamlProviderQueryParams)
    ], PostUpdateSamlProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateSamlProviderHeaders)
    ], PostUpdateSamlProviderRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateSamlProviderRequest.prototype, "request", void 0);
    return PostUpdateSamlProviderRequest;
}(utils_1.SpeakeasyBase));
exports.PostUpdateSamlProviderRequest = PostUpdateSamlProviderRequest;
var PostUpdateSamlProviderResponse = /** @class */ (function (_super) {
    __extends(PostUpdateSamlProviderResponse, _super);
    function PostUpdateSamlProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateSamlProviderResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUpdateSamlProviderResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUpdateSamlProviderResponse.prototype, "statusCode", void 0);
    return PostUpdateSamlProviderResponse;
}(utils_1.SpeakeasyBase));
exports.PostUpdateSamlProviderResponse = PostUpdateSamlProviderResponse;
