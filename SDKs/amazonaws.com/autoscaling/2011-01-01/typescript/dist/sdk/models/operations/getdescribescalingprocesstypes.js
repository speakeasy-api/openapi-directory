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
exports.GetDescribeScalingProcessTypesResponse = exports.GetDescribeScalingProcessTypesRequest = exports.GetDescribeScalingProcessTypesHeaders = exports.GetDescribeScalingProcessTypesQueryParams = exports.GetDescribeScalingProcessTypesVersionEnum = exports.GetDescribeScalingProcessTypesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeScalingProcessTypesActionEnum;
(function (GetDescribeScalingProcessTypesActionEnum) {
    GetDescribeScalingProcessTypesActionEnum["DescribeScalingProcessTypes"] = "DescribeScalingProcessTypes";
})(GetDescribeScalingProcessTypesActionEnum = exports.GetDescribeScalingProcessTypesActionEnum || (exports.GetDescribeScalingProcessTypesActionEnum = {}));
var GetDescribeScalingProcessTypesVersionEnum;
(function (GetDescribeScalingProcessTypesVersionEnum) {
    GetDescribeScalingProcessTypesVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeScalingProcessTypesVersionEnum = exports.GetDescribeScalingProcessTypesVersionEnum || (exports.GetDescribeScalingProcessTypesVersionEnum = {}));
var GetDescribeScalingProcessTypesQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeScalingProcessTypesQueryParams, _super);
    function GetDescribeScalingProcessTypesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeScalingProcessTypesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeScalingProcessTypesQueryParams.prototype, "version", void 0);
    return GetDescribeScalingProcessTypesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeScalingProcessTypesQueryParams = GetDescribeScalingProcessTypesQueryParams;
var GetDescribeScalingProcessTypesHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeScalingProcessTypesHeaders, _super);
    function GetDescribeScalingProcessTypesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeScalingProcessTypesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeScalingProcessTypesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeScalingProcessTypesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeScalingProcessTypesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeScalingProcessTypesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeScalingProcessTypesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeScalingProcessTypesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeScalingProcessTypesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeScalingProcessTypesHeaders = GetDescribeScalingProcessTypesHeaders;
var GetDescribeScalingProcessTypesRequest = /** @class */ (function (_super) {
    __extends(GetDescribeScalingProcessTypesRequest, _super);
    function GetDescribeScalingProcessTypesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeScalingProcessTypesQueryParams)
    ], GetDescribeScalingProcessTypesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeScalingProcessTypesHeaders)
    ], GetDescribeScalingProcessTypesRequest.prototype, "headers", void 0);
    return GetDescribeScalingProcessTypesRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeScalingProcessTypesRequest = GetDescribeScalingProcessTypesRequest;
var GetDescribeScalingProcessTypesResponse = /** @class */ (function (_super) {
    __extends(GetDescribeScalingProcessTypesResponse, _super);
    function GetDescribeScalingProcessTypesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeScalingProcessTypesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeScalingProcessTypesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeScalingProcessTypesResponse.prototype, "statusCode", void 0);
    return GetDescribeScalingProcessTypesResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeScalingProcessTypesResponse = GetDescribeScalingProcessTypesResponse;
