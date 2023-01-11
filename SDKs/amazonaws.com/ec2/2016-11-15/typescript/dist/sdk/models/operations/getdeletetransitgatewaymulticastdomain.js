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
exports.GetDeleteTransitGatewayMulticastDomainResponse = exports.GetDeleteTransitGatewayMulticastDomainRequest = exports.GetDeleteTransitGatewayMulticastDomainHeaders = exports.GetDeleteTransitGatewayMulticastDomainQueryParams = exports.GetDeleteTransitGatewayMulticastDomainVersionEnum = exports.GetDeleteTransitGatewayMulticastDomainActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetDeleteTransitGatewayMulticastDomainActionEnum;
(function (GetDeleteTransitGatewayMulticastDomainActionEnum) {
    GetDeleteTransitGatewayMulticastDomainActionEnum["DeleteTransitGatewayMulticastDomain"] = "DeleteTransitGatewayMulticastDomain";
})(GetDeleteTransitGatewayMulticastDomainActionEnum = exports.GetDeleteTransitGatewayMulticastDomainActionEnum || (exports.GetDeleteTransitGatewayMulticastDomainActionEnum = {}));
var GetDeleteTransitGatewayMulticastDomainVersionEnum;
(function (GetDeleteTransitGatewayMulticastDomainVersionEnum) {
    GetDeleteTransitGatewayMulticastDomainVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetDeleteTransitGatewayMulticastDomainVersionEnum = exports.GetDeleteTransitGatewayMulticastDomainVersionEnum || (exports.GetDeleteTransitGatewayMulticastDomainVersionEnum = {}));
var GetDeleteTransitGatewayMulticastDomainQueryParams = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayMulticastDomainQueryParams, _super);
    function GetDeleteTransitGatewayMulticastDomainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetDeleteTransitGatewayMulticastDomainQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TransitGatewayMulticastDomainId" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainQueryParams.prototype, "transitGatewayMulticastDomainId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainQueryParams.prototype, "version", void 0);
    return GetDeleteTransitGatewayMulticastDomainQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDeleteTransitGatewayMulticastDomainQueryParams = GetDeleteTransitGatewayMulticastDomainQueryParams;
var GetDeleteTransitGatewayMulticastDomainHeaders = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayMulticastDomainHeaders, _super);
    function GetDeleteTransitGatewayMulticastDomainHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetDeleteTransitGatewayMulticastDomainHeaders;
}(utils_1.SpeakeasyBase));
exports.GetDeleteTransitGatewayMulticastDomainHeaders = GetDeleteTransitGatewayMulticastDomainHeaders;
var GetDeleteTransitGatewayMulticastDomainRequest = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayMulticastDomainRequest, _super);
    function GetDeleteTransitGatewayMulticastDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteTransitGatewayMulticastDomainQueryParams)
    ], GetDeleteTransitGatewayMulticastDomainRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDeleteTransitGatewayMulticastDomainHeaders)
    ], GetDeleteTransitGatewayMulticastDomainRequest.prototype, "headers", void 0);
    return GetDeleteTransitGatewayMulticastDomainRequest;
}(utils_1.SpeakeasyBase));
exports.GetDeleteTransitGatewayMulticastDomainRequest = GetDeleteTransitGatewayMulticastDomainRequest;
var GetDeleteTransitGatewayMulticastDomainResponse = /** @class */ (function (_super) {
    __extends(GetDeleteTransitGatewayMulticastDomainResponse, _super);
    function GetDeleteTransitGatewayMulticastDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetDeleteTransitGatewayMulticastDomainResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDeleteTransitGatewayMulticastDomainResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDeleteTransitGatewayMulticastDomainResponse.prototype, "statusCode", void 0);
    return GetDeleteTransitGatewayMulticastDomainResponse;
}(utils_1.SpeakeasyBase));
exports.GetDeleteTransitGatewayMulticastDomainResponse = GetDeleteTransitGatewayMulticastDomainResponse;
