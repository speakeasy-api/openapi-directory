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
exports.GetDescribeReplicationGroupsResponse = exports.GetDescribeReplicationGroupsRequest = exports.GetDescribeReplicationGroupsHeaders = exports.GetDescribeReplicationGroupsQueryParams = exports.GetDescribeReplicationGroupsVersionEnum = exports.GetDescribeReplicationGroupsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeReplicationGroupsActionEnum;
(function (GetDescribeReplicationGroupsActionEnum) {
    GetDescribeReplicationGroupsActionEnum["DescribeReplicationGroups"] = "DescribeReplicationGroups";
})(GetDescribeReplicationGroupsActionEnum = exports.GetDescribeReplicationGroupsActionEnum || (exports.GetDescribeReplicationGroupsActionEnum = {}));
var GetDescribeReplicationGroupsVersionEnum;
(function (GetDescribeReplicationGroupsVersionEnum) {
    GetDescribeReplicationGroupsVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetDescribeReplicationGroupsVersionEnum = exports.GetDescribeReplicationGroupsVersionEnum || (exports.GetDescribeReplicationGroupsVersionEnum = {}));
var GetDescribeReplicationGroupsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeReplicationGroupsQueryParams, _super);
    function GetDescribeReplicationGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeReplicationGroupsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ReplicationGroupId" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsQueryParams.prototype, "replicationGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsQueryParams.prototype, "version", void 0);
    return GetDescribeReplicationGroupsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeReplicationGroupsQueryParams = GetDescribeReplicationGroupsQueryParams;
var GetDescribeReplicationGroupsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeReplicationGroupsHeaders, _super);
    function GetDescribeReplicationGroupsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeReplicationGroupsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeReplicationGroupsHeaders = GetDescribeReplicationGroupsHeaders;
var GetDescribeReplicationGroupsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeReplicationGroupsRequest, _super);
    function GetDescribeReplicationGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeReplicationGroupsQueryParams)
    ], GetDescribeReplicationGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeReplicationGroupsHeaders)
    ], GetDescribeReplicationGroupsRequest.prototype, "headers", void 0);
    return GetDescribeReplicationGroupsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeReplicationGroupsRequest = GetDescribeReplicationGroupsRequest;
var GetDescribeReplicationGroupsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeReplicationGroupsResponse, _super);
    function GetDescribeReplicationGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeReplicationGroupsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeReplicationGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeReplicationGroupsResponse.prototype, "statusCode", void 0);
    return GetDescribeReplicationGroupsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeReplicationGroupsResponse = GetDescribeReplicationGroupsResponse;
