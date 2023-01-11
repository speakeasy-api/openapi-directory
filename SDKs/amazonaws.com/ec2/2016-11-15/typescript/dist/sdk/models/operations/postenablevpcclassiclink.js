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
exports.PostEnableVpcClassicLinkResponse = exports.PostEnableVpcClassicLinkRequest = exports.PostEnableVpcClassicLinkHeaders = exports.PostEnableVpcClassicLinkQueryParams = exports.PostEnableVpcClassicLinkVersionEnum = exports.PostEnableVpcClassicLinkActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostEnableVpcClassicLinkActionEnum;
(function (PostEnableVpcClassicLinkActionEnum) {
    PostEnableVpcClassicLinkActionEnum["EnableVpcClassicLink"] = "EnableVpcClassicLink";
})(PostEnableVpcClassicLinkActionEnum = exports.PostEnableVpcClassicLinkActionEnum || (exports.PostEnableVpcClassicLinkActionEnum = {}));
var PostEnableVpcClassicLinkVersionEnum;
(function (PostEnableVpcClassicLinkVersionEnum) {
    PostEnableVpcClassicLinkVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostEnableVpcClassicLinkVersionEnum = exports.PostEnableVpcClassicLinkVersionEnum || (exports.PostEnableVpcClassicLinkVersionEnum = {}));
var PostEnableVpcClassicLinkQueryParams = /** @class */ (function (_super) {
    __extends(PostEnableVpcClassicLinkQueryParams, _super);
    function PostEnableVpcClassicLinkQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkQueryParams.prototype, "version", void 0);
    return PostEnableVpcClassicLinkQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostEnableVpcClassicLinkQueryParams = PostEnableVpcClassicLinkQueryParams;
var PostEnableVpcClassicLinkHeaders = /** @class */ (function (_super) {
    __extends(PostEnableVpcClassicLinkHeaders, _super);
    function PostEnableVpcClassicLinkHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostEnableVpcClassicLinkHeaders;
}(utils_1.SpeakeasyBase));
exports.PostEnableVpcClassicLinkHeaders = PostEnableVpcClassicLinkHeaders;
var PostEnableVpcClassicLinkRequest = /** @class */ (function (_super) {
    __extends(PostEnableVpcClassicLinkRequest, _super);
    function PostEnableVpcClassicLinkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnableVpcClassicLinkQueryParams)
    ], PostEnableVpcClassicLinkRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostEnableVpcClassicLinkHeaders)
    ], PostEnableVpcClassicLinkRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostEnableVpcClassicLinkRequest.prototype, "request", void 0);
    return PostEnableVpcClassicLinkRequest;
}(utils_1.SpeakeasyBase));
exports.PostEnableVpcClassicLinkRequest = PostEnableVpcClassicLinkRequest;
var PostEnableVpcClassicLinkResponse = /** @class */ (function (_super) {
    __extends(PostEnableVpcClassicLinkResponse, _super);
    function PostEnableVpcClassicLinkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostEnableVpcClassicLinkResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostEnableVpcClassicLinkResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostEnableVpcClassicLinkResponse.prototype, "statusCode", void 0);
    return PostEnableVpcClassicLinkResponse;
}(utils_1.SpeakeasyBase));
exports.PostEnableVpcClassicLinkResponse = PostEnableVpcClassicLinkResponse;
