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
exports.PostDeleteReceiptFilterResponse = exports.PostDeleteReceiptFilterRequest = exports.PostDeleteReceiptFilterHeaders = exports.PostDeleteReceiptFilterQueryParams = exports.PostDeleteReceiptFilterVersionEnum = exports.PostDeleteReceiptFilterActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteReceiptFilterActionEnum;
(function (PostDeleteReceiptFilterActionEnum) {
    PostDeleteReceiptFilterActionEnum["DeleteReceiptFilter"] = "DeleteReceiptFilter";
})(PostDeleteReceiptFilterActionEnum = exports.PostDeleteReceiptFilterActionEnum || (exports.PostDeleteReceiptFilterActionEnum = {}));
var PostDeleteReceiptFilterVersionEnum;
(function (PostDeleteReceiptFilterVersionEnum) {
    PostDeleteReceiptFilterVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostDeleteReceiptFilterVersionEnum = exports.PostDeleteReceiptFilterVersionEnum || (exports.PostDeleteReceiptFilterVersionEnum = {}));
var PostDeleteReceiptFilterQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteReceiptFilterQueryParams, _super);
    function PostDeleteReceiptFilterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptFilterQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptFilterQueryParams.prototype, "version", void 0);
    return PostDeleteReceiptFilterQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteReceiptFilterQueryParams = PostDeleteReceiptFilterQueryParams;
var PostDeleteReceiptFilterHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteReceiptFilterHeaders, _super);
    function PostDeleteReceiptFilterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptFilterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptFilterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptFilterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptFilterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptFilterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptFilterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteReceiptFilterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteReceiptFilterHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteReceiptFilterHeaders = PostDeleteReceiptFilterHeaders;
var PostDeleteReceiptFilterRequest = /** @class */ (function (_super) {
    __extends(PostDeleteReceiptFilterRequest, _super);
    function PostDeleteReceiptFilterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteReceiptFilterQueryParams)
    ], PostDeleteReceiptFilterRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteReceiptFilterHeaders)
    ], PostDeleteReceiptFilterRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteReceiptFilterRequest.prototype, "request", void 0);
    return PostDeleteReceiptFilterRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteReceiptFilterRequest = PostDeleteReceiptFilterRequest;
var PostDeleteReceiptFilterResponse = /** @class */ (function (_super) {
    __extends(PostDeleteReceiptFilterResponse, _super);
    function PostDeleteReceiptFilterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteReceiptFilterResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteReceiptFilterResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteReceiptFilterResponse.prototype, "statusCode", void 0);
    return PostDeleteReceiptFilterResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteReceiptFilterResponse = PostDeleteReceiptFilterResponse;
