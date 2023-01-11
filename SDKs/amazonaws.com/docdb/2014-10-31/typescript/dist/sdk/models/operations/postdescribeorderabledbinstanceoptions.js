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
exports.PostDescribeOrderableDbInstanceOptionsResponse = exports.PostDescribeOrderableDbInstanceOptionsRequest = exports.PostDescribeOrderableDbInstanceOptionsHeaders = exports.PostDescribeOrderableDbInstanceOptionsQueryParams = exports.PostDescribeOrderableDbInstanceOptionsVersionEnum = exports.PostDescribeOrderableDbInstanceOptionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PostDescribeOrderableDbInstanceOptionsActionEnum;
(function (PostDescribeOrderableDbInstanceOptionsActionEnum) {
    PostDescribeOrderableDbInstanceOptionsActionEnum["DescribeOrderableDbInstanceOptions"] = "DescribeOrderableDBInstanceOptions";
})(PostDescribeOrderableDbInstanceOptionsActionEnum = exports.PostDescribeOrderableDbInstanceOptionsActionEnum || (exports.PostDescribeOrderableDbInstanceOptionsActionEnum = {}));
var PostDescribeOrderableDbInstanceOptionsVersionEnum;
(function (PostDescribeOrderableDbInstanceOptionsVersionEnum) {
    PostDescribeOrderableDbInstanceOptionsVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(PostDescribeOrderableDbInstanceOptionsVersionEnum = exports.PostDescribeOrderableDbInstanceOptionsVersionEnum || (exports.PostDescribeOrderableDbInstanceOptionsVersionEnum = {}));
var PostDescribeOrderableDbInstanceOptionsQueryParams = /** @class */ (function (_super) {
    __extends(PostDescribeOrderableDbInstanceOptionsQueryParams, _super);
    function PostDescribeOrderableDbInstanceOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsQueryParams.prototype, "version", void 0);
    return PostDescribeOrderableDbInstanceOptionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOrderableDbInstanceOptionsQueryParams = PostDescribeOrderableDbInstanceOptionsQueryParams;
var PostDescribeOrderableDbInstanceOptionsHeaders = /** @class */ (function (_super) {
    __extends(PostDescribeOrderableDbInstanceOptionsHeaders, _super);
    function PostDescribeOrderableDbInstanceOptionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return PostDescribeOrderableDbInstanceOptionsHeaders;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOrderableDbInstanceOptionsHeaders = PostDescribeOrderableDbInstanceOptionsHeaders;
var PostDescribeOrderableDbInstanceOptionsRequest = /** @class */ (function (_super) {
    __extends(PostDescribeOrderableDbInstanceOptionsRequest, _super);
    function PostDescribeOrderableDbInstanceOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeOrderableDbInstanceOptionsQueryParams)
    ], PostDescribeOrderableDbInstanceOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostDescribeOrderableDbInstanceOptionsHeaders)
    ], PostDescribeOrderableDbInstanceOptionsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=text/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostDescribeOrderableDbInstanceOptionsRequest.prototype, "request", void 0);
    return PostDescribeOrderableDbInstanceOptionsRequest;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOrderableDbInstanceOptionsRequest = PostDescribeOrderableDbInstanceOptionsRequest;
var PostDescribeOrderableDbInstanceOptionsResponse = /** @class */ (function (_super) {
    __extends(PostDescribeOrderableDbInstanceOptionsResponse, _super);
    function PostDescribeOrderableDbInstanceOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostDescribeOrderableDbInstanceOptionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostDescribeOrderableDbInstanceOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostDescribeOrderableDbInstanceOptionsResponse.prototype, "statusCode", void 0);
    return PostDescribeOrderableDbInstanceOptionsResponse;
}(utils_1.SpeakeasyBase));
exports.PostDescribeOrderableDbInstanceOptionsResponse = PostDescribeOrderableDbInstanceOptionsResponse;
