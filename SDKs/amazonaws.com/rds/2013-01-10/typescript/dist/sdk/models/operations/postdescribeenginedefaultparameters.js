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
exports.PostDescribeEngineDefaultParametersResponse = exports.PostDescribeEngineDefaultParametersRequest = exports.PostDescribeEngineDefaultParametersHeaders = exports.PostDescribeEngineDefaultParametersQueryParams = exports.PostDescribeEngineDefaultParametersVersionEnum = exports.PostDescribeEngineDefaultParametersActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeEngineDefaultParametersActionEnum;
(function (PostDescribeEngineDefaultParametersActionEnum) {
    PostDescribeEngineDefaultParametersActionEnum["DescribeEngineDefaultParameters"] = "DescribeEngineDefaultParameters";
})(PostDescribeEngineDefaultParametersActionEnum = exports.PostDescribeEngineDefaultParametersActionEnum || (exports.PostDescribeEngineDefaultParametersActionEnum = {}));
var PostDescribeEngineDefaultParametersVersionEnum;
(function (PostDescribeEngineDefaultParametersVersionEnum) {
    PostDescribeEngineDefaultParametersVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(PostDescribeEngineDefaultParametersVersionEnum = exports.PostDescribeEngineDefaultParametersVersionEnum || (exports.PostDescribeEngineDefaultParametersVersionEnum = {}));
var PostDescribeEngineDefaultParametersQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeEngineDefaultParametersQueryParams, _super);
    function PostDescribeEngineDefaultParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersQueryParams.prototype, "version", void 0);
    return PostDescribeEngineDefaultParametersQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEngineDefaultParametersQueryParams = PostDescribeEngineDefaultParametersQueryParams;
var PostDescribeEngineDefaultParametersHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeEngineDefaultParametersHeaders, _super);
    function PostDescribeEngineDefaultParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeEngineDefaultParametersHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEngineDefaultParametersHeaders = PostDescribeEngineDefaultParametersHeaders;
var PostDescribeEngineDefaultParametersRequest = /** @class */ (function (_super) {
    __extends(PostDescribeEngineDefaultParametersRequest, _super);
    function PostDescribeEngineDefaultParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeEngineDefaultParametersQueryParams)
    ], PostDescribeEngineDefaultParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeEngineDefaultParametersHeaders)
    ], PostDescribeEngineDefaultParametersRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEngineDefaultParametersRequest.prototype, "request", void 0);
    return PostDescribeEngineDefaultParametersRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEngineDefaultParametersRequest = PostDescribeEngineDefaultParametersRequest;
var PostDescribeEngineDefaultParametersResponse = /** @class */ (function (_super) {
    __extends(PostDescribeEngineDefaultParametersResponse, _super);
    function PostDescribeEngineDefaultParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeEngineDefaultParametersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeEngineDefaultParametersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeEngineDefaultParametersResponse.prototype, "statusCode", void 0);
    return PostDescribeEngineDefaultParametersResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeEngineDefaultParametersResponse = PostDescribeEngineDefaultParametersResponse;
