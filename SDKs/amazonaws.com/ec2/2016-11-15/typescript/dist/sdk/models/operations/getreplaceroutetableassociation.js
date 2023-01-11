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
exports.GetReplaceRouteTableAssociationResponse = exports.GetReplaceRouteTableAssociationRequest = exports.GetReplaceRouteTableAssociationHeaders = exports.GetReplaceRouteTableAssociationQueryParams = exports.GetReplaceRouteTableAssociationVersionEnum = exports.GetReplaceRouteTableAssociationActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetReplaceRouteTableAssociationActionEnum;
(function (GetReplaceRouteTableAssociationActionEnum) {
    GetReplaceRouteTableAssociationActionEnum["ReplaceRouteTableAssociation"] = "ReplaceRouteTableAssociation";
})(GetReplaceRouteTableAssociationActionEnum = exports.GetReplaceRouteTableAssociationActionEnum || (exports.GetReplaceRouteTableAssociationActionEnum = {}));
var GetReplaceRouteTableAssociationVersionEnum;
(function (GetReplaceRouteTableAssociationVersionEnum) {
    GetReplaceRouteTableAssociationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetReplaceRouteTableAssociationVersionEnum = exports.GetReplaceRouteTableAssociationVersionEnum || (exports.GetReplaceRouteTableAssociationVersionEnum = {}));
var GetReplaceRouteTableAssociationQueryParams = /** @class */ (function (_super) {
    __extends(GetReplaceRouteTableAssociationQueryParams, _super);
    function GetReplaceRouteTableAssociationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=AssociationId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationQueryParams.prototype, "associationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetReplaceRouteTableAssociationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=RouteTableId" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationQueryParams.prototype, "routeTableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationQueryParams.prototype, "version", void 0);
    return GetReplaceRouteTableAssociationQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetReplaceRouteTableAssociationQueryParams = GetReplaceRouteTableAssociationQueryParams;
var GetReplaceRouteTableAssociationHeaders = /** @class */ (function (_super) {
    __extends(GetReplaceRouteTableAssociationHeaders, _super);
    function GetReplaceRouteTableAssociationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetReplaceRouteTableAssociationHeaders;
}(utils_1.SpeakeasyBase));
exports.GetReplaceRouteTableAssociationHeaders = GetReplaceRouteTableAssociationHeaders;
var GetReplaceRouteTableAssociationRequest = /** @class */ (function (_super) {
    __extends(GetReplaceRouteTableAssociationRequest, _super);
    function GetReplaceRouteTableAssociationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReplaceRouteTableAssociationQueryParams)
    ], GetReplaceRouteTableAssociationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetReplaceRouteTableAssociationHeaders)
    ], GetReplaceRouteTableAssociationRequest.prototype, "headers", void 0);
    return GetReplaceRouteTableAssociationRequest;
}(utils_1.SpeakeasyBase));
exports.GetReplaceRouteTableAssociationRequest = GetReplaceRouteTableAssociationRequest;
var GetReplaceRouteTableAssociationResponse = /** @class */ (function (_super) {
    __extends(GetReplaceRouteTableAssociationResponse, _super);
    function GetReplaceRouteTableAssociationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetReplaceRouteTableAssociationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetReplaceRouteTableAssociationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetReplaceRouteTableAssociationResponse.prototype, "statusCode", void 0);
    return GetReplaceRouteTableAssociationResponse;
}(utils_1.SpeakeasyBase));
exports.GetReplaceRouteTableAssociationResponse = GetReplaceRouteTableAssociationResponse;
