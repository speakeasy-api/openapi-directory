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
exports.GetDescribeConfigurationSettingsResponse = exports.GetDescribeConfigurationSettingsRequest = exports.GetDescribeConfigurationSettingsHeaders = exports.GetDescribeConfigurationSettingsQueryParams = exports.GetDescribeConfigurationSettingsVersionEnum = exports.GetDescribeConfigurationSettingsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeConfigurationSettingsActionEnum;
(function (GetDescribeConfigurationSettingsActionEnum) {
    GetDescribeConfigurationSettingsActionEnum["DescribeConfigurationSettings"] = "DescribeConfigurationSettings";
})(GetDescribeConfigurationSettingsActionEnum = exports.GetDescribeConfigurationSettingsActionEnum || (exports.GetDescribeConfigurationSettingsActionEnum = {}));
var GetDescribeConfigurationSettingsVersionEnum;
(function (GetDescribeConfigurationSettingsVersionEnum) {
    GetDescribeConfigurationSettingsVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDescribeConfigurationSettingsVersionEnum = exports.GetDescribeConfigurationSettingsVersionEnum || (exports.GetDescribeConfigurationSettingsVersionEnum = {}));
var GetDescribeConfigurationSettingsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeConfigurationSettingsQueryParams, _super);
    function GetDescribeConfigurationSettingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ApplicationName" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsQueryParams.prototype, "applicationName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EnvironmentName" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsQueryParams.prototype, "environmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TemplateName" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsQueryParams.prototype, "templateName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsQueryParams.prototype, "version", void 0);
    return GetDescribeConfigurationSettingsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeConfigurationSettingsQueryParams = GetDescribeConfigurationSettingsQueryParams;
var GetDescribeConfigurationSettingsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeConfigurationSettingsHeaders, _super);
    function GetDescribeConfigurationSettingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeConfigurationSettingsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeConfigurationSettingsHeaders = GetDescribeConfigurationSettingsHeaders;
var GetDescribeConfigurationSettingsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeConfigurationSettingsRequest, _super);
    function GetDescribeConfigurationSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeConfigurationSettingsQueryParams)
    ], GetDescribeConfigurationSettingsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeConfigurationSettingsHeaders)
    ], GetDescribeConfigurationSettingsRequest.prototype, "headers", void 0);
    return GetDescribeConfigurationSettingsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeConfigurationSettingsRequest = GetDescribeConfigurationSettingsRequest;
var GetDescribeConfigurationSettingsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeConfigurationSettingsResponse, _super);
    function GetDescribeConfigurationSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeConfigurationSettingsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeConfigurationSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeConfigurationSettingsResponse.prototype, "statusCode", void 0);
    return GetDescribeConfigurationSettingsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeConfigurationSettingsResponse = GetDescribeConfigurationSettingsResponse;
