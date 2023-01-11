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
exports.GetDescribeClusterDbRevisionsResponse = exports.GetDescribeClusterDbRevisionsRequest = exports.GetDescribeClusterDbRevisionsHeaders = exports.GetDescribeClusterDbRevisionsQueryParams = exports.GetDescribeClusterDbRevisionsVersionEnum = exports.GetDescribeClusterDbRevisionsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeClusterDbRevisionsActionEnum;
(function (GetDescribeClusterDbRevisionsActionEnum) {
    GetDescribeClusterDbRevisionsActionEnum["DescribeClusterDbRevisions"] = "DescribeClusterDbRevisions";
})(GetDescribeClusterDbRevisionsActionEnum = exports.GetDescribeClusterDbRevisionsActionEnum || (exports.GetDescribeClusterDbRevisionsActionEnum = {}));
var GetDescribeClusterDbRevisionsVersionEnum;
(function (GetDescribeClusterDbRevisionsVersionEnum) {
    GetDescribeClusterDbRevisionsVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeClusterDbRevisionsVersionEnum = exports.GetDescribeClusterDbRevisionsVersionEnum || (exports.GetDescribeClusterDbRevisionsVersionEnum = {}));
var GetDescribeClusterDbRevisionsQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeClusterDbRevisionsQueryParams, _super);
    function GetDescribeClusterDbRevisionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxRecords" }),
        __metadata("design:type", Number)
    ], GetDescribeClusterDbRevisionsQueryParams.prototype, "maxRecords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsQueryParams.prototype, "version", void 0);
    return GetDescribeClusterDbRevisionsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeClusterDbRevisionsQueryParams = GetDescribeClusterDbRevisionsQueryParams;
var GetDescribeClusterDbRevisionsHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeClusterDbRevisionsHeaders, _super);
    function GetDescribeClusterDbRevisionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeClusterDbRevisionsHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeClusterDbRevisionsHeaders = GetDescribeClusterDbRevisionsHeaders;
var GetDescribeClusterDbRevisionsRequest = /** @class */ (function (_super) {
    __extends(GetDescribeClusterDbRevisionsRequest, _super);
    function GetDescribeClusterDbRevisionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeClusterDbRevisionsQueryParams)
    ], GetDescribeClusterDbRevisionsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeClusterDbRevisionsHeaders)
    ], GetDescribeClusterDbRevisionsRequest.prototype, "headers", void 0);
    return GetDescribeClusterDbRevisionsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeClusterDbRevisionsRequest = GetDescribeClusterDbRevisionsRequest;
var GetDescribeClusterDbRevisionsResponse = /** @class */ (function (_super) {
    __extends(GetDescribeClusterDbRevisionsResponse, _super);
    function GetDescribeClusterDbRevisionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeClusterDbRevisionsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeClusterDbRevisionsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeClusterDbRevisionsResponse.prototype, "statusCode", void 0);
    return GetDescribeClusterDbRevisionsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeClusterDbRevisionsResponse = GetDescribeClusterDbRevisionsResponse;
