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
exports.GetListPoliciesResponse = exports.GetListPoliciesRequest = exports.GetListPoliciesHeaders = exports.GetListPoliciesQueryParams = exports.GetListPoliciesVersionEnum = exports.GetListPoliciesScopeEnum = exports.GetListPoliciesPolicyUsageFilterEnum = exports.GetListPoliciesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetListPoliciesActionEnum;
(function (GetListPoliciesActionEnum) {
    GetListPoliciesActionEnum["ListPolicies"] = "ListPolicies";
})(GetListPoliciesActionEnum = exports.GetListPoliciesActionEnum || (exports.GetListPoliciesActionEnum = {}));
var GetListPoliciesPolicyUsageFilterEnum;
(function (GetListPoliciesPolicyUsageFilterEnum) {
    GetListPoliciesPolicyUsageFilterEnum["PermissionsPolicy"] = "PermissionsPolicy";
    GetListPoliciesPolicyUsageFilterEnum["PermissionsBoundary"] = "PermissionsBoundary";
})(GetListPoliciesPolicyUsageFilterEnum = exports.GetListPoliciesPolicyUsageFilterEnum || (exports.GetListPoliciesPolicyUsageFilterEnum = {}));
var GetListPoliciesScopeEnum;
(function (GetListPoliciesScopeEnum) {
    GetListPoliciesScopeEnum["All"] = "All";
    GetListPoliciesScopeEnum["Aws"] = "AWS";
    GetListPoliciesScopeEnum["Local"] = "Local";
})(GetListPoliciesScopeEnum = exports.GetListPoliciesScopeEnum || (exports.GetListPoliciesScopeEnum = {}));
var GetListPoliciesVersionEnum;
(function (GetListPoliciesVersionEnum) {
    GetListPoliciesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListPoliciesVersionEnum = exports.GetListPoliciesVersionEnum || (exports.GetListPoliciesVersionEnum = {}));
var GetListPoliciesQueryParams = /** @class */ (function (_super) {
    __extends(GetListPoliciesQueryParams, _super);
    function GetListPoliciesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListPoliciesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListPoliciesQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListPoliciesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=OnlyAttached" }),
        __metadata("design:type", Boolean)
    ], GetListPoliciesQueryParams.prototype, "onlyAttached", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PathPrefix" }),
        __metadata("design:type", String)
    ], GetListPoliciesQueryParams.prototype, "pathPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PolicyUsageFilter" }),
        __metadata("design:type", String)
    ], GetListPoliciesQueryParams.prototype, "policyUsageFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Scope" }),
        __metadata("design:type", String)
    ], GetListPoliciesQueryParams.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListPoliciesQueryParams.prototype, "version", void 0);
    return GetListPoliciesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListPoliciesQueryParams = GetListPoliciesQueryParams;
var GetListPoliciesHeaders = /** @class */ (function (_super) {
    __extends(GetListPoliciesHeaders, _super);
    function GetListPoliciesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListPoliciesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListPoliciesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListPoliciesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListPoliciesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListPoliciesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListPoliciesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListPoliciesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListPoliciesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetListPoliciesHeaders = GetListPoliciesHeaders;
var GetListPoliciesRequest = /** @class */ (function (_super) {
    __extends(GetListPoliciesRequest, _super);
    function GetListPoliciesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListPoliciesQueryParams)
    ], GetListPoliciesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListPoliciesHeaders)
    ], GetListPoliciesRequest.prototype, "headers", void 0);
    return GetListPoliciesRequest;
}(utils_1.SpeakeasyBase));
exports.GetListPoliciesRequest = GetListPoliciesRequest;
var GetListPoliciesResponse = /** @class */ (function (_super) {
    __extends(GetListPoliciesResponse, _super);
    function GetListPoliciesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetListPoliciesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListPoliciesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListPoliciesResponse.prototype, "statusCode", void 0);
    return GetListPoliciesResponse;
}(utils_1.SpeakeasyBase));
exports.GetListPoliciesResponse = GetListPoliciesResponse;
