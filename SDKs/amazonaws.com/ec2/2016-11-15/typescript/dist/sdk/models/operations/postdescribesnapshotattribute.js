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
exports.PostDescribeSnapshotAttributeResponse = exports.PostDescribeSnapshotAttributeRequest = exports.PostDescribeSnapshotAttributeHeaders = exports.PostDescribeSnapshotAttributeQueryParams = exports.PostDescribeSnapshotAttributeVersionEnum = exports.PostDescribeSnapshotAttributeActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeSnapshotAttributeActionEnum;
(function (PostDescribeSnapshotAttributeActionEnum) {
    PostDescribeSnapshotAttributeActionEnum["DescribeSnapshotAttribute"] = "DescribeSnapshotAttribute";
})(PostDescribeSnapshotAttributeActionEnum = exports.PostDescribeSnapshotAttributeActionEnum || (exports.PostDescribeSnapshotAttributeActionEnum = {}));
var PostDescribeSnapshotAttributeVersionEnum;
(function (PostDescribeSnapshotAttributeVersionEnum) {
    PostDescribeSnapshotAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeSnapshotAttributeVersionEnum = exports.PostDescribeSnapshotAttributeVersionEnum || (exports.PostDescribeSnapshotAttributeVersionEnum = {}));
var PostDescribeSnapshotAttributeQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeSnapshotAttributeQueryParams, _super);
    function PostDescribeSnapshotAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotAttributeQueryParams.prototype, "version", void 0);
    return PostDescribeSnapshotAttributeQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSnapshotAttributeQueryParams = PostDescribeSnapshotAttributeQueryParams;
var PostDescribeSnapshotAttributeHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeSnapshotAttributeHeaders, _super);
    function PostDescribeSnapshotAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeSnapshotAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeSnapshotAttributeHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSnapshotAttributeHeaders = PostDescribeSnapshotAttributeHeaders;
var PostDescribeSnapshotAttributeRequest = /** @class */ (function (_super) {
    __extends(PostDescribeSnapshotAttributeRequest, _super);
    function PostDescribeSnapshotAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeSnapshotAttributeQueryParams)
    ], PostDescribeSnapshotAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeSnapshotAttributeHeaders)
    ], PostDescribeSnapshotAttributeRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSnapshotAttributeRequest.prototype, "request", void 0);
    return PostDescribeSnapshotAttributeRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSnapshotAttributeRequest = PostDescribeSnapshotAttributeRequest;
var PostDescribeSnapshotAttributeResponse = /** @class */ (function (_super) {
    __extends(PostDescribeSnapshotAttributeResponse, _super);
    function PostDescribeSnapshotAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeSnapshotAttributeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeSnapshotAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeSnapshotAttributeResponse.prototype, "statusCode", void 0);
    return PostDescribeSnapshotAttributeResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeSnapshotAttributeResponse = PostDescribeSnapshotAttributeResponse;
