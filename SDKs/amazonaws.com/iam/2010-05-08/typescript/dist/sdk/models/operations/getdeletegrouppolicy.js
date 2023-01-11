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
exports.GetDeleteGroupPolicyResponse = exports.GetDeleteGroupPolicyRequest = exports.GetDeleteGroupPolicyHeaders = exports.GetDeleteGroupPolicyQueryParams = exports.GetDeleteGroupPolicyVersionEnum = exports.GetDeleteGroupPolicyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteGroupPolicyActionEnum;
(function (GetDeleteGroupPolicyActionEnum) {
    GetDeleteGroupPolicyActionEnum["DeleteGroupPolicy"] = "DeleteGroupPolicy";
})(GetDeleteGroupPolicyActionEnum = exports.GetDeleteGroupPolicyActionEnum || (exports.GetDeleteGroupPolicyActionEnum = {}));
var GetDeleteGroupPolicyVersionEnum;
(function (GetDeleteGroupPolicyVersionEnum) {
    GetDeleteGroupPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetDeleteGroupPolicyVersionEnum = exports.GetDeleteGroupPolicyVersionEnum || (exports.GetDeleteGroupPolicyVersionEnum = {}));
var GetDeleteGroupPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteGroupPolicyQueryParams, _super);
    function GetDeleteGroupPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=GroupName" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyQueryParams.prototype, "groupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyQueryParams.prototype, "version", void 0);
    return GetDeleteGroupPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteGroupPolicyQueryParams = GetDeleteGroupPolicyQueryParams;
var GetDeleteGroupPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteGroupPolicyHeaders, _super);
    function GetDeleteGroupPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteGroupPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteGroupPolicyHeaders = GetDeleteGroupPolicyHeaders;
var GetDeleteGroupPolicyRequest = /** @class */ (function (_super) {
    __extends(GetDeleteGroupPolicyRequest, _super);
    function GetDeleteGroupPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteGroupPolicyQueryParams)
    ], GetDeleteGroupPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteGroupPolicyHeaders)
    ], GetDeleteGroupPolicyRequest.prototype, "headers", void 0);
    return GetDeleteGroupPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteGroupPolicyRequest = GetDeleteGroupPolicyRequest;
var GetDeleteGroupPolicyResponse = /** @class */ (function (_super) {
    __extends(GetDeleteGroupPolicyResponse, _super);
    function GetDeleteGroupPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteGroupPolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteGroupPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteGroupPolicyResponse.prototype, "statusCode", void 0);
    return GetDeleteGroupPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteGroupPolicyResponse = GetDeleteGroupPolicyResponse;
