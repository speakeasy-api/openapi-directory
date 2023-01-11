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
exports.PostDescribeDbClusterParametersResponse = exports.PostDescribeDbClusterParametersRequest = exports.PostDescribeDbClusterParametersHeaders = exports.PostDescribeDbClusterParametersQueryParams = exports.PostDescribeDbClusterParametersVersionEnum = exports.PostDescribeDbClusterParametersActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeDbClusterParametersActionEnum;
(function (PostDescribeDbClusterParametersActionEnum) {
    PostDescribeDbClusterParametersActionEnum["DescribeDbClusterParameters"] = "DescribeDBClusterParameters";
})(PostDescribeDbClusterParametersActionEnum = exports.PostDescribeDbClusterParametersActionEnum || (exports.PostDescribeDbClusterParametersActionEnum = {}));
var PostDescribeDbClusterParametersVersionEnum;
(function (PostDescribeDbClusterParametersVersionEnum) {
    PostDescribeDbClusterParametersVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDescribeDbClusterParametersVersionEnum = exports.PostDescribeDbClusterParametersVersionEnum || (exports.PostDescribeDbClusterParametersVersionEnum = {}));
var PostDescribeDbClusterParametersQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterParametersQueryParams, _super);
    function PostDescribeDbClusterParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersQueryParams.prototype, "version", void 0);
    return PostDescribeDbClusterParametersQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbClusterParametersQueryParams = PostDescribeDbClusterParametersQueryParams;
var PostDescribeDbClusterParametersHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterParametersHeaders, _super);
    function PostDescribeDbClusterParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDbClusterParametersHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbClusterParametersHeaders = PostDescribeDbClusterParametersHeaders;
var PostDescribeDbClusterParametersRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterParametersRequest, _super);
    function PostDescribeDbClusterParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeDbClusterParametersQueryParams)
    ], PostDescribeDbClusterParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeDbClusterParametersHeaders)
    ], PostDescribeDbClusterParametersRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbClusterParametersRequest.prototype, "request", void 0);
    return PostDescribeDbClusterParametersRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbClusterParametersRequest = PostDescribeDbClusterParametersRequest;
var PostDescribeDbClusterParametersResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDbClusterParametersResponse, _super);
    function PostDescribeDbClusterParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDbClusterParametersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeDbClusterParametersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeDbClusterParametersResponse.prototype, "statusCode", void 0);
    return PostDescribeDbClusterParametersResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDbClusterParametersResponse = PostDescribeDbClusterParametersResponse;
