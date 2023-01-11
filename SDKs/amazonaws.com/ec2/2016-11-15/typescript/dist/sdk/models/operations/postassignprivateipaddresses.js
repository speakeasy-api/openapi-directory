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
exports.PostAssignPrivateIpAddressesResponse = exports.PostAssignPrivateIpAddressesRequest = exports.PostAssignPrivateIpAddressesHeaders = exports.PostAssignPrivateIpAddressesQueryParams = exports.PostAssignPrivateIpAddressesVersionEnum = exports.PostAssignPrivateIpAddressesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostAssignPrivateIpAddressesActionEnum;
(function (PostAssignPrivateIpAddressesActionEnum) {
    PostAssignPrivateIpAddressesActionEnum["AssignPrivateIpAddresses"] = "AssignPrivateIpAddresses";
})(PostAssignPrivateIpAddressesActionEnum = exports.PostAssignPrivateIpAddressesActionEnum || (exports.PostAssignPrivateIpAddressesActionEnum = {}));
var PostAssignPrivateIpAddressesVersionEnum;
(function (PostAssignPrivateIpAddressesVersionEnum) {
    PostAssignPrivateIpAddressesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostAssignPrivateIpAddressesVersionEnum = exports.PostAssignPrivateIpAddressesVersionEnum || (exports.PostAssignPrivateIpAddressesVersionEnum = {}));
var PostAssignPrivateIpAddressesQueryParams = /** @class */ (function (_super) {
    __extends(PostAssignPrivateIpAddressesQueryParams, _super);
    function PostAssignPrivateIpAddressesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostAssignPrivateIpAddressesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostAssignPrivateIpAddressesQueryParams.prototype, "version", void 0);
    return PostAssignPrivateIpAddressesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAssignPrivateIpAddressesQueryParams = PostAssignPrivateIpAddressesQueryParams;
var PostAssignPrivateIpAddressesHeaders = /** @class */ (function (_super) {
    __extends(PostAssignPrivateIpAddressesHeaders, _super);
    function PostAssignPrivateIpAddressesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostAssignPrivateIpAddressesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostAssignPrivateIpAddressesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostAssignPrivateIpAddressesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostAssignPrivateIpAddressesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostAssignPrivateIpAddressesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostAssignPrivateIpAddressesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostAssignPrivateIpAddressesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostAssignPrivateIpAddressesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostAssignPrivateIpAddressesHeaders = PostAssignPrivateIpAddressesHeaders;
var PostAssignPrivateIpAddressesRequest = /** @class */ (function (_super) {
    __extends(PostAssignPrivateIpAddressesRequest, _super);
    function PostAssignPrivateIpAddressesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssignPrivateIpAddressesQueryParams)
    ], PostAssignPrivateIpAddressesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAssignPrivateIpAddressesHeaders)
    ], PostAssignPrivateIpAddressesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAssignPrivateIpAddressesRequest.prototype, "request", void 0);
    return PostAssignPrivateIpAddressesRequest;
}(utils_1.SpeakeasyBase));
exports.PostAssignPrivateIpAddressesRequest = PostAssignPrivateIpAddressesRequest;
var PostAssignPrivateIpAddressesResponse = /** @class */ (function (_super) {
    __extends(PostAssignPrivateIpAddressesResponse, _super);
    function PostAssignPrivateIpAddressesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAssignPrivateIpAddressesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAssignPrivateIpAddressesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAssignPrivateIpAddressesResponse.prototype, "statusCode", void 0);
    return PostAssignPrivateIpAddressesResponse;
}(utils_1.SpeakeasyBase));
exports.PostAssignPrivateIpAddressesResponse = PostAssignPrivateIpAddressesResponse;
