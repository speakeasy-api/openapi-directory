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
exports.GetGetAccessKeyInfoResponse = exports.GetGetAccessKeyInfoRequest = exports.GetGetAccessKeyInfoHeaders = exports.GetGetAccessKeyInfoQueryParams = exports.GetGetAccessKeyInfoVersionEnum = exports.GetGetAccessKeyInfoActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGetAccessKeyInfoActionEnum;
(function (GetGetAccessKeyInfoActionEnum) {
    GetGetAccessKeyInfoActionEnum["GetAccessKeyInfo"] = "GetAccessKeyInfo";
})(GetGetAccessKeyInfoActionEnum = exports.GetGetAccessKeyInfoActionEnum || (exports.GetGetAccessKeyInfoActionEnum = {}));
var GetGetAccessKeyInfoVersionEnum;
(function (GetGetAccessKeyInfoVersionEnum) {
    GetGetAccessKeyInfoVersionEnum["TwoThousandAndEleven0615"] = "2011-06-15";
})(GetGetAccessKeyInfoVersionEnum = exports.GetGetAccessKeyInfoVersionEnum || (exports.GetGetAccessKeyInfoVersionEnum = {}));
var GetGetAccessKeyInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetGetAccessKeyInfoQueryParams, _super);
    function GetGetAccessKeyInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AccessKeyId" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoQueryParams.prototype, "accessKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoQueryParams.prototype, "version", void 0);
    return GetGetAccessKeyInfoQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGetAccessKeyInfoQueryParams = GetGetAccessKeyInfoQueryParams;
var GetGetAccessKeyInfoHeaders = /** @class */ (function (_super) {
    __extends(GetGetAccessKeyInfoHeaders, _super);
    function GetGetAccessKeyInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetAccessKeyInfoHeaders;
}(utils_1.SpeakeasyBase));
exports.GetGetAccessKeyInfoHeaders = GetGetAccessKeyInfoHeaders;
var GetGetAccessKeyInfoRequest = /** @class */ (function (_super) {
    __extends(GetGetAccessKeyInfoRequest, _super);
    function GetGetAccessKeyInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetAccessKeyInfoQueryParams)
    ], GetGetAccessKeyInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetAccessKeyInfoHeaders)
    ], GetGetAccessKeyInfoRequest.prototype, "headers", void 0);
    return GetGetAccessKeyInfoRequest;
}(utils_1.SpeakeasyBase));
exports.GetGetAccessKeyInfoRequest = GetGetAccessKeyInfoRequest;
var GetGetAccessKeyInfoResponse = /** @class */ (function (_super) {
    __extends(GetGetAccessKeyInfoResponse, _super);
    function GetGetAccessKeyInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetGetAccessKeyInfoResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGetAccessKeyInfoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGetAccessKeyInfoResponse.prototype, "statusCode", void 0);
    return GetGetAccessKeyInfoResponse;
}(utils_1.SpeakeasyBase));
exports.GetGetAccessKeyInfoResponse = GetGetAccessKeyInfoResponse;
