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
exports.PostDescribeDefaultClusterParametersResponse = exports.PostDescribeDefaultClusterParametersRequest = exports.PostDescribeDefaultClusterParametersHeaders = exports.PostDescribeDefaultClusterParametersQueryParams = exports.PostDescribeDefaultClusterParametersVersionEnum = exports.PostDescribeDefaultClusterParametersActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeDefaultClusterParametersActionEnum;
(function (PostDescribeDefaultClusterParametersActionEnum) {
    PostDescribeDefaultClusterParametersActionEnum["DescribeDefaultClusterParameters"] = "DescribeDefaultClusterParameters";
})(PostDescribeDefaultClusterParametersActionEnum = exports.PostDescribeDefaultClusterParametersActionEnum || (exports.PostDescribeDefaultClusterParametersActionEnum = {}));
var PostDescribeDefaultClusterParametersVersionEnum;
(function (PostDescribeDefaultClusterParametersVersionEnum) {
    PostDescribeDefaultClusterParametersVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(PostDescribeDefaultClusterParametersVersionEnum = exports.PostDescribeDefaultClusterParametersVersionEnum || (exports.PostDescribeDefaultClusterParametersVersionEnum = {}));
var PostDescribeDefaultClusterParametersQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeDefaultClusterParametersQueryParams, _super);
    function PostDescribeDefaultClusterParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersQueryParams.prototype, "version", void 0);
    return PostDescribeDefaultClusterParametersQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDefaultClusterParametersQueryParams = PostDescribeDefaultClusterParametersQueryParams;
var PostDescribeDefaultClusterParametersHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeDefaultClusterParametersHeaders, _super);
    function PostDescribeDefaultClusterParametersHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeDefaultClusterParametersHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDefaultClusterParametersHeaders = PostDescribeDefaultClusterParametersHeaders;
var PostDescribeDefaultClusterParametersRequest = /** @class */ (function (_super) {
    __extends(PostDescribeDefaultClusterParametersRequest, _super);
    function PostDescribeDefaultClusterParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeDefaultClusterParametersQueryParams)
    ], PostDescribeDefaultClusterParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeDefaultClusterParametersHeaders)
    ], PostDescribeDefaultClusterParametersRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDefaultClusterParametersRequest.prototype, "request", void 0);
    return PostDescribeDefaultClusterParametersRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDefaultClusterParametersRequest = PostDescribeDefaultClusterParametersRequest;
var PostDescribeDefaultClusterParametersResponse = /** @class */ (function (_super) {
    __extends(PostDescribeDefaultClusterParametersResponse, _super);
    function PostDescribeDefaultClusterParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeDefaultClusterParametersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeDefaultClusterParametersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeDefaultClusterParametersResponse.prototype, "statusCode", void 0);
    return PostDescribeDefaultClusterParametersResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeDefaultClusterParametersResponse = PostDescribeDefaultClusterParametersResponse;
