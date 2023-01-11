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
exports.GetFailoverGlobalClusterResponse = exports.GetFailoverGlobalClusterRequest = exports.GetFailoverGlobalClusterHeaders = exports.GetFailoverGlobalClusterQueryParams = exports.GetFailoverGlobalClusterVersionEnum = exports.GetFailoverGlobalClusterActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetFailoverGlobalClusterActionEnum;
(function (GetFailoverGlobalClusterActionEnum) {
    GetFailoverGlobalClusterActionEnum["FailoverGlobalCluster"] = "FailoverGlobalCluster";
})(GetFailoverGlobalClusterActionEnum = exports.GetFailoverGlobalClusterActionEnum || (exports.GetFailoverGlobalClusterActionEnum = {}));
var GetFailoverGlobalClusterVersionEnum;
(function (GetFailoverGlobalClusterVersionEnum) {
    GetFailoverGlobalClusterVersionEnum["TwoThousandAndFourteen1031"] = "2014-10-31";
})(GetFailoverGlobalClusterVersionEnum = exports.GetFailoverGlobalClusterVersionEnum || (exports.GetFailoverGlobalClusterVersionEnum = {}));
var GetFailoverGlobalClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetFailoverGlobalClusterQueryParams, _super);
    function GetFailoverGlobalClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=GlobalClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterQueryParams.prototype, "globalClusterIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TargetDbClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterQueryParams.prototype, "targetDbClusterIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterQueryParams.prototype, "version", void 0);
    return GetFailoverGlobalClusterQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetFailoverGlobalClusterQueryParams = GetFailoverGlobalClusterQueryParams;
var GetFailoverGlobalClusterHeaders = /** @class */ (function (_super) {
    __extends(GetFailoverGlobalClusterHeaders, _super);
    function GetFailoverGlobalClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetFailoverGlobalClusterHeaders;
}(utils_1.SpeakeasyBase));
exports.GetFailoverGlobalClusterHeaders = GetFailoverGlobalClusterHeaders;
var GetFailoverGlobalClusterRequest = /** @class */ (function (_super) {
    __extends(GetFailoverGlobalClusterRequest, _super);
    function GetFailoverGlobalClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFailoverGlobalClusterQueryParams)
    ], GetFailoverGlobalClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFailoverGlobalClusterHeaders)
    ], GetFailoverGlobalClusterRequest.prototype, "headers", void 0);
    return GetFailoverGlobalClusterRequest;
}(utils_1.SpeakeasyBase));
exports.GetFailoverGlobalClusterRequest = GetFailoverGlobalClusterRequest;
var GetFailoverGlobalClusterResponse = /** @class */ (function (_super) {
    __extends(GetFailoverGlobalClusterResponse, _super);
    function GetFailoverGlobalClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetFailoverGlobalClusterResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFailoverGlobalClusterResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFailoverGlobalClusterResponse.prototype, "statusCode", void 0);
    return GetFailoverGlobalClusterResponse;
}(utils_1.SpeakeasyBase));
exports.GetFailoverGlobalClusterResponse = GetFailoverGlobalClusterResponse;
