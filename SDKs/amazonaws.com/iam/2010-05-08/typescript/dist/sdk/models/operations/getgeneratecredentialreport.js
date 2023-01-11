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
exports.GetGenerateCredentialReportResponse = exports.GetGenerateCredentialReportRequest = exports.GetGenerateCredentialReportHeaders = exports.GetGenerateCredentialReportQueryParams = exports.GetGenerateCredentialReportVersionEnum = exports.GetGenerateCredentialReportActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGenerateCredentialReportActionEnum;
(function (GetGenerateCredentialReportActionEnum) {
    GetGenerateCredentialReportActionEnum["GenerateCredentialReport"] = "GenerateCredentialReport";
})(GetGenerateCredentialReportActionEnum = exports.GetGenerateCredentialReportActionEnum || (exports.GetGenerateCredentialReportActionEnum = {}));
var GetGenerateCredentialReportVersionEnum;
(function (GetGenerateCredentialReportVersionEnum) {
    GetGenerateCredentialReportVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGenerateCredentialReportVersionEnum = exports.GetGenerateCredentialReportVersionEnum || (exports.GetGenerateCredentialReportVersionEnum = {}));
var GetGenerateCredentialReportQueryParams = /** @class */ (function (_super) {
    __extends(GetGenerateCredentialReportQueryParams, _super);
    function GetGenerateCredentialReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGenerateCredentialReportQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGenerateCredentialReportQueryParams.prototype, "version", void 0);
    return GetGenerateCredentialReportQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGenerateCredentialReportQueryParams = GetGenerateCredentialReportQueryParams;
var GetGenerateCredentialReportHeaders = /** @class */ (function (_super) {
    __extends(GetGenerateCredentialReportHeaders, _super);
    function GetGenerateCredentialReportHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGenerateCredentialReportHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGenerateCredentialReportHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGenerateCredentialReportHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGenerateCredentialReportHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGenerateCredentialReportHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGenerateCredentialReportHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGenerateCredentialReportHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGenerateCredentialReportHeaders;
}(utils_1.SpeakeasyBase));
exports.GetGenerateCredentialReportHeaders = GetGenerateCredentialReportHeaders;
var GetGenerateCredentialReportRequest = /** @class */ (function (_super) {
    __extends(GetGenerateCredentialReportRequest, _super);
    function GetGenerateCredentialReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGenerateCredentialReportQueryParams)
    ], GetGenerateCredentialReportRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGenerateCredentialReportHeaders)
    ], GetGenerateCredentialReportRequest.prototype, "headers", void 0);
    return GetGenerateCredentialReportRequest;
}(utils_1.SpeakeasyBase));
exports.GetGenerateCredentialReportRequest = GetGenerateCredentialReportRequest;
var GetGenerateCredentialReportResponse = /** @class */ (function (_super) {
    __extends(GetGenerateCredentialReportResponse, _super);
    function GetGenerateCredentialReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetGenerateCredentialReportResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGenerateCredentialReportResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGenerateCredentialReportResponse.prototype, "statusCode", void 0);
    return GetGenerateCredentialReportResponse;
}(utils_1.SpeakeasyBase));
exports.GetGenerateCredentialReportResponse = GetGenerateCredentialReportResponse;
