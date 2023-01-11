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
exports.GetResetImageAttributeResponse = exports.GetResetImageAttributeRequest = exports.GetResetImageAttributeHeaders = exports.GetResetImageAttributeQueryParams = exports.GetResetImageAttributeVersionEnum = exports.GetResetImageAttributeAttributeEnum = exports.GetResetImageAttributeActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetResetImageAttributeActionEnum;
(function (GetResetImageAttributeActionEnum) {
    GetResetImageAttributeActionEnum["ResetImageAttribute"] = "ResetImageAttribute";
})(GetResetImageAttributeActionEnum = exports.GetResetImageAttributeActionEnum || (exports.GetResetImageAttributeActionEnum = {}));
var GetResetImageAttributeAttributeEnum;
(function (GetResetImageAttributeAttributeEnum) {
    GetResetImageAttributeAttributeEnum["LaunchPermission"] = "launchPermission";
})(GetResetImageAttributeAttributeEnum = exports.GetResetImageAttributeAttributeEnum || (exports.GetResetImageAttributeAttributeEnum = {}));
var GetResetImageAttributeVersionEnum;
(function (GetResetImageAttributeVersionEnum) {
    GetResetImageAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetResetImageAttributeVersionEnum = exports.GetResetImageAttributeVersionEnum || (exports.GetResetImageAttributeVersionEnum = {}));
var GetResetImageAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetResetImageAttributeQueryParams, _super);
    function GetResetImageAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeQueryParams.prototype, "attribute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetResetImageAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ImageId" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeQueryParams.prototype, "imageId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeQueryParams.prototype, "version", void 0);
    return GetResetImageAttributeQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetResetImageAttributeQueryParams = GetResetImageAttributeQueryParams;
var GetResetImageAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetResetImageAttributeHeaders, _super);
    function GetResetImageAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResetImageAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResetImageAttributeHeaders;
}(utils_1.SpeakeasyBase));
exports.GetResetImageAttributeHeaders = GetResetImageAttributeHeaders;
var GetResetImageAttributeRequest = /** @class */ (function (_super) {
    __extends(GetResetImageAttributeRequest, _super);
    function GetResetImageAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResetImageAttributeQueryParams)
    ], GetResetImageAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResetImageAttributeHeaders)
    ], GetResetImageAttributeRequest.prototype, "headers", void 0);
    return GetResetImageAttributeRequest;
}(utils_1.SpeakeasyBase));
exports.GetResetImageAttributeRequest = GetResetImageAttributeRequest;
var GetResetImageAttributeResponse = /** @class */ (function (_super) {
    __extends(GetResetImageAttributeResponse, _super);
    function GetResetImageAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetResetImageAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetResetImageAttributeResponse.prototype, "statusCode", void 0);
    return GetResetImageAttributeResponse;
}(utils_1.SpeakeasyBase));
exports.GetResetImageAttributeResponse = GetResetImageAttributeResponse;
