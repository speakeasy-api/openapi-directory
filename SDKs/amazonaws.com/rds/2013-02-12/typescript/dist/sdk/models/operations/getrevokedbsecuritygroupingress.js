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
exports.GetRevokeDbSecurityGroupIngressResponse = exports.GetRevokeDbSecurityGroupIngressRequest = exports.GetRevokeDbSecurityGroupIngressHeaders = exports.GetRevokeDbSecurityGroupIngressQueryParams = exports.GetRevokeDbSecurityGroupIngressVersionEnum = exports.GetRevokeDbSecurityGroupIngressActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetRevokeDbSecurityGroupIngressActionEnum;
(function (GetRevokeDbSecurityGroupIngressActionEnum) {
    GetRevokeDbSecurityGroupIngressActionEnum["RevokeDbSecurityGroupIngress"] = "RevokeDBSecurityGroupIngress";
})(GetRevokeDbSecurityGroupIngressActionEnum = exports.GetRevokeDbSecurityGroupIngressActionEnum || (exports.GetRevokeDbSecurityGroupIngressActionEnum = {}));
var GetRevokeDbSecurityGroupIngressVersionEnum;
(function (GetRevokeDbSecurityGroupIngressVersionEnum) {
    GetRevokeDbSecurityGroupIngressVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetRevokeDbSecurityGroupIngressVersionEnum = exports.GetRevokeDbSecurityGroupIngressVersionEnum || (exports.GetRevokeDbSecurityGroupIngressVersionEnum = {}));
var GetRevokeDbSecurityGroupIngressQueryParams = /** @class */ (function (_super) {
    __extends(GetRevokeDbSecurityGroupIngressQueryParams, _super);
    function GetRevokeDbSecurityGroupIngressQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=CIDRIP" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressQueryParams.prototype, "cidrip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DBSecurityGroupName" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressQueryParams.prototype, "dbSecurityGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupId" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupName" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EC2SecurityGroupOwnerId" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressQueryParams.prototype, "ec2SecurityGroupOwnerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressQueryParams.prototype, "version", void 0);
    return GetRevokeDbSecurityGroupIngressQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRevokeDbSecurityGroupIngressQueryParams = GetRevokeDbSecurityGroupIngressQueryParams;
var GetRevokeDbSecurityGroupIngressHeaders = /** @class */ (function (_super) {
    __extends(GetRevokeDbSecurityGroupIngressHeaders, _super);
    function GetRevokeDbSecurityGroupIngressHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRevokeDbSecurityGroupIngressHeaders;
}(utils_1.SpeakeasyBase));
exports.GetRevokeDbSecurityGroupIngressHeaders = GetRevokeDbSecurityGroupIngressHeaders;
var GetRevokeDbSecurityGroupIngressRequest = /** @class */ (function (_super) {
    __extends(GetRevokeDbSecurityGroupIngressRequest, _super);
    function GetRevokeDbSecurityGroupIngressRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRevokeDbSecurityGroupIngressQueryParams)
    ], GetRevokeDbSecurityGroupIngressRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRevokeDbSecurityGroupIngressHeaders)
    ], GetRevokeDbSecurityGroupIngressRequest.prototype, "headers", void 0);
    return GetRevokeDbSecurityGroupIngressRequest;
}(utils_1.SpeakeasyBase));
exports.GetRevokeDbSecurityGroupIngressRequest = GetRevokeDbSecurityGroupIngressRequest;
var GetRevokeDbSecurityGroupIngressResponse = /** @class */ (function (_super) {
    __extends(GetRevokeDbSecurityGroupIngressResponse, _super);
    function GetRevokeDbSecurityGroupIngressResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetRevokeDbSecurityGroupIngressResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRevokeDbSecurityGroupIngressResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRevokeDbSecurityGroupIngressResponse.prototype, "statusCode", void 0);
    return GetRevokeDbSecurityGroupIngressResponse;
}(utils_1.SpeakeasyBase));
exports.GetRevokeDbSecurityGroupIngressResponse = GetRevokeDbSecurityGroupIngressResponse;
