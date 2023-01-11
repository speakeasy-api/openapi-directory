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
exports.GetGetSendStatisticsResponse = exports.GetGetSendStatisticsRequest = exports.GetGetSendStatisticsHeaders = exports.GetGetSendStatisticsQueryParams = exports.GetGetSendStatisticsVersionEnum = exports.GetGetSendStatisticsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGetSendStatisticsActionEnum;
(function (GetGetSendStatisticsActionEnum) {
    GetGetSendStatisticsActionEnum["GetSendStatistics"] = "GetSendStatistics";
})(GetGetSendStatisticsActionEnum = exports.GetGetSendStatisticsActionEnum || (exports.GetGetSendStatisticsActionEnum = {}));
var GetGetSendStatisticsVersionEnum;
(function (GetGetSendStatisticsVersionEnum) {
    GetGetSendStatisticsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetGetSendStatisticsVersionEnum = exports.GetGetSendStatisticsVersionEnum || (exports.GetGetSendStatisticsVersionEnum = {}));
var GetGetSendStatisticsQueryParams = /** @class */ (function (_super) {
    __extends(GetGetSendStatisticsQueryParams, _super);
    function GetGetSendStatisticsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetSendStatisticsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetSendStatisticsQueryParams.prototype, "version", void 0);
    return GetGetSendStatisticsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGetSendStatisticsQueryParams = GetGetSendStatisticsQueryParams;
var GetGetSendStatisticsHeaders = /** @class */ (function (_super) {
    __extends(GetGetSendStatisticsHeaders, _super);
    function GetGetSendStatisticsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetSendStatisticsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetSendStatisticsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetSendStatisticsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetSendStatisticsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetSendStatisticsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetSendStatisticsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetSendStatisticsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetSendStatisticsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetGetSendStatisticsHeaders = GetGetSendStatisticsHeaders;
var GetGetSendStatisticsRequest = /** @class */ (function (_super) {
    __extends(GetGetSendStatisticsRequest, _super);
    function GetGetSendStatisticsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetSendStatisticsQueryParams)
    ], GetGetSendStatisticsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetSendStatisticsHeaders)
    ], GetGetSendStatisticsRequest.prototype, "headers", void 0);
    return GetGetSendStatisticsRequest;
}(utils_1.SpeakeasyBase));
exports.GetGetSendStatisticsRequest = GetGetSendStatisticsRequest;
var GetGetSendStatisticsResponse = /** @class */ (function (_super) {
    __extends(GetGetSendStatisticsResponse, _super);
    function GetGetSendStatisticsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetGetSendStatisticsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGetSendStatisticsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGetSendStatisticsResponse.prototype, "statusCode", void 0);
    return GetGetSendStatisticsResponse;
}(utils_1.SpeakeasyBase));
exports.GetGetSendStatisticsResponse = GetGetSendStatisticsResponse;
