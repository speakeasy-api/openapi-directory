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
exports.PostAllocateAddressResponse = exports.PostAllocateAddressRequest = exports.PostAllocateAddressHeaders = exports.PostAllocateAddressQueryParams = exports.PostAllocateAddressVersionEnum = exports.PostAllocateAddressActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAllocateAddressActionEnum;
(function (PostAllocateAddressActionEnum) {
    PostAllocateAddressActionEnum["AllocateAddress"] = "AllocateAddress";
})(PostAllocateAddressActionEnum = exports.PostAllocateAddressActionEnum || (exports.PostAllocateAddressActionEnum = {}));
var PostAllocateAddressVersionEnum;
(function (PostAllocateAddressVersionEnum) {
    PostAllocateAddressVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAllocateAddressVersionEnum = exports.PostAllocateAddressVersionEnum || (exports.PostAllocateAddressVersionEnum = {}));
var PostAllocateAddressQueryParams = /** @class */ (function (_super) {
    __extends(PostAllocateAddressQueryParams, _super);
    function PostAllocateAddressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAllocateAddressQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAllocateAddressQueryParams.prototype, "version", void 0);
    return PostAllocateAddressQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAllocateAddressQueryParams = PostAllocateAddressQueryParams;
var PostAllocateAddressHeaders = /** @class */ (function (_super) {
    __extends(PostAllocateAddressHeaders, _super);
    function PostAllocateAddressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAllocateAddressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAllocateAddressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAllocateAddressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAllocateAddressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAllocateAddressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAllocateAddressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAllocateAddressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAllocateAddressHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAllocateAddressHeaders = PostAllocateAddressHeaders;
var PostAllocateAddressRequest = /** @class */ (function (_super) {
    __extends(PostAllocateAddressRequest, _super);
    function PostAllocateAddressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAllocateAddressQueryParams)
    ], PostAllocateAddressRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAllocateAddressHeaders)
    ], PostAllocateAddressRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAllocateAddressRequest.prototype, "request", void 0);
    return PostAllocateAddressRequest;
}(utils_1.SpeakeasyBase));
exports.PostAllocateAddressRequest = PostAllocateAddressRequest;
var PostAllocateAddressResponse = /** @class */ (function (_super) {
    __extends(PostAllocateAddressResponse, _super);
    function PostAllocateAddressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAllocateAddressResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAllocateAddressResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAllocateAddressResponse.prototype, "statusCode", void 0);
    return PostAllocateAddressResponse;
}(utils_1.SpeakeasyBase));
exports.PostAllocateAddressResponse = PostAllocateAddressResponse;
