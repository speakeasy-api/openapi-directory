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
exports.GetDeleteDbSecurityGroupResponse = exports.GetDeleteDbSecurityGroupRequest = exports.GetDeleteDbSecurityGroupHeaders = exports.GetDeleteDbSecurityGroupQueryParams = exports.GetDeleteDbSecurityGroupVersionEnum = exports.GetDeleteDbSecurityGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteDbSecurityGroupActionEnum;
(function (GetDeleteDbSecurityGroupActionEnum) {
    GetDeleteDbSecurityGroupActionEnum["DeleteDbSecurityGroup"] = "DeleteDBSecurityGroup";
})(GetDeleteDbSecurityGroupActionEnum = exports.GetDeleteDbSecurityGroupActionEnum || (exports.GetDeleteDbSecurityGroupActionEnum = {}));
var GetDeleteDbSecurityGroupVersionEnum;
(function (GetDeleteDbSecurityGroupVersionEnum) {
    GetDeleteDbSecurityGroupVersionEnum["TwoThousandAndThirteen0110"] = "2013-01-10";
})(GetDeleteDbSecurityGroupVersionEnum = exports.GetDeleteDbSecurityGroupVersionEnum || (exports.GetDeleteDbSecurityGroupVersionEnum = {}));
var GetDeleteDbSecurityGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteDbSecurityGroupQueryParams, _super);
    function GetDeleteDbSecurityGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DBSecurityGroupName" }),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupQueryParams.prototype, "dbSecurityGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupQueryParams.prototype, "version", void 0);
    return GetDeleteDbSecurityGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteDbSecurityGroupQueryParams = GetDeleteDbSecurityGroupQueryParams;
var GetDeleteDbSecurityGroupHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteDbSecurityGroupHeaders, _super);
    function GetDeleteDbSecurityGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteDbSecurityGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteDbSecurityGroupHeaders = GetDeleteDbSecurityGroupHeaders;
var GetDeleteDbSecurityGroupRequest = /** @class */ (function (_super) {
    __extends(GetDeleteDbSecurityGroupRequest, _super);
    function GetDeleteDbSecurityGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteDbSecurityGroupQueryParams)
    ], GetDeleteDbSecurityGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteDbSecurityGroupHeaders)
    ], GetDeleteDbSecurityGroupRequest.prototype, "headers", void 0);
    return GetDeleteDbSecurityGroupRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteDbSecurityGroupRequest = GetDeleteDbSecurityGroupRequest;
var GetDeleteDbSecurityGroupResponse = /** @class */ (function (_super) {
    __extends(GetDeleteDbSecurityGroupResponse, _super);
    function GetDeleteDbSecurityGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteDbSecurityGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteDbSecurityGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteDbSecurityGroupResponse.prototype, "statusCode", void 0);
    return GetDeleteDbSecurityGroupResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteDbSecurityGroupResponse = GetDeleteDbSecurityGroupResponse;
