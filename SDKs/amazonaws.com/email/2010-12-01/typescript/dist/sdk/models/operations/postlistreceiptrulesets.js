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
exports.PostListReceiptRuleSetsResponse = exports.PostListReceiptRuleSetsRequest = exports.PostListReceiptRuleSetsHeaders = exports.PostListReceiptRuleSetsQueryParams = exports.PostListReceiptRuleSetsVersionEnum = exports.PostListReceiptRuleSetsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostListReceiptRuleSetsActionEnum;
(function (PostListReceiptRuleSetsActionEnum) {
    PostListReceiptRuleSetsActionEnum["ListReceiptRuleSets"] = "ListReceiptRuleSets";
})(PostListReceiptRuleSetsActionEnum = exports.PostListReceiptRuleSetsActionEnum || (exports.PostListReceiptRuleSetsActionEnum = {}));
var PostListReceiptRuleSetsVersionEnum;
(function (PostListReceiptRuleSetsVersionEnum) {
    PostListReceiptRuleSetsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(PostListReceiptRuleSetsVersionEnum = exports.PostListReceiptRuleSetsVersionEnum || (exports.PostListReceiptRuleSetsVersionEnum = {}));
var PostListReceiptRuleSetsQueryParams = /** @class */ (function (_super) {
    __extends(PostListReceiptRuleSetsQueryParams, _super);
    function PostListReceiptRuleSetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostListReceiptRuleSetsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostListReceiptRuleSetsQueryParams.prototype, "version", void 0);
    return PostListReceiptRuleSetsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostListReceiptRuleSetsQueryParams = PostListReceiptRuleSetsQueryParams;
var PostListReceiptRuleSetsHeaders = /** @class */ (function (_super) {
    __extends(PostListReceiptRuleSetsHeaders, _super);
    function PostListReceiptRuleSetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostListReceiptRuleSetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostListReceiptRuleSetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostListReceiptRuleSetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostListReceiptRuleSetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostListReceiptRuleSetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostListReceiptRuleSetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostListReceiptRuleSetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostListReceiptRuleSetsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostListReceiptRuleSetsHeaders = PostListReceiptRuleSetsHeaders;
var PostListReceiptRuleSetsRequest = /** @class */ (function (_super) {
    __extends(PostListReceiptRuleSetsRequest, _super);
    function PostListReceiptRuleSetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListReceiptRuleSetsQueryParams)
    ], PostListReceiptRuleSetsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostListReceiptRuleSetsHeaders)
    ], PostListReceiptRuleSetsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostListReceiptRuleSetsRequest.prototype, "request", void 0);
    return PostListReceiptRuleSetsRequest;
}(utils_1.SpeakeasyBase));
exports.PostListReceiptRuleSetsRequest = PostListReceiptRuleSetsRequest;
var PostListReceiptRuleSetsResponse = /** @class */ (function (_super) {
    __extends(PostListReceiptRuleSetsResponse, _super);
    function PostListReceiptRuleSetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostListReceiptRuleSetsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostListReceiptRuleSetsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostListReceiptRuleSetsResponse.prototype, "statusCode", void 0);
    return PostListReceiptRuleSetsResponse;
}(utils_1.SpeakeasyBase));
exports.PostListReceiptRuleSetsResponse = PostListReceiptRuleSetsResponse;
