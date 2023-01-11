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
exports.PostDescribeSpotPriceHistoryResponse = exports.PostDescribeSpotPriceHistoryRequest = exports.PostDescribeSpotPriceHistoryHeaders = exports.PostDescribeSpotPriceHistoryQueryParams = exports.PostDescribeSpotPriceHistoryVersionEnum = exports.PostDescribeSpotPriceHistoryActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeSpotPriceHistoryActionEnum;
(function (PostDescribeSpotPriceHistoryActionEnum) {
    PostDescribeSpotPriceHistoryActionEnum["DescribeSpotPriceHistory"] = "DescribeSpotPriceHistory";
})(PostDescribeSpotPriceHistoryActionEnum = exports.PostDescribeSpotPriceHistoryActionEnum || (exports.PostDescribeSpotPriceHistoryActionEnum = {}));
var PostDescribeSpotPriceHistoryVersionEnum;
(function (PostDescribeSpotPriceHistoryVersionEnum) {
    PostDescribeSpotPriceHistoryVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeSpotPriceHistoryVersionEnum = exports.PostDescribeSpotPriceHistoryVersionEnum || (exports.PostDescribeSpotPriceHistoryVersionEnum = {}));
var PostDescribeSpotPriceHistoryQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeSpotPriceHistoryQueryParams, _super);
    function PostDescribeSpotPriceHistoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryQueryParams.prototype, "version", void 0);
    return PostDescribeSpotPriceHistoryQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSpotPriceHistoryQueryParams = PostDescribeSpotPriceHistoryQueryParams;
var PostDescribeSpotPriceHistoryHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeSpotPriceHistoryHeaders, _super);
    function PostDescribeSpotPriceHistoryHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeSpotPriceHistoryHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSpotPriceHistoryHeaders = PostDescribeSpotPriceHistoryHeaders;
var PostDescribeSpotPriceHistoryRequest = /** @class */ (function (_super) {
    __extends(PostDescribeSpotPriceHistoryRequest, _super);
    function PostDescribeSpotPriceHistoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeSpotPriceHistoryQueryParams)
    ], PostDescribeSpotPriceHistoryRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeSpotPriceHistoryHeaders)
    ], PostDescribeSpotPriceHistoryRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSpotPriceHistoryRequest.prototype, "request", void 0);
    return PostDescribeSpotPriceHistoryRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSpotPriceHistoryRequest = PostDescribeSpotPriceHistoryRequest;
var PostDescribeSpotPriceHistoryResponse = /** @class */ (function (_super) {
    __extends(PostDescribeSpotPriceHistoryResponse, _super);
    function PostDescribeSpotPriceHistoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSpotPriceHistoryResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeSpotPriceHistoryResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeSpotPriceHistoryResponse.prototype, "statusCode", void 0);
    return PostDescribeSpotPriceHistoryResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSpotPriceHistoryResponse = PostDescribeSpotPriceHistoryResponse;
