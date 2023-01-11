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
exports.PostDescribeFleetInstancesResponse = exports.PostDescribeFleetInstancesRequest = exports.PostDescribeFleetInstancesHeaders = exports.PostDescribeFleetInstancesQueryParams = exports.PostDescribeFleetInstancesVersionEnum = exports.PostDescribeFleetInstancesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeFleetInstancesActionEnum;
(function (PostDescribeFleetInstancesActionEnum) {
    PostDescribeFleetInstancesActionEnum["DescribeFleetInstances"] = "DescribeFleetInstances";
})(PostDescribeFleetInstancesActionEnum = exports.PostDescribeFleetInstancesActionEnum || (exports.PostDescribeFleetInstancesActionEnum = {}));
var PostDescribeFleetInstancesVersionEnum;
(function (PostDescribeFleetInstancesVersionEnum) {
    PostDescribeFleetInstancesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeFleetInstancesVersionEnum = exports.PostDescribeFleetInstancesVersionEnum || (exports.PostDescribeFleetInstancesVersionEnum = {}));
var PostDescribeFleetInstancesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeFleetInstancesQueryParams, _super);
    function PostDescribeFleetInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeFleetInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeFleetInstancesQueryParams.prototype, "version", void 0);
    return PostDescribeFleetInstancesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeFleetInstancesQueryParams = PostDescribeFleetInstancesQueryParams;
var PostDescribeFleetInstancesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeFleetInstancesHeaders, _super);
    function PostDescribeFleetInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeFleetInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeFleetInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeFleetInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeFleetInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeFleetInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeFleetInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeFleetInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeFleetInstancesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeFleetInstancesHeaders = PostDescribeFleetInstancesHeaders;
var PostDescribeFleetInstancesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeFleetInstancesRequest, _super);
    function PostDescribeFleetInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeFleetInstancesQueryParams)
    ], PostDescribeFleetInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeFleetInstancesHeaders)
    ], PostDescribeFleetInstancesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeFleetInstancesRequest.prototype, "request", void 0);
    return PostDescribeFleetInstancesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeFleetInstancesRequest = PostDescribeFleetInstancesRequest;
var PostDescribeFleetInstancesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeFleetInstancesResponse, _super);
    function PostDescribeFleetInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeFleetInstancesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeFleetInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeFleetInstancesResponse.prototype, "statusCode", void 0);
    return PostDescribeFleetInstancesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeFleetInstancesResponse = PostDescribeFleetInstancesResponse;
