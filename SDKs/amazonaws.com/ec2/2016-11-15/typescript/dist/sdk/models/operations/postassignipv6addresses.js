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
exports.PostAssignIpv6AddressesResponse = exports.PostAssignIpv6AddressesRequest = exports.PostAssignIpv6AddressesHeaders = exports.PostAssignIpv6AddressesQueryParams = exports.PostAssignIpv6AddressesVersionEnum = exports.PostAssignIpv6AddressesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAssignIpv6AddressesActionEnum;
(function (PostAssignIpv6AddressesActionEnum) {
    PostAssignIpv6AddressesActionEnum["AssignIpv6Addresses"] = "AssignIpv6Addresses";
})(PostAssignIpv6AddressesActionEnum = exports.PostAssignIpv6AddressesActionEnum || (exports.PostAssignIpv6AddressesActionEnum = {}));
var PostAssignIpv6AddressesVersionEnum;
(function (PostAssignIpv6AddressesVersionEnum) {
    PostAssignIpv6AddressesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAssignIpv6AddressesVersionEnum = exports.PostAssignIpv6AddressesVersionEnum || (exports.PostAssignIpv6AddressesVersionEnum = {}));
var PostAssignIpv6AddressesQueryParams = /** @class */ (function (_super) {
    __extends(PostAssignIpv6AddressesQueryParams, _super);
    function PostAssignIpv6AddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAssignIpv6AddressesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAssignIpv6AddressesQueryParams.prototype, "version", void 0);
    return PostAssignIpv6AddressesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAssignIpv6AddressesQueryParams = PostAssignIpv6AddressesQueryParams;
var PostAssignIpv6AddressesHeaders = /** @class */ (function (_super) {
    __extends(PostAssignIpv6AddressesHeaders, _super);
    function PostAssignIpv6AddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAssignIpv6AddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAssignIpv6AddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAssignIpv6AddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAssignIpv6AddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAssignIpv6AddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAssignIpv6AddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAssignIpv6AddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAssignIpv6AddressesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAssignIpv6AddressesHeaders = PostAssignIpv6AddressesHeaders;
var PostAssignIpv6AddressesRequest = /** @class */ (function (_super) {
    __extends(PostAssignIpv6AddressesRequest, _super);
    function PostAssignIpv6AddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssignIpv6AddressesQueryParams)
    ], PostAssignIpv6AddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssignIpv6AddressesHeaders)
    ], PostAssignIpv6AddressesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAssignIpv6AddressesRequest.prototype, "request", void 0);
    return PostAssignIpv6AddressesRequest;
}(utils_1.SpeakeasyBase));
exports.PostAssignIpv6AddressesRequest = PostAssignIpv6AddressesRequest;
var PostAssignIpv6AddressesResponse = /** @class */ (function (_super) {
    __extends(PostAssignIpv6AddressesResponse, _super);
    function PostAssignIpv6AddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAssignIpv6AddressesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAssignIpv6AddressesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAssignIpv6AddressesResponse.prototype, "statusCode", void 0);
    return PostAssignIpv6AddressesResponse;
}(utils_1.SpeakeasyBase));
exports.PostAssignIpv6AddressesResponse = PostAssignIpv6AddressesResponse;
