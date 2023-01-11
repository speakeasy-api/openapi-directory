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
exports.GetDescribeIdFormatResponse = exports.GetDescribeIdFormatRequest = exports.GetDescribeIdFormatHeaders = exports.GetDescribeIdFormatQueryParams = exports.GetDescribeIdFormatVersionEnum = exports.GetDescribeIdFormatActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeIdFormatActionEnum;
(function (GetDescribeIdFormatActionEnum) {
    GetDescribeIdFormatActionEnum["DescribeIdFormat"] = "DescribeIdFormat";
})(GetDescribeIdFormatActionEnum = exports.GetDescribeIdFormatActionEnum || (exports.GetDescribeIdFormatActionEnum = {}));
var GetDescribeIdFormatVersionEnum;
(function (GetDescribeIdFormatVersionEnum) {
    GetDescribeIdFormatVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDescribeIdFormatVersionEnum = exports.GetDescribeIdFormatVersionEnum || (exports.GetDescribeIdFormatVersionEnum = {}));
var GetDescribeIdFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeIdFormatQueryParams, _super);
    function GetDescribeIdFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeIdFormatQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Resource" }),
        __metadata("design:type", String)
    ], GetDescribeIdFormatQueryParams.prototype, "resource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeIdFormatQueryParams.prototype, "version", void 0);
    return GetDescribeIdFormatQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeIdFormatQueryParams = GetDescribeIdFormatQueryParams;
var GetDescribeIdFormatHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeIdFormatHeaders, _super);
    function GetDescribeIdFormatHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeIdFormatHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeIdFormatHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeIdFormatHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeIdFormatHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeIdFormatHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeIdFormatHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeIdFormatHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeIdFormatHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeIdFormatHeaders = GetDescribeIdFormatHeaders;
var GetDescribeIdFormatRequest = /** @class */ (function (_super) {
    __extends(GetDescribeIdFormatRequest, _super);
    function GetDescribeIdFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeIdFormatQueryParams)
    ], GetDescribeIdFormatRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeIdFormatHeaders)
    ], GetDescribeIdFormatRequest.prototype, "headers", void 0);
    return GetDescribeIdFormatRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeIdFormatRequest = GetDescribeIdFormatRequest;
var GetDescribeIdFormatResponse = /** @class */ (function (_super) {
    __extends(GetDescribeIdFormatResponse, _super);
    function GetDescribeIdFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeIdFormatResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeIdFormatResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeIdFormatResponse.prototype, "statusCode", void 0);
    return GetDescribeIdFormatResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeIdFormatResponse = GetDescribeIdFormatResponse;
