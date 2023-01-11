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
exports.GetDeletePlatformVersionResponse = exports.GetDeletePlatformVersionRequest = exports.GetDeletePlatformVersionHeaders = exports.GetDeletePlatformVersionQueryParams = exports.GetDeletePlatformVersionVersionEnum = exports.GetDeletePlatformVersionActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeletePlatformVersionActionEnum;
(function (GetDeletePlatformVersionActionEnum) {
    GetDeletePlatformVersionActionEnum["DeletePlatformVersion"] = "DeletePlatformVersion";
})(GetDeletePlatformVersionActionEnum = exports.GetDeletePlatformVersionActionEnum || (exports.GetDeletePlatformVersionActionEnum = {}));
var GetDeletePlatformVersionVersionEnum;
(function (GetDeletePlatformVersionVersionEnum) {
    GetDeletePlatformVersionVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDeletePlatformVersionVersionEnum = exports.GetDeletePlatformVersionVersionEnum || (exports.GetDeletePlatformVersionVersionEnum = {}));
var GetDeletePlatformVersionQueryParams = /** @class */ (function (_super) {
    __extends(GetDeletePlatformVersionQueryParams, _super);
    function GetDeletePlatformVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PlatformArn" }),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionQueryParams.prototype, "platformArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionQueryParams.prototype, "version", void 0);
    return GetDeletePlatformVersionQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeletePlatformVersionQueryParams = GetDeletePlatformVersionQueryParams;
var GetDeletePlatformVersionHeaders = /** @class */ (function (_super) {
    __extends(GetDeletePlatformVersionHeaders, _super);
    function GetDeletePlatformVersionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeletePlatformVersionHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeletePlatformVersionHeaders = GetDeletePlatformVersionHeaders;
var GetDeletePlatformVersionRequest = /** @class */ (function (_super) {
    __extends(GetDeletePlatformVersionRequest, _super);
    function GetDeletePlatformVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeletePlatformVersionQueryParams)
    ], GetDeletePlatformVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeletePlatformVersionHeaders)
    ], GetDeletePlatformVersionRequest.prototype, "headers", void 0);
    return GetDeletePlatformVersionRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeletePlatformVersionRequest = GetDeletePlatformVersionRequest;
var GetDeletePlatformVersionResponse = /** @class */ (function (_super) {
    __extends(GetDeletePlatformVersionResponse, _super);
    function GetDeletePlatformVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeletePlatformVersionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeletePlatformVersionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeletePlatformVersionResponse.prototype, "statusCode", void 0);
    return GetDeletePlatformVersionResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeletePlatformVersionResponse = GetDeletePlatformVersionResponse;
