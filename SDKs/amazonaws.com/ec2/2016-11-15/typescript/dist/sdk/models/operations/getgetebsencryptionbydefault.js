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
exports.GetGetEbsEncryptionByDefaultResponse = exports.GetGetEbsEncryptionByDefaultRequest = exports.GetGetEbsEncryptionByDefaultHeaders = exports.GetGetEbsEncryptionByDefaultQueryParams = exports.GetGetEbsEncryptionByDefaultVersionEnum = exports.GetGetEbsEncryptionByDefaultActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGetEbsEncryptionByDefaultActionEnum;
(function (GetGetEbsEncryptionByDefaultActionEnum) {
    GetGetEbsEncryptionByDefaultActionEnum["GetEbsEncryptionByDefault"] = "GetEbsEncryptionByDefault";
})(GetGetEbsEncryptionByDefaultActionEnum = exports.GetGetEbsEncryptionByDefaultActionEnum || (exports.GetGetEbsEncryptionByDefaultActionEnum = {}));
var GetGetEbsEncryptionByDefaultVersionEnum;
(function (GetGetEbsEncryptionByDefaultVersionEnum) {
    GetGetEbsEncryptionByDefaultVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetGetEbsEncryptionByDefaultVersionEnum = exports.GetGetEbsEncryptionByDefaultVersionEnum || (exports.GetGetEbsEncryptionByDefaultVersionEnum = {}));
var GetGetEbsEncryptionByDefaultQueryParams = /** @class */ (function (_super) {
    __extends(GetGetEbsEncryptionByDefaultQueryParams, _super);
    function GetGetEbsEncryptionByDefaultQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetEbsEncryptionByDefaultQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetGetEbsEncryptionByDefaultQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetEbsEncryptionByDefaultQueryParams.prototype, "version", void 0);
    return GetGetEbsEncryptionByDefaultQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGetEbsEncryptionByDefaultQueryParams = GetGetEbsEncryptionByDefaultQueryParams;
var GetGetEbsEncryptionByDefaultHeaders = /** @class */ (function (_super) {
    __extends(GetGetEbsEncryptionByDefaultHeaders, _super);
    function GetGetEbsEncryptionByDefaultHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetEbsEncryptionByDefaultHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetEbsEncryptionByDefaultHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetEbsEncryptionByDefaultHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetEbsEncryptionByDefaultHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetEbsEncryptionByDefaultHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetEbsEncryptionByDefaultHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetEbsEncryptionByDefaultHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetEbsEncryptionByDefaultHeaders;
}(utils_1.SpeakeasyBase));
exports.GetGetEbsEncryptionByDefaultHeaders = GetGetEbsEncryptionByDefaultHeaders;
var GetGetEbsEncryptionByDefaultRequest = /** @class */ (function (_super) {
    __extends(GetGetEbsEncryptionByDefaultRequest, _super);
    function GetGetEbsEncryptionByDefaultRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetEbsEncryptionByDefaultQueryParams)
    ], GetGetEbsEncryptionByDefaultRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetEbsEncryptionByDefaultHeaders)
    ], GetGetEbsEncryptionByDefaultRequest.prototype, "headers", void 0);
    return GetGetEbsEncryptionByDefaultRequest;
}(utils_1.SpeakeasyBase));
exports.GetGetEbsEncryptionByDefaultRequest = GetGetEbsEncryptionByDefaultRequest;
var GetGetEbsEncryptionByDefaultResponse = /** @class */ (function (_super) {
    __extends(GetGetEbsEncryptionByDefaultResponse, _super);
    function GetGetEbsEncryptionByDefaultResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetGetEbsEncryptionByDefaultResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGetEbsEncryptionByDefaultResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGetEbsEncryptionByDefaultResponse.prototype, "statusCode", void 0);
    return GetGetEbsEncryptionByDefaultResponse;
}(utils_1.SpeakeasyBase));
exports.GetGetEbsEncryptionByDefaultResponse = GetGetEbsEncryptionByDefaultResponse;
