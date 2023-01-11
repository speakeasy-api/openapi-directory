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
exports.GetUntagInstanceProfileResponse = exports.GetUntagInstanceProfileRequest = exports.GetUntagInstanceProfileHeaders = exports.GetUntagInstanceProfileQueryParams = exports.GetUntagInstanceProfileVersionEnum = exports.GetUntagInstanceProfileActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetUntagInstanceProfileActionEnum;
(function (GetUntagInstanceProfileActionEnum) {
    GetUntagInstanceProfileActionEnum["UntagInstanceProfile"] = "UntagInstanceProfile";
})(GetUntagInstanceProfileActionEnum = exports.GetUntagInstanceProfileActionEnum || (exports.GetUntagInstanceProfileActionEnum = {}));
var GetUntagInstanceProfileVersionEnum;
(function (GetUntagInstanceProfileVersionEnum) {
    GetUntagInstanceProfileVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetUntagInstanceProfileVersionEnum = exports.GetUntagInstanceProfileVersionEnum || (exports.GetUntagInstanceProfileVersionEnum = {}));
var GetUntagInstanceProfileQueryParams = /** @class */ (function (_super) {
    __extends(GetUntagInstanceProfileQueryParams, _super);
    function GetUntagInstanceProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InstanceProfileName" }),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileQueryParams.prototype, "instanceProfileName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TagKeys" }),
        __metadata("design:type", Array)
    ], GetUntagInstanceProfileQueryParams.prototype, "tagKeys", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileQueryParams.prototype, "version", void 0);
    return GetUntagInstanceProfileQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUntagInstanceProfileQueryParams = GetUntagInstanceProfileQueryParams;
var GetUntagInstanceProfileHeaders = /** @class */ (function (_super) {
    __extends(GetUntagInstanceProfileHeaders, _super);
    function GetUntagInstanceProfileHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUntagInstanceProfileHeaders;
}(utils_1.SpeakeasyBase));
exports.GetUntagInstanceProfileHeaders = GetUntagInstanceProfileHeaders;
var GetUntagInstanceProfileRequest = /** @class */ (function (_super) {
    __extends(GetUntagInstanceProfileRequest, _super);
    function GetUntagInstanceProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUntagInstanceProfileQueryParams)
    ], GetUntagInstanceProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUntagInstanceProfileHeaders)
    ], GetUntagInstanceProfileRequest.prototype, "headers", void 0);
    return GetUntagInstanceProfileRequest;
}(utils_1.SpeakeasyBase));
exports.GetUntagInstanceProfileRequest = GetUntagInstanceProfileRequest;
var GetUntagInstanceProfileResponse = /** @class */ (function (_super) {
    __extends(GetUntagInstanceProfileResponse, _super);
    function GetUntagInstanceProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUntagInstanceProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUntagInstanceProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUntagInstanceProfileResponse.prototype, "statusCode", void 0);
    return GetUntagInstanceProfileResponse;
}(utils_1.SpeakeasyBase));
exports.GetUntagInstanceProfileResponse = GetUntagInstanceProfileResponse;
