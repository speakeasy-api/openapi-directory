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
exports.GetModifyUserGroupResponse = exports.GetModifyUserGroupRequest = exports.GetModifyUserGroupHeaders = exports.GetModifyUserGroupQueryParams = exports.GetModifyUserGroupVersionEnum = exports.GetModifyUserGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetModifyUserGroupActionEnum;
(function (GetModifyUserGroupActionEnum) {
    GetModifyUserGroupActionEnum["ModifyUserGroup"] = "ModifyUserGroup";
})(GetModifyUserGroupActionEnum = exports.GetModifyUserGroupActionEnum || (exports.GetModifyUserGroupActionEnum = {}));
var GetModifyUserGroupVersionEnum;
(function (GetModifyUserGroupVersionEnum) {
    GetModifyUserGroupVersionEnum["TwoThousandAndFifteen0202"] = "2015-02-02";
})(GetModifyUserGroupVersionEnum = exports.GetModifyUserGroupVersionEnum || (exports.GetModifyUserGroupVersionEnum = {}));
var GetModifyUserGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyUserGroupQueryParams, _super);
    function GetModifyUserGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyUserGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=UserGroupId" }),
        __metadata("design:type", String)
    ], GetModifyUserGroupQueryParams.prototype, "userGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=UserIdsToAdd" }),
        __metadata("design:type", Array)
    ], GetModifyUserGroupQueryParams.prototype, "userIdsToAdd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=UserIdsToRemove" }),
        __metadata("design:type", Array)
    ], GetModifyUserGroupQueryParams.prototype, "userIdsToRemove", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyUserGroupQueryParams.prototype, "version", void 0);
    return GetModifyUserGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetModifyUserGroupQueryParams = GetModifyUserGroupQueryParams;
var GetModifyUserGroupHeaders = /** @class */ (function (_super) {
    __extends(GetModifyUserGroupHeaders, _super);
    function GetModifyUserGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyUserGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyUserGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyUserGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyUserGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyUserGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyUserGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyUserGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyUserGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.GetModifyUserGroupHeaders = GetModifyUserGroupHeaders;
var GetModifyUserGroupRequest = /** @class */ (function (_super) {
    __extends(GetModifyUserGroupRequest, _super);
    function GetModifyUserGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetModifyUserGroupQueryParams)
    ], GetModifyUserGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetModifyUserGroupHeaders)
    ], GetModifyUserGroupRequest.prototype, "headers", void 0);
    return GetModifyUserGroupRequest;
}(utils_1.SpeakeasyBase));
exports.GetModifyUserGroupRequest = GetModifyUserGroupRequest;
var GetModifyUserGroupResponse = /** @class */ (function (_super) {
    __extends(GetModifyUserGroupResponse, _super);
    function GetModifyUserGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetModifyUserGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetModifyUserGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetModifyUserGroupResponse.prototype, "statusCode", void 0);
    return GetModifyUserGroupResponse;
}(utils_1.SpeakeasyBase));
exports.GetModifyUserGroupResponse = GetModifyUserGroupResponse;
