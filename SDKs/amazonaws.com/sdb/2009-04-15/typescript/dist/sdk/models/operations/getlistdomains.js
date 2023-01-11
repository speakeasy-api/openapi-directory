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
exports.GetListDomainsResponse = exports.GetListDomainsRequest = exports.GetListDomainsQueryParams = exports.GetListDomainsVersionEnum = exports.GetListDomainsActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetListDomainsActionEnum;
(function (GetListDomainsActionEnum) {
    GetListDomainsActionEnum["ListDomains"] = "ListDomains";
})(GetListDomainsActionEnum = exports.GetListDomainsActionEnum || (exports.GetListDomainsActionEnum = {}));
var GetListDomainsVersionEnum;
(function (GetListDomainsVersionEnum) {
    GetListDomainsVersionEnum["TwoThousandAndNine0415"] = "2009-04-15";
})(GetListDomainsVersionEnum = exports.GetListDomainsVersionEnum || (exports.GetListDomainsVersionEnum = {}));
var GetListDomainsQueryParams = /** @class */ (function (_super) {
    __extends(GetListDomainsQueryParams, _super);
    function GetListDomainsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AWSAccessKeyId" }),
        __metadata("design:type", String)
    ], GetListDomainsQueryParams.prototype, "awsAccessKeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetListDomainsQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxNumberOfDomains" }),
        __metadata("design:type", Number)
    ], GetListDomainsQueryParams.prototype, "maxNumberOfDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetListDomainsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Signature" }),
        __metadata("design:type", String)
    ], GetListDomainsQueryParams.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SignatureMethod" }),
        __metadata("design:type", String)
    ], GetListDomainsQueryParams.prototype, "signatureMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=SignatureVersion" }),
        __metadata("design:type", String)
    ], GetListDomainsQueryParams.prototype, "signatureVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Timestamp" }),
        __metadata("design:type", String)
    ], GetListDomainsQueryParams.prototype, "timestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetListDomainsQueryParams.prototype, "version", void 0);
    return GetListDomainsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListDomainsQueryParams = GetListDomainsQueryParams;
var GetListDomainsRequest = /** @class */ (function (_super) {
    __extends(GetListDomainsRequest, _super);
    function GetListDomainsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListDomainsQueryParams)
    ], GetListDomainsRequest.prototype, "queryParams", void 0);
    return GetListDomainsRequest;
}(utils_1.SpeakeasyBase));
exports.GetListDomainsRequest = GetListDomainsRequest;
var GetListDomainsResponse = /** @class */ (function (_super) {
    __extends(GetListDomainsResponse, _super);
    function GetListDomainsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetListDomainsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListDomainsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListDomainsResponse.prototype, "statusCode", void 0);
    return GetListDomainsResponse;
}(utils_1.SpeakeasyBase));
exports.GetListDomainsResponse = GetListDomainsResponse;
