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
exports.GetDeleteInstanceProfileResponse = exports.GetDeleteInstanceProfileRequest = exports.GetDeleteInstanceProfileHeaders = exports.GetDeleteInstanceProfileQueryParams = exports.GetDeleteInstanceProfileVersionEnum = exports.GetDeleteInstanceProfileActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteInstanceProfileActionEnum;
(function (GetDeleteInstanceProfileActionEnum) {
    GetDeleteInstanceProfileActionEnum["DeleteInstanceProfile"] = "DeleteInstanceProfile";
})(GetDeleteInstanceProfileActionEnum = exports.GetDeleteInstanceProfileActionEnum || (exports.GetDeleteInstanceProfileActionEnum = {}));
var GetDeleteInstanceProfileVersionEnum;
(function (GetDeleteInstanceProfileVersionEnum) {
    GetDeleteInstanceProfileVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeleteInstanceProfileVersionEnum = exports.GetDeleteInstanceProfileVersionEnum || (exports.GetDeleteInstanceProfileVersionEnum = {}));
var GetDeleteInstanceProfileQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteInstanceProfileQueryParams, _super);
    function GetDeleteInstanceProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InstanceProfileName" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileQueryParams.prototype, "instanceProfileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileQueryParams.prototype, "version", void 0);
    return GetDeleteInstanceProfileQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteInstanceProfileQueryParams = GetDeleteInstanceProfileQueryParams;
var GetDeleteInstanceProfileHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteInstanceProfileHeaders, _super);
    function GetDeleteInstanceProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteInstanceProfileHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteInstanceProfileHeaders = GetDeleteInstanceProfileHeaders;
var GetDeleteInstanceProfileRequest = /** @class */ (function (_super) {
    __extends(GetDeleteInstanceProfileRequest, _super);
    function GetDeleteInstanceProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteInstanceProfileQueryParams)
    ], GetDeleteInstanceProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteInstanceProfileHeaders)
    ], GetDeleteInstanceProfileRequest.prototype, "headers", void 0);
    return GetDeleteInstanceProfileRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteInstanceProfileRequest = GetDeleteInstanceProfileRequest;
var GetDeleteInstanceProfileResponse = /** @class */ (function (_super) {
    __extends(GetDeleteInstanceProfileResponse, _super);
    function GetDeleteInstanceProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteInstanceProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteInstanceProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteInstanceProfileResponse.prototype, "statusCode", void 0);
    return GetDeleteInstanceProfileResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteInstanceProfileResponse = GetDeleteInstanceProfileResponse;
