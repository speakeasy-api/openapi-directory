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
exports.PostDescribeOrderableClusterOptionsResponse = exports.PostDescribeOrderableClusterOptionsRequest = exports.PostDescribeOrderableClusterOptionsHeaders = exports.PostDescribeOrderableClusterOptionsQueryParams = exports.PostDescribeOrderableClusterOptionsVersionEnum = exports.PostDescribeOrderableClusterOptionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeOrderableClusterOptionsActionEnum;
(function (PostDescribeOrderableClusterOptionsActionEnum) {
    PostDescribeOrderableClusterOptionsActionEnum["DescribeOrderableClusterOptions"] = "DescribeOrderableClusterOptions";
})(PostDescribeOrderableClusterOptionsActionEnum = exports.PostDescribeOrderableClusterOptionsActionEnum || (exports.PostDescribeOrderableClusterOptionsActionEnum = {}));
var PostDescribeOrderableClusterOptionsVersionEnum;
(function (PostDescribeOrderableClusterOptionsVersionEnum) {
    PostDescribeOrderableClusterOptionsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeOrderableClusterOptionsVersionEnum = exports.PostDescribeOrderableClusterOptionsVersionEnum || (exports.PostDescribeOrderableClusterOptionsVersionEnum = {}));
var PostDescribeOrderableClusterOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeOrderableClusterOptionsQueryParams, _super);
    function PostDescribeOrderableClusterOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsQueryParams.prototype, "version", void 0);
    return PostDescribeOrderableClusterOptionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOrderableClusterOptionsQueryParams = PostDescribeOrderableClusterOptionsQueryParams;
var PostDescribeOrderableClusterOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeOrderableClusterOptionsHeaders, _super);
    function PostDescribeOrderableClusterOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeOrderableClusterOptionsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOrderableClusterOptionsHeaders = PostDescribeOrderableClusterOptionsHeaders;
var PostDescribeOrderableClusterOptionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeOrderableClusterOptionsRequest, _super);
    function PostDescribeOrderableClusterOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeOrderableClusterOptionsQueryParams)
    ], PostDescribeOrderableClusterOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeOrderableClusterOptionsHeaders)
    ], PostDescribeOrderableClusterOptionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeOrderableClusterOptionsRequest.prototype, "request", void 0);
    return PostDescribeOrderableClusterOptionsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOrderableClusterOptionsRequest = PostDescribeOrderableClusterOptionsRequest;
var PostDescribeOrderableClusterOptionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeOrderableClusterOptionsResponse, _super);
    function PostDescribeOrderableClusterOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeOrderableClusterOptionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeOrderableClusterOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeOrderableClusterOptionsResponse.prototype, "statusCode", void 0);
    return PostDescribeOrderableClusterOptionsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOrderableClusterOptionsResponse = PostDescribeOrderableClusterOptionsResponse;
