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
exports.GetAddUserToGroupResponse = exports.GetAddUserToGroupRequest = exports.GetAddUserToGroupHeaders = exports.GetAddUserToGroupQueryParams = exports.GetAddUserToGroupVersionEnum = exports.GetAddUserToGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetAddUserToGroupActionEnum;
(function (GetAddUserToGroupActionEnum) {
    GetAddUserToGroupActionEnum["AddUserToGroup"] = "AddUserToGroup";
})(GetAddUserToGroupActionEnum = exports.GetAddUserToGroupActionEnum || (exports.GetAddUserToGroupActionEnum = {}));
var GetAddUserToGroupVersionEnum;
(function (GetAddUserToGroupVersionEnum) {
    GetAddUserToGroupVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetAddUserToGroupVersionEnum = exports.GetAddUserToGroupVersionEnum || (exports.GetAddUserToGroupVersionEnum = {}));
var GetAddUserToGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetAddUserToGroupQueryParams, _super);
    function GetAddUserToGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupQueryParams.prototype, "groupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=UserName" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupQueryParams.prototype, "userName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupQueryParams.prototype, "version", void 0);
    return GetAddUserToGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAddUserToGroupQueryParams = GetAddUserToGroupQueryParams;
var GetAddUserToGroupHeaders = /** @class */ (function (_super) {
    __extends(GetAddUserToGroupHeaders, _super);
    function GetAddUserToGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetAddUserToGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetAddUserToGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.GetAddUserToGroupHeaders = GetAddUserToGroupHeaders;
var GetAddUserToGroupRequest = /** @class */ (function (_super) {
    __extends(GetAddUserToGroupRequest, _super);
    function GetAddUserToGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAddUserToGroupQueryParams)
    ], GetAddUserToGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAddUserToGroupHeaders)
    ], GetAddUserToGroupRequest.prototype, "headers", void 0);
    return GetAddUserToGroupRequest;
}(utils_1.SpeakeasyBase));
exports.GetAddUserToGroupRequest = GetAddUserToGroupRequest;
var GetAddUserToGroupResponse = /** @class */ (function (_super) {
    __extends(GetAddUserToGroupResponse, _super);
    function GetAddUserToGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetAddUserToGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAddUserToGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAddUserToGroupResponse.prototype, "statusCode", void 0);
    return GetAddUserToGroupResponse;
}(utils_1.SpeakeasyBase));
exports.GetAddUserToGroupResponse = GetAddUserToGroupResponse;
