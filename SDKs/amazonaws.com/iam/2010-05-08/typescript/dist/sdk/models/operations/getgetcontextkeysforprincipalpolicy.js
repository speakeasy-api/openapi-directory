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
exports.GetGetContextKeysForPrincipalPolicyResponse = exports.GetGetContextKeysForPrincipalPolicyRequest = exports.GetGetContextKeysForPrincipalPolicyHeaders = exports.GetGetContextKeysForPrincipalPolicyQueryParams = exports.GetGetContextKeysForPrincipalPolicyVersionEnum = exports.GetGetContextKeysForPrincipalPolicyActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetGetContextKeysForPrincipalPolicyActionEnum;
(function (GetGetContextKeysForPrincipalPolicyActionEnum) {
    GetGetContextKeysForPrincipalPolicyActionEnum["GetContextKeysForPrincipalPolicy"] = "GetContextKeysForPrincipalPolicy";
})(GetGetContextKeysForPrincipalPolicyActionEnum = exports.GetGetContextKeysForPrincipalPolicyActionEnum || (exports.GetGetContextKeysForPrincipalPolicyActionEnum = {}));
var GetGetContextKeysForPrincipalPolicyVersionEnum;
(function (GetGetContextKeysForPrincipalPolicyVersionEnum) {
    GetGetContextKeysForPrincipalPolicyVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetGetContextKeysForPrincipalPolicyVersionEnum = exports.GetGetContextKeysForPrincipalPolicyVersionEnum || (exports.GetGetContextKeysForPrincipalPolicyVersionEnum = {}));
var GetGetContextKeysForPrincipalPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GetGetContextKeysForPrincipalPolicyQueryParams, _super);
    function GetGetContextKeysForPrincipalPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PolicyInputList" }),
        __metadata("design:type", Array)
    ], GetGetContextKeysForPrincipalPolicyQueryParams.prototype, "policyInputList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PolicySourceArn" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyQueryParams.prototype, "policySourceArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyQueryParams.prototype, "version", void 0);
    return GetGetContextKeysForPrincipalPolicyQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetGetContextKeysForPrincipalPolicyQueryParams = GetGetContextKeysForPrincipalPolicyQueryParams;
var GetGetContextKeysForPrincipalPolicyHeaders = /** @class */ (function (_super) {
    __extends(GetGetContextKeysForPrincipalPolicyHeaders, _super);
    function GetGetContextKeysForPrincipalPolicyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetGetContextKeysForPrincipalPolicyHeaders;
}(utils_1.SpeakeasyBase));
exports.GetGetContextKeysForPrincipalPolicyHeaders = GetGetContextKeysForPrincipalPolicyHeaders;
var GetGetContextKeysForPrincipalPolicyRequest = /** @class */ (function (_super) {
    __extends(GetGetContextKeysForPrincipalPolicyRequest, _super);
    function GetGetContextKeysForPrincipalPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetContextKeysForPrincipalPolicyQueryParams)
    ], GetGetContextKeysForPrincipalPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetGetContextKeysForPrincipalPolicyHeaders)
    ], GetGetContextKeysForPrincipalPolicyRequest.prototype, "headers", void 0);
    return GetGetContextKeysForPrincipalPolicyRequest;
}(utils_1.SpeakeasyBase));
exports.GetGetContextKeysForPrincipalPolicyRequest = GetGetContextKeysForPrincipalPolicyRequest;
var GetGetContextKeysForPrincipalPolicyResponse = /** @class */ (function (_super) {
    __extends(GetGetContextKeysForPrincipalPolicyResponse, _super);
    function GetGetContextKeysForPrincipalPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetGetContextKeysForPrincipalPolicyResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetGetContextKeysForPrincipalPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetGetContextKeysForPrincipalPolicyResponse.prototype, "statusCode", void 0);
    return GetGetContextKeysForPrincipalPolicyResponse;
}(utils_1.SpeakeasyBase));
exports.GetGetContextKeysForPrincipalPolicyResponse = GetGetContextKeysForPrincipalPolicyResponse;
