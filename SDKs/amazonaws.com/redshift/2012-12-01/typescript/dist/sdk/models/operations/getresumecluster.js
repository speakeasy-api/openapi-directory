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
exports.GetResumeClusterResponse = exports.GetResumeClusterRequest = exports.GetResumeClusterHeaders = exports.GetResumeClusterQueryParams = exports.GetResumeClusterVersionEnum = exports.GetResumeClusterActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetResumeClusterActionEnum;
(function (GetResumeClusterActionEnum) {
    GetResumeClusterActionEnum["ResumeCluster"] = "ResumeCluster";
})(GetResumeClusterActionEnum = exports.GetResumeClusterActionEnum || (exports.GetResumeClusterActionEnum = {}));
var GetResumeClusterVersionEnum;
(function (GetResumeClusterVersionEnum) {
    GetResumeClusterVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetResumeClusterVersionEnum = exports.GetResumeClusterVersionEnum || (exports.GetResumeClusterVersionEnum = {}));
var GetResumeClusterQueryParams = /** @class */ (function (_super) {
    __extends(GetResumeClusterQueryParams, _super);
    function GetResumeClusterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetResumeClusterQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetResumeClusterQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetResumeClusterQueryParams.prototype, "version", void 0);
    return GetResumeClusterQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetResumeClusterQueryParams = GetResumeClusterQueryParams;
var GetResumeClusterHeaders = /** @class */ (function (_super) {
    __extends(GetResumeClusterHeaders, _super);
    function GetResumeClusterHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetResumeClusterHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetResumeClusterHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetResumeClusterHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetResumeClusterHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetResumeClusterHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetResumeClusterHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetResumeClusterHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetResumeClusterHeaders;
}(utils_1.SpeakeasyBase));
exports.GetResumeClusterHeaders = GetResumeClusterHeaders;
var GetResumeClusterRequest = /** @class */ (function (_super) {
    __extends(GetResumeClusterRequest, _super);
    function GetResumeClusterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResumeClusterQueryParams)
    ], GetResumeClusterRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetResumeClusterHeaders)
    ], GetResumeClusterRequest.prototype, "headers", void 0);
    return GetResumeClusterRequest;
}(utils_1.SpeakeasyBase));
exports.GetResumeClusterRequest = GetResumeClusterRequest;
var GetResumeClusterResponse = /** @class */ (function (_super) {
    __extends(GetResumeClusterResponse, _super);
    function GetResumeClusterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetResumeClusterResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetResumeClusterResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetResumeClusterResponse.prototype, "statusCode", void 0);
    return GetResumeClusterResponse;
}(utils_1.SpeakeasyBase));
exports.GetResumeClusterResponse = GetResumeClusterResponse;
