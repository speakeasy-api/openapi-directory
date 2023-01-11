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
exports.PostCreateConfigurationSetTrackingOptionsResponse = exports.PostCreateConfigurationSetTrackingOptionsRequest = exports.PostCreateConfigurationSetTrackingOptionsHeaders = exports.PostCreateConfigurationSetTrackingOptionsQueryParams = exports.PostCreateConfigurationSetTrackingOptionsVersionEnum = exports.PostCreateConfigurationSetTrackingOptionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostCreateConfigurationSetTrackingOptionsActionEnum;
(function (PostCreateConfigurationSetTrackingOptionsActionEnum) {
    PostCreateConfigurationSetTrackingOptionsActionEnum["CreateConfigurationSetTrackingOptions"] = "CreateConfigurationSetTrackingOptions";
})(PostCreateConfigurationSetTrackingOptionsActionEnum = exports.PostCreateConfigurationSetTrackingOptionsActionEnum || (exports.PostCreateConfigurationSetTrackingOptionsActionEnum = {}));
var PostCreateConfigurationSetTrackingOptionsVersionEnum;
(function (PostCreateConfigurationSetTrackingOptionsVersionEnum) {
    PostCreateConfigurationSetTrackingOptionsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostCreateConfigurationSetTrackingOptionsVersionEnum = exports.PostCreateConfigurationSetTrackingOptionsVersionEnum || (exports.PostCreateConfigurationSetTrackingOptionsVersionEnum = {}));
var PostCreateConfigurationSetTrackingOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostCreateConfigurationSetTrackingOptionsQueryParams, _super);
    function PostCreateConfigurationSetTrackingOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostCreateConfigurationSetTrackingOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostCreateConfigurationSetTrackingOptionsQueryParams.prototype, "version", void 0);
    return PostCreateConfigurationSetTrackingOptionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostCreateConfigurationSetTrackingOptionsQueryParams = PostCreateConfigurationSetTrackingOptionsQueryParams;
var PostCreateConfigurationSetTrackingOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostCreateConfigurationSetTrackingOptionsHeaders, _super);
    function PostCreateConfigurationSetTrackingOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostCreateConfigurationSetTrackingOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostCreateConfigurationSetTrackingOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostCreateConfigurationSetTrackingOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostCreateConfigurationSetTrackingOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostCreateConfigurationSetTrackingOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostCreateConfigurationSetTrackingOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostCreateConfigurationSetTrackingOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostCreateConfigurationSetTrackingOptionsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostCreateConfigurationSetTrackingOptionsHeaders = PostCreateConfigurationSetTrackingOptionsHeaders;
var PostCreateConfigurationSetTrackingOptionsRequest = /** @class */ (function (_super) {
    __extends(PostCreateConfigurationSetTrackingOptionsRequest, _super);
    function PostCreateConfigurationSetTrackingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateConfigurationSetTrackingOptionsQueryParams)
    ], PostCreateConfigurationSetTrackingOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostCreateConfigurationSetTrackingOptionsHeaders)
    ], PostCreateConfigurationSetTrackingOptionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostCreateConfigurationSetTrackingOptionsRequest.prototype, "request", void 0);
    return PostCreateConfigurationSetTrackingOptionsRequest;
}(utils_1.SpeakeasyBase));
exports.PostCreateConfigurationSetTrackingOptionsRequest = PostCreateConfigurationSetTrackingOptionsRequest;
var PostCreateConfigurationSetTrackingOptionsResponse = /** @class */ (function (_super) {
    __extends(PostCreateConfigurationSetTrackingOptionsResponse, _super);
    function PostCreateConfigurationSetTrackingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostCreateConfigurationSetTrackingOptionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostCreateConfigurationSetTrackingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostCreateConfigurationSetTrackingOptionsResponse.prototype, "statusCode", void 0);
    return PostCreateConfigurationSetTrackingOptionsResponse;
}(utils_1.SpeakeasyBase));
exports.PostCreateConfigurationSetTrackingOptionsResponse = PostCreateConfigurationSetTrackingOptionsResponse;
