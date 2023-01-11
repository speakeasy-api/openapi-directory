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
exports.GetDescribeClusterTracksResponse = exports.GetDescribeClusterTracksRequest = exports.GetDescribeClusterTracksHeaders = exports.GetDescribeClusterTracksQueryParams = exports.GetDescribeClusterTracksVersionEnum = exports.GetDescribeClusterTracksActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeClusterTracksActionEnum;
(function (GetDescribeClusterTracksActionEnum) {
    GetDescribeClusterTracksActionEnum["DescribeClusterTracks"] = "DescribeClusterTracks";
})(GetDescribeClusterTracksActionEnum = exports.GetDescribeClusterTracksActionEnum || (exports.GetDescribeClusterTracksActionEnum = {}));
var GetDescribeClusterTracksVersionEnum;
(function (GetDescribeClusterTracksVersionEnum) {
    GetDescribeClusterTracksVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeClusterTracksVersionEnum = exports.GetDescribeClusterTracksVersionEnum || (exports.GetDescribeClusterTracksVersionEnum = {}));
var GetDescribeClusterTracksQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeClusterTracksQueryParams, _super);
    function GetDescribeClusterTracksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaintenanceTrackName" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksQueryParams.prototype, "maintenanceTrackName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeClusterTracksQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksQueryParams.prototype, "version", void 0);
    return GetDescribeClusterTracksQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeClusterTracksQueryParams = GetDescribeClusterTracksQueryParams;
var GetDescribeClusterTracksHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeClusterTracksHeaders, _super);
    function GetDescribeClusterTracksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeClusterTracksHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeClusterTracksHeaders = GetDescribeClusterTracksHeaders;
var GetDescribeClusterTracksRequest = /** @class */ (function (_super) {
    __extends(GetDescribeClusterTracksRequest, _super);
    function GetDescribeClusterTracksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeClusterTracksQueryParams)
    ], GetDescribeClusterTracksRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeClusterTracksHeaders)
    ], GetDescribeClusterTracksRequest.prototype, "headers", void 0);
    return GetDescribeClusterTracksRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeClusterTracksRequest = GetDescribeClusterTracksRequest;
var GetDescribeClusterTracksResponse = /** @class */ (function (_super) {
    __extends(GetDescribeClusterTracksResponse, _super);
    function GetDescribeClusterTracksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeClusterTracksResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeClusterTracksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeClusterTracksResponse.prototype, "statusCode", void 0);
    return GetDescribeClusterTracksResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeClusterTracksResponse = GetDescribeClusterTracksResponse;
