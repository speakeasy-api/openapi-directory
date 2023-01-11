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
exports.PostUpdateDefaultSearchFieldResponse = exports.PostUpdateDefaultSearchFieldRequest = exports.PostUpdateDefaultSearchFieldHeaders = exports.PostUpdateDefaultSearchFieldQueryParams = exports.PostUpdateDefaultSearchFieldVersionEnum = exports.PostUpdateDefaultSearchFieldActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUpdateDefaultSearchFieldActionEnum;
(function (PostUpdateDefaultSearchFieldActionEnum) {
    PostUpdateDefaultSearchFieldActionEnum["UpdateDefaultSearchField"] = "UpdateDefaultSearchField";
})(PostUpdateDefaultSearchFieldActionEnum = exports.PostUpdateDefaultSearchFieldActionEnum || (exports.PostUpdateDefaultSearchFieldActionEnum = {}));
var PostUpdateDefaultSearchFieldVersionEnum;
(function (PostUpdateDefaultSearchFieldVersionEnum) {
    PostUpdateDefaultSearchFieldVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(PostUpdateDefaultSearchFieldVersionEnum = exports.PostUpdateDefaultSearchFieldVersionEnum || (exports.PostUpdateDefaultSearchFieldVersionEnum = {}));
var PostUpdateDefaultSearchFieldQueryParams = /** @class */ (function (_super) {
    __extends(PostUpdateDefaultSearchFieldQueryParams, _super);
    function PostUpdateDefaultSearchFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUpdateDefaultSearchFieldQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUpdateDefaultSearchFieldQueryParams.prototype, "version", void 0);
    return PostUpdateDefaultSearchFieldQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUpdateDefaultSearchFieldQueryParams = PostUpdateDefaultSearchFieldQueryParams;
var PostUpdateDefaultSearchFieldHeaders = /** @class */ (function (_super) {
    __extends(PostUpdateDefaultSearchFieldHeaders, _super);
    function PostUpdateDefaultSearchFieldHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUpdateDefaultSearchFieldHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUpdateDefaultSearchFieldHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUpdateDefaultSearchFieldHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUpdateDefaultSearchFieldHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUpdateDefaultSearchFieldHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUpdateDefaultSearchFieldHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUpdateDefaultSearchFieldHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUpdateDefaultSearchFieldHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUpdateDefaultSearchFieldHeaders = PostUpdateDefaultSearchFieldHeaders;
var PostUpdateDefaultSearchFieldRequest = /** @class */ (function (_super) {
    __extends(PostUpdateDefaultSearchFieldRequest, _super);
    function PostUpdateDefaultSearchFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateDefaultSearchFieldQueryParams)
    ], PostUpdateDefaultSearchFieldRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUpdateDefaultSearchFieldHeaders)
    ], PostUpdateDefaultSearchFieldRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUpdateDefaultSearchFieldRequest.prototype, "request", void 0);
    return PostUpdateDefaultSearchFieldRequest;
}(utils_1.SpeakeasyBase));
exports.PostUpdateDefaultSearchFieldRequest = PostUpdateDefaultSearchFieldRequest;
var PostUpdateDefaultSearchFieldResponse = /** @class */ (function (_super) {
    __extends(PostUpdateDefaultSearchFieldResponse, _super);
    function PostUpdateDefaultSearchFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostUpdateDefaultSearchFieldResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUpdateDefaultSearchFieldResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUpdateDefaultSearchFieldResponse.prototype, "statusCode", void 0);
    return PostUpdateDefaultSearchFieldResponse;
}(utils_1.SpeakeasyBase));
exports.PostUpdateDefaultSearchFieldResponse = PostUpdateDefaultSearchFieldResponse;
