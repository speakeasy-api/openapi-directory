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
exports.GetDetachClassicLinkVpcResponse = exports.GetDetachClassicLinkVpcRequest = exports.GetDetachClassicLinkVpcHeaders = exports.GetDetachClassicLinkVpcQueryParams = exports.GetDetachClassicLinkVpcVersionEnum = exports.GetDetachClassicLinkVpcActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDetachClassicLinkVpcActionEnum;
(function (GetDetachClassicLinkVpcActionEnum) {
    GetDetachClassicLinkVpcActionEnum["DetachClassicLinkVpc"] = "DetachClassicLinkVpc";
})(GetDetachClassicLinkVpcActionEnum = exports.GetDetachClassicLinkVpcActionEnum || (exports.GetDetachClassicLinkVpcActionEnum = {}));
var GetDetachClassicLinkVpcVersionEnum;
(function (GetDetachClassicLinkVpcVersionEnum) {
    GetDetachClassicLinkVpcVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDetachClassicLinkVpcVersionEnum = exports.GetDetachClassicLinkVpcVersionEnum || (exports.GetDetachClassicLinkVpcVersionEnum = {}));
var GetDetachClassicLinkVpcQueryParams = /** @class */ (function (_super) {
    __extends(GetDetachClassicLinkVpcQueryParams, _super);
    function GetDetachClassicLinkVpcQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDetachClassicLinkVpcQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InstanceId" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcQueryParams.prototype, "instanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcQueryParams.prototype, "version", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=VpcId" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcQueryParams.prototype, "vpcId", void 0);
    return GetDetachClassicLinkVpcQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDetachClassicLinkVpcQueryParams = GetDetachClassicLinkVpcQueryParams;
var GetDetachClassicLinkVpcHeaders = /** @class */ (function (_super) {
    __extends(GetDetachClassicLinkVpcHeaders, _super);
    function GetDetachClassicLinkVpcHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDetachClassicLinkVpcHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDetachClassicLinkVpcHeaders = GetDetachClassicLinkVpcHeaders;
var GetDetachClassicLinkVpcRequest = /** @class */ (function (_super) {
    __extends(GetDetachClassicLinkVpcRequest, _super);
    function GetDetachClassicLinkVpcRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDetachClassicLinkVpcQueryParams)
    ], GetDetachClassicLinkVpcRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDetachClassicLinkVpcHeaders)
    ], GetDetachClassicLinkVpcRequest.prototype, "headers", void 0);
    return GetDetachClassicLinkVpcRequest;
}(utils_1.SpeakeasyBase));
exports.GetDetachClassicLinkVpcRequest = GetDetachClassicLinkVpcRequest;
var GetDetachClassicLinkVpcResponse = /** @class */ (function (_super) {
    __extends(GetDetachClassicLinkVpcResponse, _super);
    function GetDetachClassicLinkVpcResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDetachClassicLinkVpcResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDetachClassicLinkVpcResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDetachClassicLinkVpcResponse.prototype, "statusCode", void 0);
    return GetDetachClassicLinkVpcResponse;
}(utils_1.SpeakeasyBase));
exports.GetDetachClassicLinkVpcResponse = GetDetachClassicLinkVpcResponse;
