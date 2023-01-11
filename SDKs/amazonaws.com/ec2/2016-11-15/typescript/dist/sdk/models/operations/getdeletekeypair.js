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
exports.GetDeleteKeyPairResponse = exports.GetDeleteKeyPairRequest = exports.GetDeleteKeyPairHeaders = exports.GetDeleteKeyPairQueryParams = exports.GetDeleteKeyPairVersionEnum = exports.GetDeleteKeyPairActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteKeyPairActionEnum;
(function (GetDeleteKeyPairActionEnum) {
    GetDeleteKeyPairActionEnum["DeleteKeyPair"] = "DeleteKeyPair";
})(GetDeleteKeyPairActionEnum = exports.GetDeleteKeyPairActionEnum || (exports.GetDeleteKeyPairActionEnum = {}));
var GetDeleteKeyPairVersionEnum;
(function (GetDeleteKeyPairVersionEnum) {
    GetDeleteKeyPairVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteKeyPairVersionEnum = exports.GetDeleteKeyPairVersionEnum || (exports.GetDeleteKeyPairVersionEnum = {}));
var GetDeleteKeyPairQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteKeyPairQueryParams, _super);
    function GetDeleteKeyPairQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteKeyPairQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=KeyName" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairQueryParams.prototype, "keyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=KeyPairId" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairQueryParams.prototype, "keyPairId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairQueryParams.prototype, "version", void 0);
    return GetDeleteKeyPairQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteKeyPairQueryParams = GetDeleteKeyPairQueryParams;
var GetDeleteKeyPairHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteKeyPairHeaders, _super);
    function GetDeleteKeyPairHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteKeyPairHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteKeyPairHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteKeyPairHeaders = GetDeleteKeyPairHeaders;
var GetDeleteKeyPairRequest = /** @class */ (function (_super) {
    __extends(GetDeleteKeyPairRequest, _super);
    function GetDeleteKeyPairRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteKeyPairQueryParams)
    ], GetDeleteKeyPairRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteKeyPairHeaders)
    ], GetDeleteKeyPairRequest.prototype, "headers", void 0);
    return GetDeleteKeyPairRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteKeyPairRequest = GetDeleteKeyPairRequest;
var GetDeleteKeyPairResponse = /** @class */ (function (_super) {
    __extends(GetDeleteKeyPairResponse, _super);
    function GetDeleteKeyPairResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteKeyPairResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteKeyPairResponse.prototype, "statusCode", void 0);
    return GetDeleteKeyPairResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteKeyPairResponse = GetDeleteKeyPairResponse;
