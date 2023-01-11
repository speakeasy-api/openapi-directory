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
exports.GetModifyAuthenticationProfileResponse = exports.GetModifyAuthenticationProfileRequest = exports.GetModifyAuthenticationProfileHeaders = exports.GetModifyAuthenticationProfileQueryParams = exports.GetModifyAuthenticationProfileVersionEnum = exports.GetModifyAuthenticationProfileActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetModifyAuthenticationProfileActionEnum;
(function (GetModifyAuthenticationProfileActionEnum) {
    GetModifyAuthenticationProfileActionEnum["ModifyAuthenticationProfile"] = "ModifyAuthenticationProfile";
})(GetModifyAuthenticationProfileActionEnum = exports.GetModifyAuthenticationProfileActionEnum || (exports.GetModifyAuthenticationProfileActionEnum = {}));
var GetModifyAuthenticationProfileVersionEnum;
(function (GetModifyAuthenticationProfileVersionEnum) {
    GetModifyAuthenticationProfileVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetModifyAuthenticationProfileVersionEnum = exports.GetModifyAuthenticationProfileVersionEnum || (exports.GetModifyAuthenticationProfileVersionEnum = {}));
var GetModifyAuthenticationProfileQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyAuthenticationProfileQueryParams, _super);
    function GetModifyAuthenticationProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileContent" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileQueryParams.prototype, "authenticationProfileContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AuthenticationProfileName" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileQueryParams.prototype, "authenticationProfileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileQueryParams.prototype, "version", void 0);
    return GetModifyAuthenticationProfileQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetModifyAuthenticationProfileQueryParams = GetModifyAuthenticationProfileQueryParams;
var GetModifyAuthenticationProfileHeaders = /** @class */ (function (_super) {
    __extends(GetModifyAuthenticationProfileHeaders, _super);
    function GetModifyAuthenticationProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyAuthenticationProfileHeaders;
}(utils_1.SpeakeasyBase));
exports.GetModifyAuthenticationProfileHeaders = GetModifyAuthenticationProfileHeaders;
var GetModifyAuthenticationProfileRequest = /** @class */ (function (_super) {
    __extends(GetModifyAuthenticationProfileRequest, _super);
    function GetModifyAuthenticationProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetModifyAuthenticationProfileQueryParams)
    ], GetModifyAuthenticationProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetModifyAuthenticationProfileHeaders)
    ], GetModifyAuthenticationProfileRequest.prototype, "headers", void 0);
    return GetModifyAuthenticationProfileRequest;
}(utils_1.SpeakeasyBase));
exports.GetModifyAuthenticationProfileRequest = GetModifyAuthenticationProfileRequest;
var GetModifyAuthenticationProfileResponse = /** @class */ (function (_super) {
    __extends(GetModifyAuthenticationProfileResponse, _super);
    function GetModifyAuthenticationProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetModifyAuthenticationProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetModifyAuthenticationProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetModifyAuthenticationProfileResponse.prototype, "statusCode", void 0);
    return GetModifyAuthenticationProfileResponse;
}(utils_1.SpeakeasyBase));
exports.GetModifyAuthenticationProfileResponse = GetModifyAuthenticationProfileResponse;
