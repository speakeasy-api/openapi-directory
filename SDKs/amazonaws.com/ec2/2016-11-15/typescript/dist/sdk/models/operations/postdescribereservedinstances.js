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
exports.PostDescribeReservedInstancesResponse = exports.PostDescribeReservedInstancesRequest = exports.PostDescribeReservedInstancesHeaders = exports.PostDescribeReservedInstancesQueryParams = exports.PostDescribeReservedInstancesVersionEnum = exports.PostDescribeReservedInstancesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeReservedInstancesActionEnum;
(function (PostDescribeReservedInstancesActionEnum) {
    PostDescribeReservedInstancesActionEnum["DescribeReservedInstances"] = "DescribeReservedInstances";
})(PostDescribeReservedInstancesActionEnum = exports.PostDescribeReservedInstancesActionEnum || (exports.PostDescribeReservedInstancesActionEnum = {}));
var PostDescribeReservedInstancesVersionEnum;
(function (PostDescribeReservedInstancesVersionEnum) {
    PostDescribeReservedInstancesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeReservedInstancesVersionEnum = exports.PostDescribeReservedInstancesVersionEnum || (exports.PostDescribeReservedInstancesVersionEnum = {}));
var PostDescribeReservedInstancesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeReservedInstancesQueryParams, _super);
    function PostDescribeReservedInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesQueryParams.prototype, "version", void 0);
    return PostDescribeReservedInstancesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeReservedInstancesQueryParams = PostDescribeReservedInstancesQueryParams;
var PostDescribeReservedInstancesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeReservedInstancesHeaders, _super);
    function PostDescribeReservedInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeReservedInstancesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeReservedInstancesHeaders = PostDescribeReservedInstancesHeaders;
var PostDescribeReservedInstancesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeReservedInstancesRequest, _super);
    function PostDescribeReservedInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeReservedInstancesQueryParams)
    ], PostDescribeReservedInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeReservedInstancesHeaders)
    ], PostDescribeReservedInstancesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReservedInstancesRequest.prototype, "request", void 0);
    return PostDescribeReservedInstancesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeReservedInstancesRequest = PostDescribeReservedInstancesRequest;
var PostDescribeReservedInstancesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeReservedInstancesResponse, _super);
    function PostDescribeReservedInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReservedInstancesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeReservedInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeReservedInstancesResponse.prototype, "statusCode", void 0);
    return PostDescribeReservedInstancesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeReservedInstancesResponse = PostDescribeReservedInstancesResponse;
