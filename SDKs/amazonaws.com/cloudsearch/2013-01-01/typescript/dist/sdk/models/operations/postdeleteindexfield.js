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
exports.PostDeleteIndexFieldResponse = exports.PostDeleteIndexFieldRequest = exports.PostDeleteIndexFieldHeaders = exports.PostDeleteIndexFieldQueryParams = exports.PostDeleteIndexFieldVersionEnum = exports.PostDeleteIndexFieldActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDeleteIndexFieldActionEnum;
(function (PostDeleteIndexFieldActionEnum) {
    PostDeleteIndexFieldActionEnum["DeleteIndexField"] = "DeleteIndexField";
})(PostDeleteIndexFieldActionEnum = exports.PostDeleteIndexFieldActionEnum || (exports.PostDeleteIndexFieldActionEnum = {}));
var PostDeleteIndexFieldVersionEnum;
(function (PostDeleteIndexFieldVersionEnum) {
    PostDeleteIndexFieldVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(PostDeleteIndexFieldVersionEnum = exports.PostDeleteIndexFieldVersionEnum || (exports.PostDeleteIndexFieldVersionEnum = {}));
var PostDeleteIndexFieldQueryParams = /** @class */ (function (_super) {
    __extends(PostDeleteIndexFieldQueryParams, _super);
    function PostDeleteIndexFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDeleteIndexFieldQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDeleteIndexFieldQueryParams.prototype, "version", void 0);
    return PostDeleteIndexFieldQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDeleteIndexFieldQueryParams = PostDeleteIndexFieldQueryParams;
var PostDeleteIndexFieldHeaders = /** @class */ (function (_super) {
    __extends(PostDeleteIndexFieldHeaders, _super);
    function PostDeleteIndexFieldHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDeleteIndexFieldHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDeleteIndexFieldHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDeleteIndexFieldHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDeleteIndexFieldHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDeleteIndexFieldHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDeleteIndexFieldHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDeleteIndexFieldHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDeleteIndexFieldHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDeleteIndexFieldHeaders = PostDeleteIndexFieldHeaders;
var PostDeleteIndexFieldRequest = /** @class */ (function (_super) {
    __extends(PostDeleteIndexFieldRequest, _super);
    function PostDeleteIndexFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteIndexFieldQueryParams)
    ], PostDeleteIndexFieldRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDeleteIndexFieldHeaders)
    ], PostDeleteIndexFieldRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDeleteIndexFieldRequest.prototype, "request", void 0);
    return PostDeleteIndexFieldRequest;
}(utils_1.SpeakeasyBase));
exports.PostDeleteIndexFieldRequest = PostDeleteIndexFieldRequest;
var PostDeleteIndexFieldResponse = /** @class */ (function (_super) {
    __extends(PostDeleteIndexFieldResponse, _super);
    function PostDeleteIndexFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDeleteIndexFieldResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDeleteIndexFieldResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDeleteIndexFieldResponse.prototype, "statusCode", void 0);
    return PostDeleteIndexFieldResponse;
}(utils_1.SpeakeasyBase));
exports.PostDeleteIndexFieldResponse = PostDeleteIndexFieldResponse;
