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
exports.GetDescribeMetricCollectionTypesResponse = exports.GetDescribeMetricCollectionTypesRequest = exports.GetDescribeMetricCollectionTypesHeaders = exports.GetDescribeMetricCollectionTypesQueryParams = exports.GetDescribeMetricCollectionTypesVersionEnum = exports.GetDescribeMetricCollectionTypesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeMetricCollectionTypesActionEnum;
(function (GetDescribeMetricCollectionTypesActionEnum) {
    GetDescribeMetricCollectionTypesActionEnum["DescribeMetricCollectionTypes"] = "DescribeMetricCollectionTypes";
})(GetDescribeMetricCollectionTypesActionEnum = exports.GetDescribeMetricCollectionTypesActionEnum || (exports.GetDescribeMetricCollectionTypesActionEnum = {}));
var GetDescribeMetricCollectionTypesVersionEnum;
(function (GetDescribeMetricCollectionTypesVersionEnum) {
    GetDescribeMetricCollectionTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeMetricCollectionTypesVersionEnum = exports.GetDescribeMetricCollectionTypesVersionEnum || (exports.GetDescribeMetricCollectionTypesVersionEnum = {}));
var GetDescribeMetricCollectionTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeMetricCollectionTypesQueryParams, _super);
    function GetDescribeMetricCollectionTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesQueryParams.prototype, "version", void 0);
    return GetDescribeMetricCollectionTypesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeMetricCollectionTypesQueryParams = GetDescribeMetricCollectionTypesQueryParams;
var GetDescribeMetricCollectionTypesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeMetricCollectionTypesHeaders, _super);
    function GetDescribeMetricCollectionTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeMetricCollectionTypesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeMetricCollectionTypesHeaders = GetDescribeMetricCollectionTypesHeaders;
var GetDescribeMetricCollectionTypesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeMetricCollectionTypesRequest, _super);
    function GetDescribeMetricCollectionTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeMetricCollectionTypesQueryParams)
    ], GetDescribeMetricCollectionTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeMetricCollectionTypesHeaders)
    ], GetDescribeMetricCollectionTypesRequest.prototype, "headers", void 0);
    return GetDescribeMetricCollectionTypesRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeMetricCollectionTypesRequest = GetDescribeMetricCollectionTypesRequest;
var GetDescribeMetricCollectionTypesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeMetricCollectionTypesResponse, _super);
    function GetDescribeMetricCollectionTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeMetricCollectionTypesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeMetricCollectionTypesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeMetricCollectionTypesResponse.prototype, "statusCode", void 0);
    return GetDescribeMetricCollectionTypesResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeMetricCollectionTypesResponse = GetDescribeMetricCollectionTypesResponse;
