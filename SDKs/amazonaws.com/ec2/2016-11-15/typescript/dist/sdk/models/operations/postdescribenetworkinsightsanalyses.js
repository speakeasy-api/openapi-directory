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
exports.PostDescribeNetworkInsightsAnalysesResponse = exports.PostDescribeNetworkInsightsAnalysesRequest = exports.PostDescribeNetworkInsightsAnalysesHeaders = exports.PostDescribeNetworkInsightsAnalysesQueryParams = exports.PostDescribeNetworkInsightsAnalysesVersionEnum = exports.PostDescribeNetworkInsightsAnalysesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeNetworkInsightsAnalysesActionEnum;
(function (PostDescribeNetworkInsightsAnalysesActionEnum) {
    PostDescribeNetworkInsightsAnalysesActionEnum["DescribeNetworkInsightsAnalyses"] = "DescribeNetworkInsightsAnalyses";
})(PostDescribeNetworkInsightsAnalysesActionEnum = exports.PostDescribeNetworkInsightsAnalysesActionEnum || (exports.PostDescribeNetworkInsightsAnalysesActionEnum = {}));
var PostDescribeNetworkInsightsAnalysesVersionEnum;
(function (PostDescribeNetworkInsightsAnalysesVersionEnum) {
    PostDescribeNetworkInsightsAnalysesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeNetworkInsightsAnalysesVersionEnum = exports.PostDescribeNetworkInsightsAnalysesVersionEnum || (exports.PostDescribeNetworkInsightsAnalysesVersionEnum = {}));
var PostDescribeNetworkInsightsAnalysesQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeNetworkInsightsAnalysesQueryParams, _super);
    function PostDescribeNetworkInsightsAnalysesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesQueryParams.prototype, "version", void 0);
    return PostDescribeNetworkInsightsAnalysesQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeNetworkInsightsAnalysesQueryParams = PostDescribeNetworkInsightsAnalysesQueryParams;
var PostDescribeNetworkInsightsAnalysesHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeNetworkInsightsAnalysesHeaders, _super);
    function PostDescribeNetworkInsightsAnalysesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeNetworkInsightsAnalysesHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeNetworkInsightsAnalysesHeaders = PostDescribeNetworkInsightsAnalysesHeaders;
var PostDescribeNetworkInsightsAnalysesRequest = /** @class */ (function (_super) {
    __extends(PostDescribeNetworkInsightsAnalysesRequest, _super);
    function PostDescribeNetworkInsightsAnalysesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeNetworkInsightsAnalysesQueryParams)
    ], PostDescribeNetworkInsightsAnalysesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeNetworkInsightsAnalysesHeaders)
    ], PostDescribeNetworkInsightsAnalysesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeNetworkInsightsAnalysesRequest.prototype, "request", void 0);
    return PostDescribeNetworkInsightsAnalysesRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeNetworkInsightsAnalysesRequest = PostDescribeNetworkInsightsAnalysesRequest;
var PostDescribeNetworkInsightsAnalysesResponse = /** @class */ (function (_super) {
    __extends(PostDescribeNetworkInsightsAnalysesResponse, _super);
    function PostDescribeNetworkInsightsAnalysesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeNetworkInsightsAnalysesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeNetworkInsightsAnalysesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeNetworkInsightsAnalysesResponse.prototype, "statusCode", void 0);
    return PostDescribeNetworkInsightsAnalysesResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeNetworkInsightsAnalysesResponse = PostDescribeNetworkInsightsAnalysesResponse;
