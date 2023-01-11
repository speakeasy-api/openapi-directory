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
exports.PostDescribeAggregateIdFormatResponse = exports.PostDescribeAggregateIdFormatRequest = exports.PostDescribeAggregateIdFormatHeaders = exports.PostDescribeAggregateIdFormatQueryParams = exports.PostDescribeAggregateIdFormatVersionEnum = exports.PostDescribeAggregateIdFormatActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeAggregateIdFormatActionEnum;
(function (PostDescribeAggregateIdFormatActionEnum) {
    PostDescribeAggregateIdFormatActionEnum["DescribeAggregateIdFormat"] = "DescribeAggregateIdFormat";
})(PostDescribeAggregateIdFormatActionEnum = exports.PostDescribeAggregateIdFormatActionEnum || (exports.PostDescribeAggregateIdFormatActionEnum = {}));
var PostDescribeAggregateIdFormatVersionEnum;
(function (PostDescribeAggregateIdFormatVersionEnum) {
    PostDescribeAggregateIdFormatVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeAggregateIdFormatVersionEnum = exports.PostDescribeAggregateIdFormatVersionEnum || (exports.PostDescribeAggregateIdFormatVersionEnum = {}));
var PostDescribeAggregateIdFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeAggregateIdFormatQueryParams, _super);
    function PostDescribeAggregateIdFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeAggregateIdFormatQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeAggregateIdFormatQueryParams.prototype, "version", void 0);
    return PostDescribeAggregateIdFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAggregateIdFormatQueryParams = PostDescribeAggregateIdFormatQueryParams;
var PostDescribeAggregateIdFormatHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeAggregateIdFormatHeaders, _super);
    function PostDescribeAggregateIdFormatHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeAggregateIdFormatHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeAggregateIdFormatHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeAggregateIdFormatHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeAggregateIdFormatHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeAggregateIdFormatHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeAggregateIdFormatHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeAggregateIdFormatHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeAggregateIdFormatHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAggregateIdFormatHeaders = PostDescribeAggregateIdFormatHeaders;
var PostDescribeAggregateIdFormatRequest = /** @class */ (function (_super) {
    __extends(PostDescribeAggregateIdFormatRequest, _super);
    function PostDescribeAggregateIdFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeAggregateIdFormatQueryParams)
    ], PostDescribeAggregateIdFormatRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeAggregateIdFormatHeaders)
    ], PostDescribeAggregateIdFormatRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAggregateIdFormatRequest.prototype, "request", void 0);
    return PostDescribeAggregateIdFormatRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAggregateIdFormatRequest = PostDescribeAggregateIdFormatRequest;
var PostDescribeAggregateIdFormatResponse = /** @class */ (function (_super) {
    __extends(PostDescribeAggregateIdFormatResponse, _super);
    function PostDescribeAggregateIdFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAggregateIdFormatResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeAggregateIdFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeAggregateIdFormatResponse.prototype, "statusCode", void 0);
    return PostDescribeAggregateIdFormatResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAggregateIdFormatResponse = PostDescribeAggregateIdFormatResponse;
