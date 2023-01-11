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
exports.GetListDomainNamesResponse = exports.GetListDomainNamesRequest = exports.GetListDomainNamesHeaders = exports.GetListDomainNamesQueryParams = exports.GetListDomainNamesVersionEnum = exports.GetListDomainNamesActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetListDomainNamesActionEnum;
(function (GetListDomainNamesActionEnum) {
    GetListDomainNamesActionEnum["ListDomainNames"] = "ListDomainNames";
})(GetListDomainNamesActionEnum = exports.GetListDomainNamesActionEnum || (exports.GetListDomainNamesActionEnum = {}));
var GetListDomainNamesVersionEnum;
(function (GetListDomainNamesVersionEnum) {
    GetListDomainNamesVersionEnum["TwoThousandAndThirteen0101"] = "2013-01-01";
})(GetListDomainNamesVersionEnum = exports.GetListDomainNamesVersionEnum || (exports.GetListDomainNamesVersionEnum = {}));
var GetListDomainNamesQueryParams = /** @class */ (function (_super) {
    __extends(GetListDomainNamesQueryParams, _super);
    function GetListDomainNamesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListDomainNamesQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListDomainNamesQueryParams.prototype, "version", void 0);
    return GetListDomainNamesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListDomainNamesQueryParams = GetListDomainNamesQueryParams;
var GetListDomainNamesHeaders = /** @class */ (function (_super) {
    __extends(GetListDomainNamesHeaders, _super);
    function GetListDomainNamesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetListDomainNamesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetListDomainNamesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetListDomainNamesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetListDomainNamesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetListDomainNamesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetListDomainNamesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetListDomainNamesHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetListDomainNamesHeaders;
}(utils_1.SpeakeasyBase));
exports.GetListDomainNamesHeaders = GetListDomainNamesHeaders;
var GetListDomainNamesRequest = /** @class */ (function (_super) {
    __extends(GetListDomainNamesRequest, _super);
    function GetListDomainNamesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListDomainNamesQueryParams)
    ], GetListDomainNamesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListDomainNamesHeaders)
    ], GetListDomainNamesRequest.prototype, "headers", void 0);
    return GetListDomainNamesRequest;
}(utils_1.SpeakeasyBase));
exports.GetListDomainNamesRequest = GetListDomainNamesRequest;
var GetListDomainNamesResponse = /** @class */ (function (_super) {
    __extends(GetListDomainNamesResponse, _super);
    function GetListDomainNamesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetListDomainNamesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListDomainNamesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListDomainNamesResponse.prototype, "statusCode", void 0);
    return GetListDomainNamesResponse;
}(utils_1.SpeakeasyBase));
exports.GetListDomainNamesResponse = GetListDomainNamesResponse;
