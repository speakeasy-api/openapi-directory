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
exports.PostEnableVpcClassicLinkDnsSupportResponse = exports.PostEnableVpcClassicLinkDnsSupportRequest = exports.PostEnableVpcClassicLinkDnsSupportHeaders = exports.PostEnableVpcClassicLinkDnsSupportQueryParams = exports.PostEnableVpcClassicLinkDnsSupportVersionEnum = exports.PostEnableVpcClassicLinkDnsSupportActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostEnableVpcClassicLinkDnsSupportActionEnum;
(function (PostEnableVpcClassicLinkDnsSupportActionEnum) {
    PostEnableVpcClassicLinkDnsSupportActionEnum["EnableVpcClassicLinkDnsSupport"] = "EnableVpcClassicLinkDnsSupport";
})(PostEnableVpcClassicLinkDnsSupportActionEnum = exports.PostEnableVpcClassicLinkDnsSupportActionEnum || (exports.PostEnableVpcClassicLinkDnsSupportActionEnum = {}));
var PostEnableVpcClassicLinkDnsSupportVersionEnum;
(function (PostEnableVpcClassicLinkDnsSupportVersionEnum) {
    PostEnableVpcClassicLinkDnsSupportVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostEnableVpcClassicLinkDnsSupportVersionEnum = exports.PostEnableVpcClassicLinkDnsSupportVersionEnum || (exports.PostEnableVpcClassicLinkDnsSupportVersionEnum = {}));
var PostEnableVpcClassicLinkDnsSupportQueryParams = /** @class */ (function (_super) {
    __extends(PostEnableVpcClassicLinkDnsSupportQueryParams, _super);
    function PostEnableVpcClassicLinkDnsSupportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkDnsSupportQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkDnsSupportQueryParams.prototype, "version", void 0);
    return PostEnableVpcClassicLinkDnsSupportQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostEnableVpcClassicLinkDnsSupportQueryParams = PostEnableVpcClassicLinkDnsSupportQueryParams;
var PostEnableVpcClassicLinkDnsSupportHeaders = /** @class */ (function (_super) {
    __extends(PostEnableVpcClassicLinkDnsSupportHeaders, _super);
    function PostEnableVpcClassicLinkDnsSupportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkDnsSupportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostEnableVpcClassicLinkDnsSupportHeaders;
}(utils_1.SpeakeasyBase));
exports.PostEnableVpcClassicLinkDnsSupportHeaders = PostEnableVpcClassicLinkDnsSupportHeaders;
var PostEnableVpcClassicLinkDnsSupportRequest = /** @class */ (function (_super) {
    __extends(PostEnableVpcClassicLinkDnsSupportRequest, _super);
    function PostEnableVpcClassicLinkDnsSupportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnableVpcClassicLinkDnsSupportQueryParams)
    ], PostEnableVpcClassicLinkDnsSupportRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnableVpcClassicLinkDnsSupportHeaders)
    ], PostEnableVpcClassicLinkDnsSupportRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostEnableVpcClassicLinkDnsSupportRequest.prototype, "request", void 0);
    return PostEnableVpcClassicLinkDnsSupportRequest;
}(utils_1.SpeakeasyBase));
exports.PostEnableVpcClassicLinkDnsSupportRequest = PostEnableVpcClassicLinkDnsSupportRequest;
var PostEnableVpcClassicLinkDnsSupportResponse = /** @class */ (function (_super) {
    __extends(PostEnableVpcClassicLinkDnsSupportResponse, _super);
    function PostEnableVpcClassicLinkDnsSupportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostEnableVpcClassicLinkDnsSupportResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkDnsSupportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostEnableVpcClassicLinkDnsSupportResponse.prototype, "statusCode", void 0);
    return PostEnableVpcClassicLinkDnsSupportResponse;
}(utils_1.SpeakeasyBase));
exports.PostEnableVpcClassicLinkDnsSupportResponse = PostEnableVpcClassicLinkDnsSupportResponse;
