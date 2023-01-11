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
exports.GetUpdatePartnerStatusResponse = exports.GetUpdatePartnerStatusRequest = exports.GetUpdatePartnerStatusHeaders = exports.GetUpdatePartnerStatusQueryParams = exports.GetUpdatePartnerStatusVersionEnum = exports.GetUpdatePartnerStatusStatusEnum = exports.GetUpdatePartnerStatusActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetUpdatePartnerStatusActionEnum;
(function (GetUpdatePartnerStatusActionEnum) {
    GetUpdatePartnerStatusActionEnum["UpdatePartnerStatus"] = "UpdatePartnerStatus";
})(GetUpdatePartnerStatusActionEnum = exports.GetUpdatePartnerStatusActionEnum || (exports.GetUpdatePartnerStatusActionEnum = {}));
var GetUpdatePartnerStatusStatusEnum;
(function (GetUpdatePartnerStatusStatusEnum) {
    GetUpdatePartnerStatusStatusEnum["Active"] = "Active";
    GetUpdatePartnerStatusStatusEnum["Inactive"] = "Inactive";
    GetUpdatePartnerStatusStatusEnum["RuntimeFailure"] = "RuntimeFailure";
    GetUpdatePartnerStatusStatusEnum["ConnectionFailure"] = "ConnectionFailure";
})(GetUpdatePartnerStatusStatusEnum = exports.GetUpdatePartnerStatusStatusEnum || (exports.GetUpdatePartnerStatusStatusEnum = {}));
var GetUpdatePartnerStatusVersionEnum;
(function (GetUpdatePartnerStatusVersionEnum) {
    GetUpdatePartnerStatusVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetUpdatePartnerStatusVersionEnum = exports.GetUpdatePartnerStatusVersionEnum || (exports.GetUpdatePartnerStatusVersionEnum = {}));
var GetUpdatePartnerStatusQueryParams = /** @class */ (function (_super) {
    __extends(GetUpdatePartnerStatusQueryParams, _super);
    function GetUpdatePartnerStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AccountId" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusQueryParams.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DatabaseName" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusQueryParams.prototype, "databaseName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=PartnerName" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusQueryParams.prototype, "partnerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Status" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=StatusMessage" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusQueryParams.prototype, "statusMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusQueryParams.prototype, "version", void 0);
    return GetUpdatePartnerStatusQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUpdatePartnerStatusQueryParams = GetUpdatePartnerStatusQueryParams;
var GetUpdatePartnerStatusHeaders = /** @class */ (function (_super) {
    __extends(GetUpdatePartnerStatusHeaders, _super);
    function GetUpdatePartnerStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetUpdatePartnerStatusHeaders;
}(utils_1.SpeakeasyBase));
exports.GetUpdatePartnerStatusHeaders = GetUpdatePartnerStatusHeaders;
var GetUpdatePartnerStatusRequest = /** @class */ (function (_super) {
    __extends(GetUpdatePartnerStatusRequest, _super);
    function GetUpdatePartnerStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUpdatePartnerStatusQueryParams)
    ], GetUpdatePartnerStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUpdatePartnerStatusHeaders)
    ], GetUpdatePartnerStatusRequest.prototype, "headers", void 0);
    return GetUpdatePartnerStatusRequest;
}(utils_1.SpeakeasyBase));
exports.GetUpdatePartnerStatusRequest = GetUpdatePartnerStatusRequest;
var GetUpdatePartnerStatusResponse = /** @class */ (function (_super) {
    __extends(GetUpdatePartnerStatusResponse, _super);
    function GetUpdatePartnerStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUpdatePartnerStatusResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUpdatePartnerStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUpdatePartnerStatusResponse.prototype, "statusCode", void 0);
    return GetUpdatePartnerStatusResponse;
}(utils_1.SpeakeasyBase));
exports.GetUpdatePartnerStatusResponse = GetUpdatePartnerStatusResponse;
