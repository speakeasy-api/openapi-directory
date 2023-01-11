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
exports.GetModifyClusterDbRevisionResponse = exports.GetModifyClusterDbRevisionRequest = exports.GetModifyClusterDbRevisionHeaders = exports.GetModifyClusterDbRevisionQueryParams = exports.GetModifyClusterDbRevisionVersionEnum = exports.GetModifyClusterDbRevisionActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetModifyClusterDbRevisionActionEnum;
(function (GetModifyClusterDbRevisionActionEnum) {
    GetModifyClusterDbRevisionActionEnum["ModifyClusterDbRevision"] = "ModifyClusterDbRevision";
})(GetModifyClusterDbRevisionActionEnum = exports.GetModifyClusterDbRevisionActionEnum || (exports.GetModifyClusterDbRevisionActionEnum = {}));
var GetModifyClusterDbRevisionVersionEnum;
(function (GetModifyClusterDbRevisionVersionEnum) {
    GetModifyClusterDbRevisionVersionEnum["TwoThousandAndTwelve1201"] = "2012-12-01";
})(GetModifyClusterDbRevisionVersionEnum = exports.GetModifyClusterDbRevisionVersionEnum || (exports.GetModifyClusterDbRevisionVersionEnum = {}));
var GetModifyClusterDbRevisionQueryParams = /** @class */ (function (_super) {
    __extends(GetModifyClusterDbRevisionQueryParams, _super);
    function GetModifyClusterDbRevisionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ClusterIdentifier" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionQueryParams.prototype, "clusterIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=RevisionTarget" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionQueryParams.prototype, "revisionTarget", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionQueryParams.prototype, "version", void 0);
    return GetModifyClusterDbRevisionQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetModifyClusterDbRevisionQueryParams = GetModifyClusterDbRevisionQueryParams;
var GetModifyClusterDbRevisionHeaders = /** @class */ (function (_super) {
    __extends(GetModifyClusterDbRevisionHeaders, _super);
    function GetModifyClusterDbRevisionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetModifyClusterDbRevisionHeaders;
}(utils_1.SpeakeasyBase));
exports.GetModifyClusterDbRevisionHeaders = GetModifyClusterDbRevisionHeaders;
var GetModifyClusterDbRevisionRequest = /** @class */ (function (_super) {
    __extends(GetModifyClusterDbRevisionRequest, _super);
    function GetModifyClusterDbRevisionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetModifyClusterDbRevisionQueryParams)
    ], GetModifyClusterDbRevisionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetModifyClusterDbRevisionHeaders)
    ], GetModifyClusterDbRevisionRequest.prototype, "headers", void 0);
    return GetModifyClusterDbRevisionRequest;
}(utils_1.SpeakeasyBase));
exports.GetModifyClusterDbRevisionRequest = GetModifyClusterDbRevisionRequest;
var GetModifyClusterDbRevisionResponse = /** @class */ (function (_super) {
    __extends(GetModifyClusterDbRevisionResponse, _super);
    function GetModifyClusterDbRevisionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetModifyClusterDbRevisionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetModifyClusterDbRevisionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetModifyClusterDbRevisionResponse.prototype, "statusCode", void 0);
    return GetModifyClusterDbRevisionResponse;
}(utils_1.SpeakeasyBase));
exports.GetModifyClusterDbRevisionResponse = GetModifyClusterDbRevisionResponse;
