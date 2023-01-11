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
exports.GetRetrieveEnvironmentInfoResponse = exports.GetRetrieveEnvironmentInfoRequest = exports.GetRetrieveEnvironmentInfoHeaders = exports.GetRetrieveEnvironmentInfoQueryParams = exports.GetRetrieveEnvironmentInfoVersionEnum = exports.GetRetrieveEnvironmentInfoInfoTypeEnum = exports.GetRetrieveEnvironmentInfoActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetRetrieveEnvironmentInfoActionEnum;
(function (GetRetrieveEnvironmentInfoActionEnum) {
    GetRetrieveEnvironmentInfoActionEnum["RetrieveEnvironmentInfo"] = "RetrieveEnvironmentInfo";
})(GetRetrieveEnvironmentInfoActionEnum = exports.GetRetrieveEnvironmentInfoActionEnum || (exports.GetRetrieveEnvironmentInfoActionEnum = {}));
var GetRetrieveEnvironmentInfoInfoTypeEnum;
(function (GetRetrieveEnvironmentInfoInfoTypeEnum) {
    GetRetrieveEnvironmentInfoInfoTypeEnum["Tail"] = "tail";
    GetRetrieveEnvironmentInfoInfoTypeEnum["Bundle"] = "bundle";
})(GetRetrieveEnvironmentInfoInfoTypeEnum = exports.GetRetrieveEnvironmentInfoInfoTypeEnum || (exports.GetRetrieveEnvironmentInfoInfoTypeEnum = {}));
var GetRetrieveEnvironmentInfoVersionEnum;
(function (GetRetrieveEnvironmentInfoVersionEnum) {
    GetRetrieveEnvironmentInfoVersionEnum["TwoThousandAndTen1201"] = "2010-12-01";
})(GetRetrieveEnvironmentInfoVersionEnum = exports.GetRetrieveEnvironmentInfoVersionEnum || (exports.GetRetrieveEnvironmentInfoVersionEnum = {}));
var GetRetrieveEnvironmentInfoQueryParams = /** @class */ (function (_super) {
    __extends(GetRetrieveEnvironmentInfoQueryParams, _super);
    function GetRetrieveEnvironmentInfoQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EnvironmentId" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoQueryParams.prototype, "environmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=EnvironmentName" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoQueryParams.prototype, "environmentName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=InfoType" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoQueryParams.prototype, "infoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoQueryParams.prototype, "version", void 0);
    return GetRetrieveEnvironmentInfoQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRetrieveEnvironmentInfoQueryParams = GetRetrieveEnvironmentInfoQueryParams;
var GetRetrieveEnvironmentInfoHeaders = /** @class */ (function (_super) {
    __extends(GetRetrieveEnvironmentInfoHeaders, _super);
    function GetRetrieveEnvironmentInfoHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRetrieveEnvironmentInfoHeaders;
}(utils_1.SpeakeasyBase));
exports.GetRetrieveEnvironmentInfoHeaders = GetRetrieveEnvironmentInfoHeaders;
var GetRetrieveEnvironmentInfoRequest = /** @class */ (function (_super) {
    __extends(GetRetrieveEnvironmentInfoRequest, _super);
    function GetRetrieveEnvironmentInfoRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRetrieveEnvironmentInfoQueryParams)
    ], GetRetrieveEnvironmentInfoRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRetrieveEnvironmentInfoHeaders)
    ], GetRetrieveEnvironmentInfoRequest.prototype, "headers", void 0);
    return GetRetrieveEnvironmentInfoRequest;
}(utils_1.SpeakeasyBase));
exports.GetRetrieveEnvironmentInfoRequest = GetRetrieveEnvironmentInfoRequest;
var GetRetrieveEnvironmentInfoResponse = /** @class */ (function (_super) {
    __extends(GetRetrieveEnvironmentInfoResponse, _super);
    function GetRetrieveEnvironmentInfoResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetRetrieveEnvironmentInfoResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRetrieveEnvironmentInfoResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRetrieveEnvironmentInfoResponse.prototype, "statusCode", void 0);
    return GetRetrieveEnvironmentInfoResponse;
}(utils_1.SpeakeasyBase));
exports.GetRetrieveEnvironmentInfoResponse = GetRetrieveEnvironmentInfoResponse;
