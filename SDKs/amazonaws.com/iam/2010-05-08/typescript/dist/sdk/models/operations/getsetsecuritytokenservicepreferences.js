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
exports.GetSetSecurityTokenServicePreferencesResponse = exports.GetSetSecurityTokenServicePreferencesRequest = exports.GetSetSecurityTokenServicePreferencesHeaders = exports.GetSetSecurityTokenServicePreferencesQueryParams = exports.GetSetSecurityTokenServicePreferencesVersionEnum = exports.GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum = exports.GetSetSecurityTokenServicePreferencesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetSetSecurityTokenServicePreferencesActionEnum;
(function (GetSetSecurityTokenServicePreferencesActionEnum) {
    GetSetSecurityTokenServicePreferencesActionEnum["SetSecurityTokenServicePreferences"] = "SetSecurityTokenServicePreferences";
})(GetSetSecurityTokenServicePreferencesActionEnum = exports.GetSetSecurityTokenServicePreferencesActionEnum || (exports.GetSetSecurityTokenServicePreferencesActionEnum = {}));
var GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum;
(function (GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum) {
    GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum["V1Token"] = "v1Token";
    GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum["V2Token"] = "v2Token";
})(GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum = exports.GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum || (exports.GetSetSecurityTokenServicePreferencesGlobalEndpointTokenVersionEnum = {}));
var GetSetSecurityTokenServicePreferencesVersionEnum;
(function (GetSetSecurityTokenServicePreferencesVersionEnum) {
    GetSetSecurityTokenServicePreferencesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetSetSecurityTokenServicePreferencesVersionEnum = exports.GetSetSecurityTokenServicePreferencesVersionEnum || (exports.GetSetSecurityTokenServicePreferencesVersionEnum = {}));
var GetSetSecurityTokenServicePreferencesQueryParams = /** @class */ (function (_super) {
    __extends(GetSetSecurityTokenServicePreferencesQueryParams, _super);
    function GetSetSecurityTokenServicePreferencesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=GlobalEndpointTokenVersion" }),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesQueryParams.prototype, "globalEndpointTokenVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesQueryParams.prototype, "version", void 0);
    return GetSetSecurityTokenServicePreferencesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSetSecurityTokenServicePreferencesQueryParams = GetSetSecurityTokenServicePreferencesQueryParams;
var GetSetSecurityTokenServicePreferencesHeaders = /** @class */ (function (_super) {
    __extends(GetSetSecurityTokenServicePreferencesHeaders, _super);
    function GetSetSecurityTokenServicePreferencesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetSetSecurityTokenServicePreferencesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetSetSecurityTokenServicePreferencesHeaders = GetSetSecurityTokenServicePreferencesHeaders;
var GetSetSecurityTokenServicePreferencesRequest = /** @class */ (function (_super) {
    __extends(GetSetSecurityTokenServicePreferencesRequest, _super);
    function GetSetSecurityTokenServicePreferencesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSetSecurityTokenServicePreferencesQueryParams)
    ], GetSetSecurityTokenServicePreferencesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSetSecurityTokenServicePreferencesHeaders)
    ], GetSetSecurityTokenServicePreferencesRequest.prototype, "headers", void 0);
    return GetSetSecurityTokenServicePreferencesRequest;
}(utils_1.SpeakeasyBase));
exports.GetSetSecurityTokenServicePreferencesRequest = GetSetSecurityTokenServicePreferencesRequest;
var GetSetSecurityTokenServicePreferencesResponse = /** @class */ (function (_super) {
    __extends(GetSetSecurityTokenServicePreferencesResponse, _super);
    function GetSetSecurityTokenServicePreferencesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetSetSecurityTokenServicePreferencesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSetSecurityTokenServicePreferencesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSetSecurityTokenServicePreferencesResponse.prototype, "statusCode", void 0);
    return GetSetSecurityTokenServicePreferencesResponse;
}(utils_1.SpeakeasyBase));
exports.GetSetSecurityTokenServicePreferencesResponse = GetSetSecurityTokenServicePreferencesResponse;
