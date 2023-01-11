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
exports.PostDescribeAnomalyDetectorsResponse = exports.PostDescribeAnomalyDetectorsRequest = exports.PostDescribeAnomalyDetectorsHeaders = exports.PostDescribeAnomalyDetectorsQueryParams = exports.PostDescribeAnomalyDetectorsVersionEnum = exports.PostDescribeAnomalyDetectorsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeAnomalyDetectorsActionEnum;
(function (PostDescribeAnomalyDetectorsActionEnum) {
    PostDescribeAnomalyDetectorsActionEnum["DescribeAnomalyDetectors"] = "DescribeAnomalyDetectors";
})(PostDescribeAnomalyDetectorsActionEnum = exports.PostDescribeAnomalyDetectorsActionEnum || (exports.PostDescribeAnomalyDetectorsActionEnum = {}));
var PostDescribeAnomalyDetectorsVersionEnum;
(function (PostDescribeAnomalyDetectorsVersionEnum) {
    PostDescribeAnomalyDetectorsVersionEnum["TwoThousandAndTen0801"] = "2010-08-01";
})(PostDescribeAnomalyDetectorsVersionEnum = exports.PostDescribeAnomalyDetectorsVersionEnum || (exports.PostDescribeAnomalyDetectorsVersionEnum = {}));
var PostDescribeAnomalyDetectorsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeAnomalyDetectorsQueryParams, _super);
    function PostDescribeAnomalyDetectorsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeAnomalyDetectorsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeAnomalyDetectorsQueryParams.prototype, "version", void 0);
    return PostDescribeAnomalyDetectorsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAnomalyDetectorsQueryParams = PostDescribeAnomalyDetectorsQueryParams;
var PostDescribeAnomalyDetectorsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeAnomalyDetectorsHeaders, _super);
    function PostDescribeAnomalyDetectorsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeAnomalyDetectorsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeAnomalyDetectorsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeAnomalyDetectorsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeAnomalyDetectorsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeAnomalyDetectorsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeAnomalyDetectorsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeAnomalyDetectorsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeAnomalyDetectorsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAnomalyDetectorsHeaders = PostDescribeAnomalyDetectorsHeaders;
var PostDescribeAnomalyDetectorsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeAnomalyDetectorsRequest, _super);
    function PostDescribeAnomalyDetectorsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeAnomalyDetectorsQueryParams)
    ], PostDescribeAnomalyDetectorsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeAnomalyDetectorsHeaders)
    ], PostDescribeAnomalyDetectorsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAnomalyDetectorsRequest.prototype, "request", void 0);
    return PostDescribeAnomalyDetectorsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAnomalyDetectorsRequest = PostDescribeAnomalyDetectorsRequest;
var PostDescribeAnomalyDetectorsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeAnomalyDetectorsResponse, _super);
    function PostDescribeAnomalyDetectorsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeAnomalyDetectorsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeAnomalyDetectorsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeAnomalyDetectorsResponse.prototype, "statusCode", void 0);
    return PostDescribeAnomalyDetectorsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeAnomalyDetectorsResponse = PostDescribeAnomalyDetectorsResponse;
