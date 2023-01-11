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
exports.GetCreateOptionGroupResponse = exports.GetCreateOptionGroupRequest = exports.GetCreateOptionGroupHeaders = exports.GetCreateOptionGroupQueryParams = exports.GetCreateOptionGroupVersionEnum = exports.GetCreateOptionGroupActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetCreateOptionGroupActionEnum;
(function (GetCreateOptionGroupActionEnum) {
    GetCreateOptionGroupActionEnum["CreateOptionGroup"] = "CreateOptionGroup";
})(GetCreateOptionGroupActionEnum = exports.GetCreateOptionGroupActionEnum || (exports.GetCreateOptionGroupActionEnum = {}));
var GetCreateOptionGroupVersionEnum;
(function (GetCreateOptionGroupVersionEnum) {
    GetCreateOptionGroupVersionEnum["TwoThousandAndThirteen0212"] = "2013-02-12";
})(GetCreateOptionGroupVersionEnum = exports.GetCreateOptionGroupVersionEnum || (exports.GetCreateOptionGroupVersionEnum = {}));
var GetCreateOptionGroupQueryParams = /** @class */ (function (_super) {
    __extends(GetCreateOptionGroupQueryParams, _super);
    function GetCreateOptionGroupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EngineName" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupQueryParams.prototype, "engineName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MajorEngineVersion" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupQueryParams.prototype, "majorEngineVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=OptionGroupDescription" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupQueryParams.prototype, "optionGroupDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=OptionGroupName" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupQueryParams.prototype, "optionGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupQueryParams.prototype, "version", void 0);
    return GetCreateOptionGroupQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCreateOptionGroupQueryParams = GetCreateOptionGroupQueryParams;
var GetCreateOptionGroupHeaders = /** @class */ (function (_super) {
    __extends(GetCreateOptionGroupHeaders, _super);
    function GetCreateOptionGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetCreateOptionGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetCreateOptionGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.GetCreateOptionGroupHeaders = GetCreateOptionGroupHeaders;
var GetCreateOptionGroupRequest = /** @class */ (function (_super) {
    __extends(GetCreateOptionGroupRequest, _super);
    function GetCreateOptionGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreateOptionGroupQueryParams)
    ], GetCreateOptionGroupRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCreateOptionGroupHeaders)
    ], GetCreateOptionGroupRequest.prototype, "headers", void 0);
    return GetCreateOptionGroupRequest;
}(utils_1.SpeakeasyBase));
exports.GetCreateOptionGroupRequest = GetCreateOptionGroupRequest;
var GetCreateOptionGroupResponse = /** @class */ (function (_super) {
    __extends(GetCreateOptionGroupResponse, _super);
    function GetCreateOptionGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetCreateOptionGroupResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCreateOptionGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCreateOptionGroupResponse.prototype, "statusCode", void 0);
    return GetCreateOptionGroupResponse;
}(utils_1.SpeakeasyBase));
exports.GetCreateOptionGroupResponse = GetCreateOptionGroupResponse;
