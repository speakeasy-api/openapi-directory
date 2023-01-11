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
exports.GetDescribeLifecycleHooksResponse = exports.GetDescribeLifecycleHooksRequest = exports.GetDescribeLifecycleHooksHeaders = exports.GetDescribeLifecycleHooksQueryParams = exports.GetDescribeLifecycleHooksVersionEnum = exports.GetDescribeLifecycleHooksActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDescribeLifecycleHooksActionEnum;
(function (GetDescribeLifecycleHooksActionEnum) {
    GetDescribeLifecycleHooksActionEnum["DescribeLifecycleHooks"] = "DescribeLifecycleHooks";
})(GetDescribeLifecycleHooksActionEnum = exports.GetDescribeLifecycleHooksActionEnum || (exports.GetDescribeLifecycleHooksActionEnum = {}));
var GetDescribeLifecycleHooksVersionEnum;
(function (GetDescribeLifecycleHooksVersionEnum) {
    GetDescribeLifecycleHooksVersionEnum["TwoThousandAndEleven0101"] = "2011-01-01";
})(GetDescribeLifecycleHooksVersionEnum = exports.GetDescribeLifecycleHooksVersionEnum || (exports.GetDescribeLifecycleHooksVersionEnum = {}));
var GetDescribeLifecycleHooksQueryParams = /** @class */ (function (_super) {
    __extends(GetDescribeLifecycleHooksQueryParams, _super);
    function GetDescribeLifecycleHooksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AutoScalingGroupName" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksQueryParams.prototype, "autoScalingGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=LifecycleHookNames" }),
        __metadata("design:type", Array)
    ], GetDescribeLifecycleHooksQueryParams.prototype, "lifecycleHookNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksQueryParams.prototype, "version", void 0);
    return GetDescribeLifecycleHooksQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDescribeLifecycleHooksQueryParams = GetDescribeLifecycleHooksQueryParams;
var GetDescribeLifecycleHooksHeaders = /** @class */ (function (_super) {
    __extends(GetDescribeLifecycleHooksHeaders, _super);
    function GetDescribeLifecycleHooksHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDescribeLifecycleHooksHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDescribeLifecycleHooksHeaders = GetDescribeLifecycleHooksHeaders;
var GetDescribeLifecycleHooksRequest = /** @class */ (function (_super) {
    __extends(GetDescribeLifecycleHooksRequest, _super);
    function GetDescribeLifecycleHooksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeLifecycleHooksQueryParams)
    ], GetDescribeLifecycleHooksRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDescribeLifecycleHooksHeaders)
    ], GetDescribeLifecycleHooksRequest.prototype, "headers", void 0);
    return GetDescribeLifecycleHooksRequest;
}(utils_1.SpeakeasyBase));
exports.GetDescribeLifecycleHooksRequest = GetDescribeLifecycleHooksRequest;
var GetDescribeLifecycleHooksResponse = /** @class */ (function (_super) {
    __extends(GetDescribeLifecycleHooksResponse, _super);
    function GetDescribeLifecycleHooksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDescribeLifecycleHooksResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDescribeLifecycleHooksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDescribeLifecycleHooksResponse.prototype, "statusCode", void 0);
    return GetDescribeLifecycleHooksResponse;
}(utils_1.SpeakeasyBase));
exports.GetDescribeLifecycleHooksResponse = GetDescribeLifecycleHooksResponse;
