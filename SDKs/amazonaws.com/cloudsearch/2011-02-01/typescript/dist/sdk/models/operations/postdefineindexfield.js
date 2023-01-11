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
exports.PostDefineIndexFieldResponse = exports.PostDefineIndexFieldRequest = exports.PostDefineIndexFieldHeaders = exports.PostDefineIndexFieldQueryParams = exports.PostDefineIndexFieldVersionEnum = exports.PostDefineIndexFieldActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDefineIndexFieldActionEnum;
(function (PostDefineIndexFieldActionEnum) {
    PostDefineIndexFieldActionEnum["DefineIndexField"] = "DefineIndexField";
})(PostDefineIndexFieldActionEnum = exports.PostDefineIndexFieldActionEnum || (exports.PostDefineIndexFieldActionEnum = {}));
var PostDefineIndexFieldVersionEnum;
(function (PostDefineIndexFieldVersionEnum) {
    PostDefineIndexFieldVersionEnum["TwoThousandAndEleven0201"] = "2011-02-01";
})(PostDefineIndexFieldVersionEnum = exports.PostDefineIndexFieldVersionEnum || (exports.PostDefineIndexFieldVersionEnum = {}));
var PostDefineIndexFieldQueryParams = /** @class */ (function (_super) {
    __extends(PostDefineIndexFieldQueryParams, _super);
    function PostDefineIndexFieldQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDefineIndexFieldQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDefineIndexFieldQueryParams.prototype, "version", void 0);
    return PostDefineIndexFieldQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDefineIndexFieldQueryParams = PostDefineIndexFieldQueryParams;
var PostDefineIndexFieldHeaders = /** @class */ (function (_super) {
    __extends(PostDefineIndexFieldHeaders, _super);
    function PostDefineIndexFieldHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDefineIndexFieldHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDefineIndexFieldHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDefineIndexFieldHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDefineIndexFieldHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDefineIndexFieldHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDefineIndexFieldHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDefineIndexFieldHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDefineIndexFieldHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDefineIndexFieldHeaders = PostDefineIndexFieldHeaders;
var PostDefineIndexFieldRequest = /** @class */ (function (_super) {
    __extends(PostDefineIndexFieldRequest, _super);
    function PostDefineIndexFieldRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDefineIndexFieldQueryParams)
    ], PostDefineIndexFieldRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDefineIndexFieldHeaders)
    ], PostDefineIndexFieldRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDefineIndexFieldRequest.prototype, "request", void 0);
    return PostDefineIndexFieldRequest;
}(utils_1.SpeakeasyBase));
exports.PostDefineIndexFieldRequest = PostDefineIndexFieldRequest;
var PostDefineIndexFieldResponse = /** @class */ (function (_super) {
    __extends(PostDefineIndexFieldResponse, _super);
    function PostDefineIndexFieldResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDefineIndexFieldResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDefineIndexFieldResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDefineIndexFieldResponse.prototype, "statusCode", void 0);
    return PostDefineIndexFieldResponse;
}(utils_1.SpeakeasyBase));
exports.PostDefineIndexFieldResponse = PostDefineIndexFieldResponse;
