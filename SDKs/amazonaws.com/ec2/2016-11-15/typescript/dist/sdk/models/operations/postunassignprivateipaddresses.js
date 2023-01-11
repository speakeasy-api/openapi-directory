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
exports.PostUnassignPrivateIpAddressesResponse = exports.PostUnassignPrivateIpAddressesRequest = exports.PostUnassignPrivateIpAddressesHeaders = exports.PostUnassignPrivateIpAddressesQueryParams = exports.PostUnassignPrivateIpAddressesVersionEnum = exports.PostUnassignPrivateIpAddressesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostUnassignPrivateIpAddressesActionEnum;
(function (PostUnassignPrivateIpAddressesActionEnum) {
    PostUnassignPrivateIpAddressesActionEnum["UnassignPrivateIpAddresses"] = "UnassignPrivateIpAddresses";
})(PostUnassignPrivateIpAddressesActionEnum = exports.PostUnassignPrivateIpAddressesActionEnum || (exports.PostUnassignPrivateIpAddressesActionEnum = {}));
var PostUnassignPrivateIpAddressesVersionEnum;
(function (PostUnassignPrivateIpAddressesVersionEnum) {
    PostUnassignPrivateIpAddressesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostUnassignPrivateIpAddressesVersionEnum = exports.PostUnassignPrivateIpAddressesVersionEnum || (exports.PostUnassignPrivateIpAddressesVersionEnum = {}));
var PostUnassignPrivateIpAddressesQueryParams = /** @class */ (function (_super) {
    __extends(PostUnassignPrivateIpAddressesQueryParams, _super);
    function PostUnassignPrivateIpAddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostUnassignPrivateIpAddressesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostUnassignPrivateIpAddressesQueryParams.prototype, "version", void 0);
    return PostUnassignPrivateIpAddressesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostUnassignPrivateIpAddressesQueryParams = PostUnassignPrivateIpAddressesQueryParams;
var PostUnassignPrivateIpAddressesHeaders = /** @class */ (function (_super) {
    __extends(PostUnassignPrivateIpAddressesHeaders, _super);
    function PostUnassignPrivateIpAddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostUnassignPrivateIpAddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostUnassignPrivateIpAddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostUnassignPrivateIpAddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostUnassignPrivateIpAddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostUnassignPrivateIpAddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostUnassignPrivateIpAddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostUnassignPrivateIpAddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostUnassignPrivateIpAddressesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostUnassignPrivateIpAddressesHeaders = PostUnassignPrivateIpAddressesHeaders;
var PostUnassignPrivateIpAddressesRequest = /** @class */ (function (_super) {
    __extends(PostUnassignPrivateIpAddressesRequest, _super);
    function PostUnassignPrivateIpAddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUnassignPrivateIpAddressesQueryParams)
    ], PostUnassignPrivateIpAddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostUnassignPrivateIpAddressesHeaders)
    ], PostUnassignPrivateIpAddressesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostUnassignPrivateIpAddressesRequest.prototype, "request", void 0);
    return PostUnassignPrivateIpAddressesRequest;
}(utils_1.SpeakeasyBase));
exports.PostUnassignPrivateIpAddressesRequest = PostUnassignPrivateIpAddressesRequest;
var PostUnassignPrivateIpAddressesResponse = /** @class */ (function (_super) {
    __extends(PostUnassignPrivateIpAddressesResponse, _super);
    function PostUnassignPrivateIpAddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostUnassignPrivateIpAddressesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostUnassignPrivateIpAddressesResponse.prototype, "statusCode", void 0);
    return PostUnassignPrivateIpAddressesResponse;
}(utils_1.SpeakeasyBase));
exports.PostUnassignPrivateIpAddressesResponse = PostUnassignPrivateIpAddressesResponse;
