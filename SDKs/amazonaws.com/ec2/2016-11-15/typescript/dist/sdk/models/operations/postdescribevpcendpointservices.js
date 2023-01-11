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
exports.PostDescribeVpcEndpointServicesResponse = exports.PostDescribeVpcEndpointServicesRequest = exports.PostDescribeVpcEndpointServicesHeaders = exports.PostDescribeVpcEndpointServicesQueryParams = exports.PostDescribeVpcEndpointServicesVersionEnum = exports.PostDescribeVpcEndpointServicesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeVpcEndpointServicesActionEnum;
(function (PostDescribeVpcEndpointServicesActionEnum) {
    PostDescribeVpcEndpointServicesActionEnum["DescribeVpcEndpointServices"] = "DescribeVpcEndpointServices";
})(PostDescribeVpcEndpointServicesActionEnum = exports.PostDescribeVpcEndpointServicesActionEnum || (exports.PostDescribeVpcEndpointServicesActionEnum = {}));
var PostDescribeVpcEndpointServicesVersionEnum;
(function (PostDescribeVpcEndpointServicesVersionEnum) {
    PostDescribeVpcEndpointServicesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeVpcEndpointServicesVersionEnum = exports.PostDescribeVpcEndpointServicesVersionEnum || (exports.PostDescribeVpcEndpointServicesVersionEnum = {}));
var PostDescribeVpcEndpointServicesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeVpcEndpointServicesQueryParams, _super);
    function PostDescribeVpcEndpointServicesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeVpcEndpointServicesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeVpcEndpointServicesQueryParams.prototype, "version", void 0);
    return PostDescribeVpcEndpointServicesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeVpcEndpointServicesQueryParams = PostDescribeVpcEndpointServicesQueryParams;
var PostDescribeVpcEndpointServicesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeVpcEndpointServicesHeaders, _super);
    function PostDescribeVpcEndpointServicesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeVpcEndpointServicesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeVpcEndpointServicesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeVpcEndpointServicesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeVpcEndpointServicesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeVpcEndpointServicesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeVpcEndpointServicesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeVpcEndpointServicesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeVpcEndpointServicesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeVpcEndpointServicesHeaders = PostDescribeVpcEndpointServicesHeaders;
var PostDescribeVpcEndpointServicesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeVpcEndpointServicesRequest, _super);
    function PostDescribeVpcEndpointServicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeVpcEndpointServicesQueryParams)
    ], PostDescribeVpcEndpointServicesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeVpcEndpointServicesHeaders)
    ], PostDescribeVpcEndpointServicesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVpcEndpointServicesRequest.prototype, "request", void 0);
    return PostDescribeVpcEndpointServicesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeVpcEndpointServicesRequest = PostDescribeVpcEndpointServicesRequest;
var PostDescribeVpcEndpointServicesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeVpcEndpointServicesResponse, _super);
    function PostDescribeVpcEndpointServicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeVpcEndpointServicesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeVpcEndpointServicesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeVpcEndpointServicesResponse.prototype, "statusCode", void 0);
    return PostDescribeVpcEndpointServicesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeVpcEndpointServicesResponse = PostDescribeVpcEndpointServicesResponse;
