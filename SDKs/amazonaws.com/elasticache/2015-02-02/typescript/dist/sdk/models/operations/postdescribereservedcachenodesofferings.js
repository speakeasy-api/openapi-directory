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
exports.PostDescribeReservedCacheNodesOfferingsResponse = exports.PostDescribeReservedCacheNodesOfferingsRequest = exports.PostDescribeReservedCacheNodesOfferingsHeaders = exports.PostDescribeReservedCacheNodesOfferingsQueryParams = exports.PostDescribeReservedCacheNodesOfferingsVersionEnum = exports.PostDescribeReservedCacheNodesOfferingsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeReservedCacheNodesOfferingsActionEnum;
(function (PostDescribeReservedCacheNodesOfferingsActionEnum) {
    PostDescribeReservedCacheNodesOfferingsActionEnum["DescribeReservedCacheNodesOfferings"] = "DescribeReservedCacheNodesOfferings";
})(PostDescribeReservedCacheNodesOfferingsActionEnum = exports.PostDescribeReservedCacheNodesOfferingsActionEnum || (exports.PostDescribeReservedCacheNodesOfferingsActionEnum = {}));
var PostDescribeReservedCacheNodesOfferingsVersionEnum;
(function (PostDescribeReservedCacheNodesOfferingsVersionEnum) {
    PostDescribeReservedCacheNodesOfferingsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(PostDescribeReservedCacheNodesOfferingsVersionEnum = exports.PostDescribeReservedCacheNodesOfferingsVersionEnum || (exports.PostDescribeReservedCacheNodesOfferingsVersionEnum = {}));
var PostDescribeReservedCacheNodesOfferingsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeReservedCacheNodesOfferingsQueryParams, _super);
    function PostDescribeReservedCacheNodesOfferingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsQueryParams.prototype, "version", void 0);
    return PostDescribeReservedCacheNodesOfferingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeReservedCacheNodesOfferingsQueryParams = PostDescribeReservedCacheNodesOfferingsQueryParams;
var PostDescribeReservedCacheNodesOfferingsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeReservedCacheNodesOfferingsHeaders, _super);
    function PostDescribeReservedCacheNodesOfferingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeReservedCacheNodesOfferingsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeReservedCacheNodesOfferingsHeaders = PostDescribeReservedCacheNodesOfferingsHeaders;
var PostDescribeReservedCacheNodesOfferingsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeReservedCacheNodesOfferingsRequest, _super);
    function PostDescribeReservedCacheNodesOfferingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeReservedCacheNodesOfferingsQueryParams)
    ], PostDescribeReservedCacheNodesOfferingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeReservedCacheNodesOfferingsHeaders)
    ], PostDescribeReservedCacheNodesOfferingsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReservedCacheNodesOfferingsRequest.prototype, "request", void 0);
    return PostDescribeReservedCacheNodesOfferingsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeReservedCacheNodesOfferingsRequest = PostDescribeReservedCacheNodesOfferingsRequest;
var PostDescribeReservedCacheNodesOfferingsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeReservedCacheNodesOfferingsResponse, _super);
    function PostDescribeReservedCacheNodesOfferingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeReservedCacheNodesOfferingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeReservedCacheNodesOfferingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeReservedCacheNodesOfferingsResponse.prototype, "statusCode", void 0);
    return PostDescribeReservedCacheNodesOfferingsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeReservedCacheNodesOfferingsResponse = PostDescribeReservedCacheNodesOfferingsResponse;
