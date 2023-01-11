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
exports.GetDescribeSpotFleetInstancesResponse = exports.GetDescribeSpotFleetInstancesRequest = exports.GetDescribeSpotFleetInstancesHeaders = exports.GetDescribeSpotFleetInstancesQueryParams = exports.GetDescribeSpotFleetInstancesVersionEnum = exports.GetDescribeSpotFleetInstancesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeSpotFleetInstancesActionEnum;
(function (GetDescribeSpotFleetInstancesActionEnum) {
    GetDescribeSpotFleetInstancesActionEnum["DescribeSpotFleetInstances"] = "DescribeSpotFleetInstances";
})(GetDescribeSpotFleetInstancesActionEnum = exports.GetDescribeSpotFleetInstancesActionEnum || (exports.GetDescribeSpotFleetInstancesActionEnum = {}));
var GetDescribeSpotFleetInstancesVersionEnum;
(function (GetDescribeSpotFleetInstancesVersionEnum) {
    GetDescribeSpotFleetInstancesVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeSpotFleetInstancesVersionEnum = exports.GetDescribeSpotFleetInstancesVersionEnum || (exports.GetDescribeSpotFleetInstancesVersionEnum = {}));
var GetDescribeSpotFleetInstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeSpotFleetInstancesQueryParams, _super);
    function GetDescribeSpotFleetInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDescribeSpotFleetInstancesQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetDescribeSpotFleetInstancesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SpotFleetRequestId" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesQueryParams.prototype, "spotFleetRequestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesQueryParams.prototype, "version", void 0);
    return GetDescribeSpotFleetInstancesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeSpotFleetInstancesQueryParams = GetDescribeSpotFleetInstancesQueryParams;
var GetDescribeSpotFleetInstancesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeSpotFleetInstancesHeaders, _super);
    function GetDescribeSpotFleetInstancesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeSpotFleetInstancesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeSpotFleetInstancesHeaders = GetDescribeSpotFleetInstancesHeaders;
var GetDescribeSpotFleetInstancesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeSpotFleetInstancesRequest, _super);
    function GetDescribeSpotFleetInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeSpotFleetInstancesQueryParams)
    ], GetDescribeSpotFleetInstancesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeSpotFleetInstancesHeaders)
    ], GetDescribeSpotFleetInstancesRequest.prototype, "headers", void 0);
    return GetDescribeSpotFleetInstancesRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeSpotFleetInstancesRequest = GetDescribeSpotFleetInstancesRequest;
var GetDescribeSpotFleetInstancesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeSpotFleetInstancesResponse, _super);
    function GetDescribeSpotFleetInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeSpotFleetInstancesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeSpotFleetInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeSpotFleetInstancesResponse.prototype, "statusCode", void 0);
    return GetDescribeSpotFleetInstancesResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeSpotFleetInstancesResponse = GetDescribeSpotFleetInstancesResponse;
