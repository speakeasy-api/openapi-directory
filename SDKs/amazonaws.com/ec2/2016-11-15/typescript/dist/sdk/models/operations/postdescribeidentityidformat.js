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
exports.PostDescribeIdentityIdFormatResponse = exports.PostDescribeIdentityIdFormatRequest = exports.PostDescribeIdentityIdFormatHeaders = exports.PostDescribeIdentityIdFormatQueryParams = exports.PostDescribeIdentityIdFormatVersionEnum = exports.PostDescribeIdentityIdFormatActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeIdentityIdFormatActionEnum;
(function (PostDescribeIdentityIdFormatActionEnum) {
    PostDescribeIdentityIdFormatActionEnum["DescribeIdentityIdFormat"] = "DescribeIdentityIdFormat";
})(PostDescribeIdentityIdFormatActionEnum = exports.PostDescribeIdentityIdFormatActionEnum || (exports.PostDescribeIdentityIdFormatActionEnum = {}));
var PostDescribeIdentityIdFormatVersionEnum;
(function (PostDescribeIdentityIdFormatVersionEnum) {
    PostDescribeIdentityIdFormatVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(PostDescribeIdentityIdFormatVersionEnum = exports.PostDescribeIdentityIdFormatVersionEnum || (exports.PostDescribeIdentityIdFormatVersionEnum = {}));
var PostDescribeIdentityIdFormatQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeIdentityIdFormatQueryParams, _super);
    function PostDescribeIdentityIdFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeIdentityIdFormatQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeIdentityIdFormatQueryParams.prototype, "version", void 0);
    return PostDescribeIdentityIdFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeIdentityIdFormatQueryParams = PostDescribeIdentityIdFormatQueryParams;
var PostDescribeIdentityIdFormatHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeIdentityIdFormatHeaders, _super);
    function PostDescribeIdentityIdFormatHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeIdentityIdFormatHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeIdentityIdFormatHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeIdentityIdFormatHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeIdentityIdFormatHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeIdentityIdFormatHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeIdentityIdFormatHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeIdentityIdFormatHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeIdentityIdFormatHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeIdentityIdFormatHeaders = PostDescribeIdentityIdFormatHeaders;
var PostDescribeIdentityIdFormatRequest = /** @class */ (function (_super) {
    __extends(PostDescribeIdentityIdFormatRequest, _super);
    function PostDescribeIdentityIdFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeIdentityIdFormatQueryParams)
    ], PostDescribeIdentityIdFormatRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeIdentityIdFormatHeaders)
    ], PostDescribeIdentityIdFormatRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeIdentityIdFormatRequest.prototype, "request", void 0);
    return PostDescribeIdentityIdFormatRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeIdentityIdFormatRequest = PostDescribeIdentityIdFormatRequest;
var PostDescribeIdentityIdFormatResponse = /** @class */ (function (_super) {
    __extends(PostDescribeIdentityIdFormatResponse, _super);
    function PostDescribeIdentityIdFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeIdentityIdFormatResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeIdentityIdFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeIdentityIdFormatResponse.prototype, "statusCode", void 0);
    return PostDescribeIdentityIdFormatResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeIdentityIdFormatResponse = PostDescribeIdentityIdFormatResponse;
