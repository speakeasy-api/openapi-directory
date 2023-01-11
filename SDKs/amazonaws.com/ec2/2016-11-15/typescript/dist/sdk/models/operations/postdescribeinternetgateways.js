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
exports.PostDescribeInternetGatewaysResponse = exports.PostDescribeInternetGatewaysRequest = exports.PostDescribeInternetGatewaysHeaders = exports.PostDescribeInternetGatewaysQueryParams = exports.PostDescribeInternetGatewaysVersionEnum = exports.PostDescribeInternetGatewaysActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeInternetGatewaysActionEnum;
(function (PostDescribeInternetGatewaysActionEnum) {
    PostDescribeInternetGatewaysActionEnum["DescribeInternetGateways"] = "DescribeInternetGateways";
})(PostDescribeInternetGatewaysActionEnum = exports.PostDescribeInternetGatewaysActionEnum || (exports.PostDescribeInternetGatewaysActionEnum = {}));
var PostDescribeInternetGatewaysVersionEnum;
(function (PostDescribeInternetGatewaysVersionEnum) {
    PostDescribeInternetGatewaysVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeInternetGatewaysVersionEnum = exports.PostDescribeInternetGatewaysVersionEnum || (exports.PostDescribeInternetGatewaysVersionEnum = {}));
var PostDescribeInternetGatewaysQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeInternetGatewaysQueryParams, _super);
    function PostDescribeInternetGatewaysQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysQueryParams.prototype, "version", void 0);
    return PostDescribeInternetGatewaysQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeInternetGatewaysQueryParams = PostDescribeInternetGatewaysQueryParams;
var PostDescribeInternetGatewaysHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeInternetGatewaysHeaders, _super);
    function PostDescribeInternetGatewaysHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeInternetGatewaysHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeInternetGatewaysHeaders = PostDescribeInternetGatewaysHeaders;
var PostDescribeInternetGatewaysRequest = /** @class */ (function (_super) {
    __extends(PostDescribeInternetGatewaysRequest, _super);
    function PostDescribeInternetGatewaysRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeInternetGatewaysQueryParams)
    ], PostDescribeInternetGatewaysRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeInternetGatewaysHeaders)
    ], PostDescribeInternetGatewaysRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeInternetGatewaysRequest.prototype, "request", void 0);
    return PostDescribeInternetGatewaysRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeInternetGatewaysRequest = PostDescribeInternetGatewaysRequest;
var PostDescribeInternetGatewaysResponse = /** @class */ (function (_super) {
    __extends(PostDescribeInternetGatewaysResponse, _super);
    function PostDescribeInternetGatewaysResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeInternetGatewaysResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeInternetGatewaysResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeInternetGatewaysResponse.prototype, "statusCode", void 0);
    return PostDescribeInternetGatewaysResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeInternetGatewaysResponse = PostDescribeInternetGatewaysResponse;
