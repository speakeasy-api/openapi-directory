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
exports.GetDeleteIdentityPolicyResponse = exports.GetDeleteIdentityPolicyRequest = exports.GetDeleteIdentityPolicyHeaders = exports.GetDeleteIdentityPolicyQueryParams = exports.GetDeleteIdentityPolicyVersionEnum = exports.GetDeleteIdentityPolicyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteIdentityPolicyActionEnum;
(function (GetDeleteIdentityPolicyActionEnum) {
    GetDeleteIdentityPolicyActionEnum["DeleteIdentityPolicy"] = "DeleteIdentityPolicy";
})(GetDeleteIdentityPolicyActionEnum = exports.GetDeleteIdentityPolicyActionEnum || (exports.GetDeleteIdentityPolicyActionEnum = {}));
var GetDeleteIdentityPolicyVersionEnum;
(function (GetDeleteIdentityPolicyVersionEnum) {
    GetDeleteIdentityPolicyVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetDeleteIdentityPolicyVersionEnum = exports.GetDeleteIdentityPolicyVersionEnum || (exports.GetDeleteIdentityPolicyVersionEnum = {}));
var GetDeleteIdentityPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteIdentityPolicyQueryParams, _super);
    function GetDeleteIdentityPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Identity" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyQueryParams.prototype, "identity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PolicyName" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyQueryParams.prototype, "policyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyQueryParams.prototype, "version", void 0);
    return GetDeleteIdentityPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteIdentityPolicyQueryParams = GetDeleteIdentityPolicyQueryParams;
var GetDeleteIdentityPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteIdentityPolicyHeaders, _super);
    function GetDeleteIdentityPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteIdentityPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteIdentityPolicyHeaders = GetDeleteIdentityPolicyHeaders;
var GetDeleteIdentityPolicyRequest = /** @class */ (function (_super) {
    __extends(GetDeleteIdentityPolicyRequest, _super);
    function GetDeleteIdentityPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteIdentityPolicyQueryParams)
    ], GetDeleteIdentityPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteIdentityPolicyHeaders)
    ], GetDeleteIdentityPolicyRequest.prototype, "headers", void 0);
    return GetDeleteIdentityPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteIdentityPolicyRequest = GetDeleteIdentityPolicyRequest;
var GetDeleteIdentityPolicyResponse = /** @class */ (function (_super) {
    __extends(GetDeleteIdentityPolicyResponse, _super);
    function GetDeleteIdentityPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteIdentityPolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteIdentityPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteIdentityPolicyResponse.prototype, "statusCode", void 0);
    return GetDeleteIdentityPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteIdentityPolicyResponse = GetDeleteIdentityPolicyResponse;
