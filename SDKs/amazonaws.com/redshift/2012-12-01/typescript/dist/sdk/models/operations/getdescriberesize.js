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
exports.GetDescribeResizeResponse = exports.GetDescribeResizeRequest = exports.GetDescribeResizeHeaders = exports.GetDescribeResizeQueryParams = exports.GetDescribeResizeVersionEnum = exports.GetDescribeResizeActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeResizeActionEnum;
(function (GetDescribeResizeActionEnum) {
    GetDescribeResizeActionEnum["DescribeResize"] = "DescribeResize";
})(GetDescribeResizeActionEnum = exports.GetDescribeResizeActionEnum || (exports.GetDescribeResizeActionEnum = {}));
var GetDescribeResizeVersionEnum;
(function (GetDescribeResizeVersionEnum) {
    GetDescribeResizeVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetDescribeResizeVersionEnum = exports.GetDescribeResizeVersionEnum || (exports.GetDescribeResizeVersionEnum = {}));
var GetDescribeResizeQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeResizeQueryParams, _super);
    function GetDescribeResizeQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeResizeQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetDescribeResizeQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeResizeQueryParams.prototype, "version", void 0);
    return GetDescribeResizeQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeResizeQueryParams = GetDescribeResizeQueryParams;
var GetDescribeResizeHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeResizeHeaders, _super);
    function GetDescribeResizeHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeResizeHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeResizeHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeResizeHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeResizeHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeResizeHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeResizeHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeResizeHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeResizeHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeResizeHeaders = GetDescribeResizeHeaders;
var GetDescribeResizeRequest = /** @class */ (function (_super) {
    __extends(GetDescribeResizeRequest, _super);
    function GetDescribeResizeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeResizeQueryParams)
    ], GetDescribeResizeRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeResizeHeaders)
    ], GetDescribeResizeRequest.prototype, "headers", void 0);
    return GetDescribeResizeRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeResizeRequest = GetDescribeResizeRequest;
var GetDescribeResizeResponse = /** @class */ (function (_super) {
    __extends(GetDescribeResizeResponse, _super);
    function GetDescribeResizeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeResizeResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeResizeResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeResizeResponse.prototype, "statusCode", void 0);
    return GetDescribeResizeResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeResizeResponse = GetDescribeResizeResponse;
