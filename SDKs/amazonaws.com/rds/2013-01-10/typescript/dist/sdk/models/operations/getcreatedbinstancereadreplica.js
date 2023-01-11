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
exports.GetCreateDbInstanceReadReplicaResponse = exports.GetCreateDbInstanceReadReplicaRequest = exports.GetCreateDbInstanceReadReplicaHeaders = exports.GetCreateDbInstanceReadReplicaQueryParams = exports.GetCreateDbInstanceReadReplicaVersionEnum = exports.GetCreateDbInstanceReadReplicaActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetCreateDbInstanceReadReplicaActionEnum;
(function (GetCreateDbInstanceReadReplicaActionEnum) {
    GetCreateDbInstanceReadReplicaActionEnum["CreateDbInstanceReadReplica"] = "CreateDBInstanceReadReplica";
})(GetCreateDbInstanceReadReplicaActionEnum = exports.GetCreateDbInstanceReadReplicaActionEnum || (exports.GetCreateDbInstanceReadReplicaActionEnum = {}));
var GetCreateDbInstanceReadReplicaVersionEnum;
(function (GetCreateDbInstanceReadReplicaVersionEnum) {
    GetCreateDbInstanceReadReplicaVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetCreateDbInstanceReadReplicaVersionEnum = exports.GetCreateDbInstanceReadReplicaVersionEnum || (exports.GetCreateDbInstanceReadReplicaVersionEnum = {}));
var GetCreateDbInstanceReadReplicaQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateDbInstanceReadReplicaQueryParams, _super);
    function GetCreateDbInstanceReadReplicaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AutoMinorVersionUpgrade" }),
        __metadata("design:type", Boolean)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "autoMinorVersionUpgrade", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AvailabilityZone" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "availabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DBInstanceClass" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "dbInstanceClass", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Iops" }),
        __metadata("design:type", Number)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "iops", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=OptionGroupName" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "optionGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Port" }),
        __metadata("design:type", Number)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PubliclyAccessible" }),
        __metadata("design:type", Boolean)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "publiclyAccessible", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SourceDBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "sourceDBInstanceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaQueryParams.prototype, "version", void 0);
    return GetCreateDbInstanceReadReplicaQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCreateDbInstanceReadReplicaQueryParams = GetCreateDbInstanceReadReplicaQueryParams;
var GetCreateDbInstanceReadReplicaHeaders = /** @class */ (function (_super) {
    __extends(GetCreateDbInstanceReadReplicaHeaders, _super);
    function GetCreateDbInstanceReadReplicaHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateDbInstanceReadReplicaHeaders;
}(utils_1.SpeakeasyBase));
exports.GetCreateDbInstanceReadReplicaHeaders = GetCreateDbInstanceReadReplicaHeaders;
var GetCreateDbInstanceReadReplicaRequest = /** @class */ (function (_super) {
    __extends(GetCreateDbInstanceReadReplicaRequest, _super);
    function GetCreateDbInstanceReadReplicaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreateDbInstanceReadReplicaQueryParams)
    ], GetCreateDbInstanceReadReplicaRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreateDbInstanceReadReplicaHeaders)
    ], GetCreateDbInstanceReadReplicaRequest.prototype, "headers", void 0);
    return GetCreateDbInstanceReadReplicaRequest;
}(utils_1.SpeakeasyBase));
exports.GetCreateDbInstanceReadReplicaRequest = GetCreateDbInstanceReadReplicaRequest;
var GetCreateDbInstanceReadReplicaResponse = /** @class */ (function (_super) {
    __extends(GetCreateDbInstanceReadReplicaResponse, _super);
    function GetCreateDbInstanceReadReplicaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCreateDbInstanceReadReplicaResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCreateDbInstanceReadReplicaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCreateDbInstanceReadReplicaResponse.prototype, "statusCode", void 0);
    return GetCreateDbInstanceReadReplicaResponse;
}(utils_1.SpeakeasyBase));
exports.GetCreateDbInstanceReadReplicaResponse = GetCreateDbInstanceReadReplicaResponse;
