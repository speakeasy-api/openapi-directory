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
exports.GetDeleteSnapshotResponse = exports.GetDeleteSnapshotRequest = exports.GetDeleteSnapshotHeaders = exports.GetDeleteSnapshotQueryParams = exports.GetDeleteSnapshotVersionEnum = exports.GetDeleteSnapshotActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteSnapshotActionEnum;
(function (GetDeleteSnapshotActionEnum) {
    GetDeleteSnapshotActionEnum["DeleteSnapshot"] = "DeleteSnapshot";
})(GetDeleteSnapshotActionEnum = exports.GetDeleteSnapshotActionEnum || (exports.GetDeleteSnapshotActionEnum = {}));
var GetDeleteSnapshotVersionEnum;
(function (GetDeleteSnapshotVersionEnum) {
    GetDeleteSnapshotVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteSnapshotVersionEnum = exports.GetDeleteSnapshotVersionEnum || (exports.GetDeleteSnapshotVersionEnum = {}));
var GetDeleteSnapshotQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteSnapshotQueryParams, _super);
    function GetDeleteSnapshotQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteSnapshotQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteSnapshotQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SnapshotId" }),
        __metadata("design:type", String)
    ], GetDeleteSnapshotQueryParams.prototype, "snapshotId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteSnapshotQueryParams.prototype, "version", void 0);
    return GetDeleteSnapshotQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteSnapshotQueryParams = GetDeleteSnapshotQueryParams;
var GetDeleteSnapshotHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteSnapshotHeaders, _super);
    function GetDeleteSnapshotHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteSnapshotHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteSnapshotHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteSnapshotHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteSnapshotHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteSnapshotHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteSnapshotHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteSnapshotHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteSnapshotHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteSnapshotHeaders = GetDeleteSnapshotHeaders;
var GetDeleteSnapshotRequest = /** @class */ (function (_super) {
    __extends(GetDeleteSnapshotRequest, _super);
    function GetDeleteSnapshotRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteSnapshotQueryParams)
    ], GetDeleteSnapshotRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteSnapshotHeaders)
    ], GetDeleteSnapshotRequest.prototype, "headers", void 0);
    return GetDeleteSnapshotRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteSnapshotRequest = GetDeleteSnapshotRequest;
var GetDeleteSnapshotResponse = /** @class */ (function (_super) {
    __extends(GetDeleteSnapshotResponse, _super);
    function GetDeleteSnapshotResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteSnapshotResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteSnapshotResponse.prototype, "statusCode", void 0);
    return GetDeleteSnapshotResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteSnapshotResponse = GetDeleteSnapshotResponse;
