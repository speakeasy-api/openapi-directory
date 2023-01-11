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
exports.GetListServerCertificateTagsResponse = exports.GetListServerCertificateTagsRequest = exports.GetListServerCertificateTagsHeaders = exports.GetListServerCertificateTagsQueryParams = exports.GetListServerCertificateTagsVersionEnum = exports.GetListServerCertificateTagsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetListServerCertificateTagsActionEnum;
(function (GetListServerCertificateTagsActionEnum) {
    GetListServerCertificateTagsActionEnum["ListServerCertificateTags"] = "ListServerCertificateTags";
})(GetListServerCertificateTagsActionEnum = exports.GetListServerCertificateTagsActionEnum || (exports.GetListServerCertificateTagsActionEnum = {}));
var GetListServerCertificateTagsVersionEnum;
(function (GetListServerCertificateTagsVersionEnum) {
    GetListServerCertificateTagsVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListServerCertificateTagsVersionEnum = exports.GetListServerCertificateTagsVersionEnum || (exports.GetListServerCertificateTagsVersionEnum = {}));
var GetListServerCertificateTagsQueryParams = /** @class */ (function (_super) {
    __extends(GetListServerCertificateTagsQueryParams, _super);
    function GetListServerCertificateTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListServerCertificateTagsQueryParams.prototype, "maxItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ServerCertificateName" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsQueryParams.prototype, "serverCertificateName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsQueryParams.prototype, "version", void 0);
    return GetListServerCertificateTagsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListServerCertificateTagsQueryParams = GetListServerCertificateTagsQueryParams;
var GetListServerCertificateTagsHeaders = /** @class */ (function (_super) {
    __extends(GetListServerCertificateTagsHeaders, _super);
    function GetListServerCertificateTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListServerCertificateTagsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetListServerCertificateTagsHeaders = GetListServerCertificateTagsHeaders;
var GetListServerCertificateTagsRequest = /** @class */ (function (_super) {
    __extends(GetListServerCertificateTagsRequest, _super);
    function GetListServerCertificateTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListServerCertificateTagsQueryParams)
    ], GetListServerCertificateTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListServerCertificateTagsHeaders)
    ], GetListServerCertificateTagsRequest.prototype, "headers", void 0);
    return GetListServerCertificateTagsRequest;
}(utils_1.SpeakeasyBase));
exports.GetListServerCertificateTagsRequest = GetListServerCertificateTagsRequest;
var GetListServerCertificateTagsResponse = /** @class */ (function (_super) {
    __extends(GetListServerCertificateTagsResponse, _super);
    function GetListServerCertificateTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetListServerCertificateTagsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListServerCertificateTagsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListServerCertificateTagsResponse.prototype, "statusCode", void 0);
    return GetListServerCertificateTagsResponse;
}(utils_1.SpeakeasyBase));
exports.GetListServerCertificateTagsResponse = GetListServerCertificateTagsResponse;
