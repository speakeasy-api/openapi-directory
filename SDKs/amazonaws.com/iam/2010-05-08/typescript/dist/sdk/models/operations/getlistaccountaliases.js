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
exports.GetListAccountAliasesResponse = exports.GetListAccountAliasesRequest = exports.GetListAccountAliasesHeaders = exports.GetListAccountAliasesQueryParams = exports.GetListAccountAliasesVersionEnum = exports.GetListAccountAliasesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetListAccountAliasesActionEnum;
(function (GetListAccountAliasesActionEnum) {
    GetListAccountAliasesActionEnum["ListAccountAliases"] = "ListAccountAliases";
})(GetListAccountAliasesActionEnum = exports.GetListAccountAliasesActionEnum || (exports.GetListAccountAliasesActionEnum = {}));
var GetListAccountAliasesVersionEnum;
(function (GetListAccountAliasesVersionEnum) {
    GetListAccountAliasesVersionEnum["TwoThousandAndTen0508"] = "2010-05-08";
})(GetListAccountAliasesVersionEnum = exports.GetListAccountAliasesVersionEnum || (exports.GetListAccountAliasesVersionEnum = {}));
var GetListAccountAliasesQueryParams = /** @class */ (function (_super) {
    __extends(GetListAccountAliasesQueryParams, _super);
    function GetListAccountAliasesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Marker" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesQueryParams.prototype, "marker", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxItems" }),
        __metadata("design:type", Number)
    ], GetListAccountAliasesQueryParams.prototype, "maxItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesQueryParams.prototype, "version", void 0);
    return GetListAccountAliasesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListAccountAliasesQueryParams = GetListAccountAliasesQueryParams;
var GetListAccountAliasesHeaders = /** @class */ (function (_super) {
    __extends(GetListAccountAliasesHeaders, _super);
    function GetListAccountAliasesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListAccountAliasesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListAccountAliasesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetListAccountAliasesHeaders = GetListAccountAliasesHeaders;
var GetListAccountAliasesRequest = /** @class */ (function (_super) {
    __extends(GetListAccountAliasesRequest, _super);
    function GetListAccountAliasesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListAccountAliasesQueryParams)
    ], GetListAccountAliasesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListAccountAliasesHeaders)
    ], GetListAccountAliasesRequest.prototype, "headers", void 0);
    return GetListAccountAliasesRequest;
}(utils_1.SpeakeasyBase));
exports.GetListAccountAliasesRequest = GetListAccountAliasesRequest;
var GetListAccountAliasesResponse = /** @class */ (function (_super) {
    __extends(GetListAccountAliasesResponse, _super);
    function GetListAccountAliasesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetListAccountAliasesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListAccountAliasesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListAccountAliasesResponse.prototype, "statusCode", void 0);
    return GetListAccountAliasesResponse;
}(utils_1.SpeakeasyBase));
exports.GetListAccountAliasesResponse = GetListAccountAliasesResponse;
