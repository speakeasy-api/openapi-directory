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
exports.PostDescribeRegionsResponse = exports.PostDescribeRegionsRequest = exports.PostDescribeRegionsHeaders = exports.PostDescribeRegionsQueryParams = exports.PostDescribeRegionsVersionEnum = exports.PostDescribeRegionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeRegionsActionEnum;
(function (PostDescribeRegionsActionEnum) {
    PostDescribeRegionsActionEnum["DescribeRegions"] = "DescribeRegions";
})(PostDescribeRegionsActionEnum = exports.PostDescribeRegionsActionEnum || (exports.PostDescribeRegionsActionEnum = {}));
var PostDescribeRegionsVersionEnum;
(function (PostDescribeRegionsVersionEnum) {
    PostDescribeRegionsVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeRegionsVersionEnum = exports.PostDescribeRegionsVersionEnum || (exports.PostDescribeRegionsVersionEnum = {}));
var PostDescribeRegionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeRegionsQueryParams, _super);
    function PostDescribeRegionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeRegionsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeRegionsQueryParams.prototype, "version", void 0);
    return PostDescribeRegionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeRegionsQueryParams = PostDescribeRegionsQueryParams;
var PostDescribeRegionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeRegionsHeaders, _super);
    function PostDescribeRegionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeRegionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeRegionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeRegionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeRegionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeRegionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeRegionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeRegionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeRegionsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeRegionsHeaders = PostDescribeRegionsHeaders;
var PostDescribeRegionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeRegionsRequest, _super);
    function PostDescribeRegionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeRegionsQueryParams)
    ], PostDescribeRegionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeRegionsHeaders)
    ], PostDescribeRegionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeRegionsRequest.prototype, "request", void 0);
    return PostDescribeRegionsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeRegionsRequest = PostDescribeRegionsRequest;
var PostDescribeRegionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeRegionsResponse, _super);
    function PostDescribeRegionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeRegionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeRegionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeRegionsResponse.prototype, "statusCode", void 0);
    return PostDescribeRegionsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeRegionsResponse = PostDescribeRegionsResponse;
