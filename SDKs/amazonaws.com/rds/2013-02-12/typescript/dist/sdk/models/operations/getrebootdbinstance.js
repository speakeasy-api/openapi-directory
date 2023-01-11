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
exports.GetRebootDbInstanceResponse = exports.GetRebootDbInstanceRequest = exports.GetRebootDbInstanceHeaders = exports.GetRebootDbInstanceQueryParams = exports.GetRebootDbInstanceVersionEnum = exports.GetRebootDbInstanceActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetRebootDbInstanceActionEnum;
(function (GetRebootDbInstanceActionEnum) {
    GetRebootDbInstanceActionEnum["RebootDbInstance"] = "RebootDBInstance";
})(GetRebootDbInstanceActionEnum = exports.GetRebootDbInstanceActionEnum || (exports.GetRebootDbInstanceActionEnum = {}));
var GetRebootDbInstanceVersionEnum;
(function (GetRebootDbInstanceVersionEnum) {
    GetRebootDbInstanceVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetRebootDbInstanceVersionEnum = exports.GetRebootDbInstanceVersionEnum || (exports.GetRebootDbInstanceVersionEnum = {}));
var GetRebootDbInstanceQueryParams = /** @class */ (function (_super) {
    __extends(GetRebootDbInstanceQueryParams, _super);
    function GetRebootDbInstanceQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRebootDbInstanceQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetRebootDbInstanceQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ForceFailover" }),
        __metadata("design:type", Boolean)
    ], GetRebootDbInstanceQueryParams.prototype, "forceFailover", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRebootDbInstanceQueryParams.prototype, "version", void 0);
    return GetRebootDbInstanceQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRebootDbInstanceQueryParams = GetRebootDbInstanceQueryParams;
var GetRebootDbInstanceHeaders = /** @class */ (function (_super) {
    __extends(GetRebootDbInstanceHeaders, _super);
    function GetRebootDbInstanceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRebootDbInstanceHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRebootDbInstanceHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRebootDbInstanceHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRebootDbInstanceHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRebootDbInstanceHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRebootDbInstanceHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRebootDbInstanceHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRebootDbInstanceHeaders;
}(utils_1.SpeakeasyBase));
exports.GetRebootDbInstanceHeaders = GetRebootDbInstanceHeaders;
var GetRebootDbInstanceRequest = /** @class */ (function (_super) {
    __extends(GetRebootDbInstanceRequest, _super);
    function GetRebootDbInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRebootDbInstanceQueryParams)
    ], GetRebootDbInstanceRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRebootDbInstanceHeaders)
    ], GetRebootDbInstanceRequest.prototype, "headers", void 0);
    return GetRebootDbInstanceRequest;
}(utils_1.SpeakeasyBase));
exports.GetRebootDbInstanceRequest = GetRebootDbInstanceRequest;
var GetRebootDbInstanceResponse = /** @class */ (function (_super) {
    __extends(GetRebootDbInstanceResponse, _super);
    function GetRebootDbInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetRebootDbInstanceResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRebootDbInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRebootDbInstanceResponse.prototype, "statusCode", void 0);
    return GetRebootDbInstanceResponse;
}(utils_1.SpeakeasyBase));
exports.GetRebootDbInstanceResponse = GetRebootDbInstanceResponse;
