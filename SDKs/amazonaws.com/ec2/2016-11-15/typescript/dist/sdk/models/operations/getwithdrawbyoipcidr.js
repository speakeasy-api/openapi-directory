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
exports.GetWithdrawByoipCidrResponse = exports.GetWithdrawByoipCidrRequest = exports.GetWithdrawByoipCidrHeaders = exports.GetWithdrawByoipCidrQueryParams = exports.GetWithdrawByoipCidrVersionEnum = exports.GetWithdrawByoipCidrActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetWithdrawByoipCidrActionEnum;
(function (GetWithdrawByoipCidrActionEnum) {
    GetWithdrawByoipCidrActionEnum["WithdrawByoipCidr"] = "WithdrawByoipCidr";
})(GetWithdrawByoipCidrActionEnum = exports.GetWithdrawByoipCidrActionEnum || (exports.GetWithdrawByoipCidrActionEnum = {}));
var GetWithdrawByoipCidrVersionEnum;
(function (GetWithdrawByoipCidrVersionEnum) {
    GetWithdrawByoipCidrVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetWithdrawByoipCidrVersionEnum = exports.GetWithdrawByoipCidrVersionEnum || (exports.GetWithdrawByoipCidrVersionEnum = {}));
var GetWithdrawByoipCidrQueryParams = /** @class */ (function (_super) {
    __extends(GetWithdrawByoipCidrQueryParams, _super);
    function GetWithdrawByoipCidrQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Cidr" }),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrQueryParams.prototype, "cidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetWithdrawByoipCidrQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrQueryParams.prototype, "version", void 0);
    return GetWithdrawByoipCidrQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetWithdrawByoipCidrQueryParams = GetWithdrawByoipCidrQueryParams;
var GetWithdrawByoipCidrHeaders = /** @class */ (function (_super) {
    __extends(GetWithdrawByoipCidrHeaders, _super);
    function GetWithdrawByoipCidrHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetWithdrawByoipCidrHeaders;
}(utils_1.SpeakeasyBase));
exports.GetWithdrawByoipCidrHeaders = GetWithdrawByoipCidrHeaders;
var GetWithdrawByoipCidrRequest = /** @class */ (function (_super) {
    __extends(GetWithdrawByoipCidrRequest, _super);
    function GetWithdrawByoipCidrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetWithdrawByoipCidrQueryParams)
    ], GetWithdrawByoipCidrRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetWithdrawByoipCidrHeaders)
    ], GetWithdrawByoipCidrRequest.prototype, "headers", void 0);
    return GetWithdrawByoipCidrRequest;
}(utils_1.SpeakeasyBase));
exports.GetWithdrawByoipCidrRequest = GetWithdrawByoipCidrRequest;
var GetWithdrawByoipCidrResponse = /** @class */ (function (_super) {
    __extends(GetWithdrawByoipCidrResponse, _super);
    function GetWithdrawByoipCidrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetWithdrawByoipCidrResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetWithdrawByoipCidrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetWithdrawByoipCidrResponse.prototype, "statusCode", void 0);
    return GetWithdrawByoipCidrResponse;
}(utils_1.SpeakeasyBase));
exports.GetWithdrawByoipCidrResponse = GetWithdrawByoipCidrResponse;
