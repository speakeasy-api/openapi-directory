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
exports.PostListReceiptFiltersResponse = exports.PostListReceiptFiltersRequest = exports.PostListReceiptFiltersHeaders = exports.PostListReceiptFiltersQueryParams = exports.PostListReceiptFiltersVersionEnum = exports.PostListReceiptFiltersActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostListReceiptFiltersActionEnum;
(function (PostListReceiptFiltersActionEnum) {
    PostListReceiptFiltersActionEnum["ListReceiptFilters"] = "ListReceiptFilters";
})(PostListReceiptFiltersActionEnum = exports.PostListReceiptFiltersActionEnum || (exports.PostListReceiptFiltersActionEnum = {}));
var PostListReceiptFiltersVersionEnum;
(function (PostListReceiptFiltersVersionEnum) {
    PostListReceiptFiltersVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostListReceiptFiltersVersionEnum = exports.PostListReceiptFiltersVersionEnum || (exports.PostListReceiptFiltersVersionEnum = {}));
var PostListReceiptFiltersQueryParams = /** @class */ (function (_super) {
    __extends(PostListReceiptFiltersQueryParams, _super);
    function PostListReceiptFiltersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListReceiptFiltersQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListReceiptFiltersQueryParams.prototype, "version", void 0);
    return PostListReceiptFiltersQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostListReceiptFiltersQueryParams = PostListReceiptFiltersQueryParams;
var PostListReceiptFiltersHeaders = /** @class */ (function (_super) {
    __extends(PostListReceiptFiltersHeaders, _super);
    function PostListReceiptFiltersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListReceiptFiltersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListReceiptFiltersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListReceiptFiltersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListReceiptFiltersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListReceiptFiltersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListReceiptFiltersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListReceiptFiltersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListReceiptFiltersHeaders;
}(utils_1.SpeakeasyBase));
exports.PostListReceiptFiltersHeaders = PostListReceiptFiltersHeaders;
var PostListReceiptFiltersRequest = /** @class */ (function (_super) {
    __extends(PostListReceiptFiltersRequest, _super);
    function PostListReceiptFiltersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListReceiptFiltersQueryParams)
    ], PostListReceiptFiltersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListReceiptFiltersHeaders)
    ], PostListReceiptFiltersRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListReceiptFiltersRequest.prototype, "request", void 0);
    return PostListReceiptFiltersRequest;
}(utils_1.SpeakeasyBase));
exports.PostListReceiptFiltersRequest = PostListReceiptFiltersRequest;
var PostListReceiptFiltersResponse = /** @class */ (function (_super) {
    __extends(PostListReceiptFiltersResponse, _super);
    function PostListReceiptFiltersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostListReceiptFiltersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostListReceiptFiltersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostListReceiptFiltersResponse.prototype, "statusCode", void 0);
    return PostListReceiptFiltersResponse;
}(utils_1.SpeakeasyBase));
exports.PostListReceiptFiltersResponse = PostListReceiptFiltersResponse;
