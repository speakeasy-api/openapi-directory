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
exports.GetModifyVpnTunnelCertificateResponse = exports.GetModifyVpnTunnelCertificateRequest = exports.GetModifyVpnTunnelCertificateHeaders = exports.GetModifyVpnTunnelCertificateQueryParams = exports.GetModifyVpnTunnelCertificateVersionEnum = exports.GetModifyVpnTunnelCertificateActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetModifyVpnTunnelCertificateActionEnum;
(function (GetModifyVpnTunnelCertificateActionEnum) {
    GetModifyVpnTunnelCertificateActionEnum["ModifyVpnTunnelCertificate"] = "ModifyVpnTunnelCertificate";
})(GetModifyVpnTunnelCertificateActionEnum = exports.GetModifyVpnTunnelCertificateActionEnum || (exports.GetModifyVpnTunnelCertificateActionEnum = {}));
var GetModifyVpnTunnelCertificateVersionEnum;
(function (GetModifyVpnTunnelCertificateVersionEnum) {
    GetModifyVpnTunnelCertificateVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetModifyVpnTunnelCertificateVersionEnum = exports.GetModifyVpnTunnelCertificateVersionEnum || (exports.GetModifyVpnTunnelCertificateVersionEnum = {}));
var GetModifyVpnTunnelCertificateQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyVpnTunnelCertificateQueryParams, _super);
    function GetModifyVpnTunnelCertificateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetModifyVpnTunnelCertificateQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateQueryParams.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=VpnConnectionId" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateQueryParams.prototype, "vpnConnectionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=VpnTunnelOutsideIpAddress" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateQueryParams.prototype, "vpnTunnelOutsideIpAddress", void 0);
    return GetModifyVpnTunnelCertificateQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetModifyVpnTunnelCertificateQueryParams = GetModifyVpnTunnelCertificateQueryParams;
var GetModifyVpnTunnelCertificateHeaders = /** @class */ (function (_super) {
    __extends(GetModifyVpnTunnelCertificateHeaders, _super);
    function GetModifyVpnTunnelCertificateHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyVpnTunnelCertificateHeaders;
}(utils_1.SpeakeasyBase));
exports.GetModifyVpnTunnelCertificateHeaders = GetModifyVpnTunnelCertificateHeaders;
var GetModifyVpnTunnelCertificateRequest = /** @class */ (function (_super) {
    __extends(GetModifyVpnTunnelCertificateRequest, _super);
    function GetModifyVpnTunnelCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetModifyVpnTunnelCertificateQueryParams)
    ], GetModifyVpnTunnelCertificateRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetModifyVpnTunnelCertificateHeaders)
    ], GetModifyVpnTunnelCertificateRequest.prototype, "headers", void 0);
    return GetModifyVpnTunnelCertificateRequest;
}(utils_1.SpeakeasyBase));
exports.GetModifyVpnTunnelCertificateRequest = GetModifyVpnTunnelCertificateRequest;
var GetModifyVpnTunnelCertificateResponse = /** @class */ (function (_super) {
    __extends(GetModifyVpnTunnelCertificateResponse, _super);
    function GetModifyVpnTunnelCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetModifyVpnTunnelCertificateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetModifyVpnTunnelCertificateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetModifyVpnTunnelCertificateResponse.prototype, "statusCode", void 0);
    return GetModifyVpnTunnelCertificateResponse;
}(utils_1.SpeakeasyBase));
exports.GetModifyVpnTunnelCertificateResponse = GetModifyVpnTunnelCertificateResponse;
