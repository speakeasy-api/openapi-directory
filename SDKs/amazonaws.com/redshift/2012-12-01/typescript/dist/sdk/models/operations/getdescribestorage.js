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
exports.GetDescribeStorageResponse = exports.GetDescribeStorageRequest = exports.GetDescribeStorageHeaders = exports.GetDescribeStorageQueryParams = exports.GetDescribeStorageVersionEnum = exports.GetDescribeStorageActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeStorageActionEnum;
(function (GetDescribeStorageActionEnum) {
    GetDescribeStorageActionEnum["DescribeStorage"] = "DescribeStorage";
})(GetDescribeStorageActionEnum = exports.GetDescribeStorageActionEnum || (exports.GetDescribeStorageActionEnum = {}));
var GetDescribeStorageVersionEnum;
(function (GetDescribeStorageVersionEnum) {
    GetDescribeStorageVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeStorageVersionEnum = exports.GetDescribeStorageVersionEnum || (exports.GetDescribeStorageVersionEnum = {}));
var GetDescribeStorageQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeStorageQueryParams, _super);
    function GetDescribeStorageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeStorageQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeStorageQueryParams.prototype, "version", void 0);
    return GetDescribeStorageQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeStorageQueryParams = GetDescribeStorageQueryParams;
var GetDescribeStorageHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeStorageHeaders, _super);
    function GetDescribeStorageHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeStorageHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeStorageHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeStorageHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeStorageHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeStorageHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeStorageHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeStorageHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeStorageHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeStorageHeaders = GetDescribeStorageHeaders;
var GetDescribeStorageRequest = /** @class */ (function (_super) {
    __extends(GetDescribeStorageRequest, _super);
    function GetDescribeStorageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeStorageQueryParams)
    ], GetDescribeStorageRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeStorageHeaders)
    ], GetDescribeStorageRequest.prototype, "headers", void 0);
    return GetDescribeStorageRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeStorageRequest = GetDescribeStorageRequest;
var GetDescribeStorageResponse = /** @class */ (function (_super) {
    __extends(GetDescribeStorageResponse, _super);
    function GetDescribeStorageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeStorageResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeStorageResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeStorageResponse.prototype, "statusCode", void 0);
    return GetDescribeStorageResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeStorageResponse = GetDescribeStorageResponse;
