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
exports.GetListIdentitiesResponse = exports.GetListIdentitiesRequest = exports.GetListIdentitiesHeaders = exports.GetListIdentitiesQueryParams = exports.GetListIdentitiesVersionEnum = exports.GetListIdentitiesIdentityTypeEnum = exports.GetListIdentitiesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetListIdentitiesActionEnum;
(function (GetListIdentitiesActionEnum) {
    GetListIdentitiesActionEnum["ListIdentities"] = "ListIdentities";
})(GetListIdentitiesActionEnum = exports.GetListIdentitiesActionEnum || (exports.GetListIdentitiesActionEnum = {}));
var GetListIdentitiesIdentityTypeEnum;
(function (GetListIdentitiesIdentityTypeEnum) {
    GetListIdentitiesIdentityTypeEnum["EmailAddress"] = "EmailAddress";
    GetListIdentitiesIdentityTypeEnum["Domain"] = "Domain";
})(GetListIdentitiesIdentityTypeEnum = exports.GetListIdentitiesIdentityTypeEnum || (exports.GetListIdentitiesIdentityTypeEnum = {}));
var GetListIdentitiesVersionEnum;
(function (GetListIdentitiesVersionEnum) {
    GetListIdentitiesVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetListIdentitiesVersionEnum = exports.GetListIdentitiesVersionEnum || (exports.GetListIdentitiesVersionEnum = {}));
var GetListIdentitiesQueryParams = /** @class */ (function (_super) {
    __extends(GetListIdentitiesQueryParams, _super);
    function GetListIdentitiesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListIdentitiesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=IdentityType" }),
        __metadata("design:type", String)
    ], GetListIdentitiesQueryParams.prototype, "identityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListIdentitiesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetListIdentitiesQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListIdentitiesQueryParams.prototype, "version", void 0);
    return GetListIdentitiesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListIdentitiesQueryParams = GetListIdentitiesQueryParams;
var GetListIdentitiesHeaders = /** @class */ (function (_super) {
    __extends(GetListIdentitiesHeaders, _super);
    function GetListIdentitiesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListIdentitiesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListIdentitiesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListIdentitiesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListIdentitiesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListIdentitiesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListIdentitiesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListIdentitiesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListIdentitiesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetListIdentitiesHeaders = GetListIdentitiesHeaders;
var GetListIdentitiesRequest = /** @class */ (function (_super) {
    __extends(GetListIdentitiesRequest, _super);
    function GetListIdentitiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListIdentitiesQueryParams)
    ], GetListIdentitiesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListIdentitiesHeaders)
    ], GetListIdentitiesRequest.prototype, "headers", void 0);
    return GetListIdentitiesRequest;
}(utils_1.SpeakeasyBase));
exports.GetListIdentitiesRequest = GetListIdentitiesRequest;
var GetListIdentitiesResponse = /** @class */ (function (_super) {
    __extends(GetListIdentitiesResponse, _super);
    function GetListIdentitiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetListIdentitiesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListIdentitiesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListIdentitiesResponse.prototype, "statusCode", void 0);
    return GetListIdentitiesResponse;
}(utils_1.SpeakeasyBase));
exports.GetListIdentitiesResponse = GetListIdentitiesResponse;
