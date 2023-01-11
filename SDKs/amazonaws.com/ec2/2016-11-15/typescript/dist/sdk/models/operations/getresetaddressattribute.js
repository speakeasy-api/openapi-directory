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
exports.GetResetAddressAttributeResponse = exports.GetResetAddressAttributeRequest = exports.GetResetAddressAttributeHeaders = exports.GetResetAddressAttributeQueryParams = exports.GetResetAddressAttributeVersionEnum = exports.GetResetAddressAttributeAttributeEnum = exports.GetResetAddressAttributeActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetResetAddressAttributeActionEnum;
(function (GetResetAddressAttributeActionEnum) {
    GetResetAddressAttributeActionEnum["ResetAddressAttribute"] = "ResetAddressAttribute";
})(GetResetAddressAttributeActionEnum = exports.GetResetAddressAttributeActionEnum || (exports.GetResetAddressAttributeActionEnum = {}));
var GetResetAddressAttributeAttributeEnum;
(function (GetResetAddressAttributeAttributeEnum) {
    GetResetAddressAttributeAttributeEnum["DomainName"] = "domain-name";
})(GetResetAddressAttributeAttributeEnum = exports.GetResetAddressAttributeAttributeEnum || (exports.GetResetAddressAttributeAttributeEnum = {}));
var GetResetAddressAttributeVersionEnum;
(function (GetResetAddressAttributeVersionEnum) {
    GetResetAddressAttributeVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetResetAddressAttributeVersionEnum = exports.GetResetAddressAttributeVersionEnum || (exports.GetResetAddressAttributeVersionEnum = {}));
var GetResetAddressAttributeQueryParams = /** @class */ (function (_super) {
    __extends(GetResetAddressAttributeQueryParams, _super);
    function GetResetAddressAttributeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AllocationId" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeQueryParams.prototype, "allocationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Attribute" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeQueryParams.prototype, "attribute", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetResetAddressAttributeQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeQueryParams.prototype, "version", void 0);
    return GetResetAddressAttributeQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetResetAddressAttributeQueryParams = GetResetAddressAttributeQueryParams;
var GetResetAddressAttributeHeaders = /** @class */ (function (_super) {
    __extends(GetResetAddressAttributeHeaders, _super);
    function GetResetAddressAttributeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResetAddressAttributeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResetAddressAttributeHeaders;
}(utils_1.SpeakeasyBase));
exports.GetResetAddressAttributeHeaders = GetResetAddressAttributeHeaders;
var GetResetAddressAttributeRequest = /** @class */ (function (_super) {
    __extends(GetResetAddressAttributeRequest, _super);
    function GetResetAddressAttributeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResetAddressAttributeQueryParams)
    ], GetResetAddressAttributeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResetAddressAttributeHeaders)
    ], GetResetAddressAttributeRequest.prototype, "headers", void 0);
    return GetResetAddressAttributeRequest;
}(utils_1.SpeakeasyBase));
exports.GetResetAddressAttributeRequest = GetResetAddressAttributeRequest;
var GetResetAddressAttributeResponse = /** @class */ (function (_super) {
    __extends(GetResetAddressAttributeResponse, _super);
    function GetResetAddressAttributeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetResetAddressAttributeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetResetAddressAttributeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetResetAddressAttributeResponse.prototype, "statusCode", void 0);
    return GetResetAddressAttributeResponse;
}(utils_1.SpeakeasyBase));
exports.GetResetAddressAttributeResponse = GetResetAddressAttributeResponse;
