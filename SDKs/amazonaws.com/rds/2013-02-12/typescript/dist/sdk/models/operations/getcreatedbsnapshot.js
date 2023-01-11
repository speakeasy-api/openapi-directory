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
exports.GetCreateDbSnapshotResponse = exports.GetCreateDbSnapshotRequest = exports.GetCreateDbSnapshotHeaders = exports.GetCreateDbSnapshotQueryParams = exports.GetCreateDbSnapshotVersionEnum = exports.GetCreateDbSnapshotActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetCreateDbSnapshotActionEnum;
(function (GetCreateDbSnapshotActionEnum) {
    GetCreateDbSnapshotActionEnum["CreateDbSnapshot"] = "CreateDBSnapshot";
})(GetCreateDbSnapshotActionEnum = exports.GetCreateDbSnapshotActionEnum || (exports.GetCreateDbSnapshotActionEnum = {}));
var GetCreateDbSnapshotVersionEnum;
(function (GetCreateDbSnapshotVersionEnum) {
    GetCreateDbSnapshotVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetCreateDbSnapshotVersionEnum = exports.GetCreateDbSnapshotVersionEnum || (exports.GetCreateDbSnapshotVersionEnum = {}));
var GetCreateDbSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateDbSnapshotQueryParams, _super);
    function GetCreateDbSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DBInstanceIdentifier" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotQueryParams.prototype, "dbInstanceIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DBSnapshotIdentifier" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotQueryParams.prototype, "dbSnapshotIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotQueryParams.prototype, "version", void 0);
    return GetCreateDbSnapshotQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCreateDbSnapshotQueryParams = GetCreateDbSnapshotQueryParams;
var GetCreateDbSnapshotHeaders = /** @class */ (function (_super) {
    __extends(GetCreateDbSnapshotHeaders, _super);
    function GetCreateDbSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateDbSnapshotHeaders;
}(utils_1.SpeakeasyBase));
exports.GetCreateDbSnapshotHeaders = GetCreateDbSnapshotHeaders;
var GetCreateDbSnapshotRequest = /** @class */ (function (_super) {
    __extends(GetCreateDbSnapshotRequest, _super);
    function GetCreateDbSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreateDbSnapshotQueryParams)
    ], GetCreateDbSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreateDbSnapshotHeaders)
    ], GetCreateDbSnapshotRequest.prototype, "headers", void 0);
    return GetCreateDbSnapshotRequest;
}(utils_1.SpeakeasyBase));
exports.GetCreateDbSnapshotRequest = GetCreateDbSnapshotRequest;
var GetCreateDbSnapshotResponse = /** @class */ (function (_super) {
    __extends(GetCreateDbSnapshotResponse, _super);
    function GetCreateDbSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCreateDbSnapshotResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCreateDbSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCreateDbSnapshotResponse.prototype, "statusCode", void 0);
    return GetCreateDbSnapshotResponse;
}(utils_1.SpeakeasyBase));
exports.GetCreateDbSnapshotResponse = GetCreateDbSnapshotResponse;
