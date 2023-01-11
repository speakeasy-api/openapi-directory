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
exports.GetResetFpgaImageAttributeResponse = exports.GetResetFpgaImageAttributeRequest = exports.GetResetFpgaImageAttributeHeaders = exports.GetResetFpgaImageAttributeQueryParams = exports.GetResetFpgaImageAttributeVersionEnum = exports.GetResetFpgaImageAttributeAttributeEnum = exports.GetResetFpgaImageAttributeActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetResetFpgaImageAttributeActionEnum;
(function (GetResetFpgaImageAttributeActionEnum) {
    GetResetFpgaImageAttributeActionEnum["ResetFpgaImageAttribute"] = "ResetFpgaImageAttribute";
})(GetResetFpgaImageAttributeActionEnum = exports.GetResetFpgaImageAttributeActionEnum || (exports.GetResetFpgaImageAttributeActionEnum = {}));
var GetResetFpgaImageAttributeAttributeEnum;
(function (GetResetFpgaImageAttributeAttributeEnum) {
    GetResetFpgaImageAttributeAttributeEnum["LoadPermission"] = "loadPermission";
})(GetResetFpgaImageAttributeAttributeEnum = exports.GetResetFpgaImageAttributeAttributeEnum || (exports.GetResetFpgaImageAttributeAttributeEnum = {}));
var GetResetFpgaImageAttributeVersionEnum;
(function (GetResetFpgaImageAttributeVersionEnum) {
    GetResetFpgaImageAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetResetFpgaImageAttributeVersionEnum = exports.GetResetFpgaImageAttributeVersionEnum || (exports.GetResetFpgaImageAttributeVersionEnum = {}));
var GetResetFpgaImageAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetResetFpgaImageAttributeQueryParams, _super);
    function GetResetFpgaImageAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeQueryParams.prototype, "attribute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetResetFpgaImageAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=FpgaImageId" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeQueryParams.prototype, "fpgaImageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeQueryParams.prototype, "version", void 0);
    return GetResetFpgaImageAttributeQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetResetFpgaImageAttributeQueryParams = GetResetFpgaImageAttributeQueryParams;
var GetResetFpgaImageAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetResetFpgaImageAttributeHeaders, _super);
    function GetResetFpgaImageAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResetFpgaImageAttributeHeaders;
}(utils_1.SpeakeasyBase));
exports.GetResetFpgaImageAttributeHeaders = GetResetFpgaImageAttributeHeaders;
var GetResetFpgaImageAttributeRequest = /** @class */ (function (_super) {
    __extends(GetResetFpgaImageAttributeRequest, _super);
    function GetResetFpgaImageAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResetFpgaImageAttributeQueryParams)
    ], GetResetFpgaImageAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResetFpgaImageAttributeHeaders)
    ], GetResetFpgaImageAttributeRequest.prototype, "headers", void 0);
    return GetResetFpgaImageAttributeRequest;
}(utils_1.SpeakeasyBase));
exports.GetResetFpgaImageAttributeRequest = GetResetFpgaImageAttributeRequest;
var GetResetFpgaImageAttributeResponse = /** @class */ (function (_super) {
    __extends(GetResetFpgaImageAttributeResponse, _super);
    function GetResetFpgaImageAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetResetFpgaImageAttributeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetResetFpgaImageAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetResetFpgaImageAttributeResponse.prototype, "statusCode", void 0);
    return GetResetFpgaImageAttributeResponse;
}(utils_1.SpeakeasyBase));
exports.GetResetFpgaImageAttributeResponse = GetResetFpgaImageAttributeResponse;
