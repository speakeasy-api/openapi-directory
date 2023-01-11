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
exports.GetEnableTransitGatewayRouteTablePropagationResponse = exports.GetEnableTransitGatewayRouteTablePropagationRequest = exports.GetEnableTransitGatewayRouteTablePropagationHeaders = exports.GetEnableTransitGatewayRouteTablePropagationQueryParams = exports.GetEnableTransitGatewayRouteTablePropagationVersionEnum = exports.GetEnableTransitGatewayRouteTablePropagationActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetEnableTransitGatewayRouteTablePropagationActionEnum;
(function (GetEnableTransitGatewayRouteTablePropagationActionEnum) {
    GetEnableTransitGatewayRouteTablePropagationActionEnum["EnableTransitGatewayRouteTablePropagation"] = "EnableTransitGatewayRouteTablePropagation";
})(GetEnableTransitGatewayRouteTablePropagationActionEnum = exports.GetEnableTransitGatewayRouteTablePropagationActionEnum || (exports.GetEnableTransitGatewayRouteTablePropagationActionEnum = {}));
var GetEnableTransitGatewayRouteTablePropagationVersionEnum;
(function (GetEnableTransitGatewayRouteTablePropagationVersionEnum) {
    GetEnableTransitGatewayRouteTablePropagationVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetEnableTransitGatewayRouteTablePropagationVersionEnum = exports.GetEnableTransitGatewayRouteTablePropagationVersionEnum || (exports.GetEnableTransitGatewayRouteTablePropagationVersionEnum = {}));
var GetEnableTransitGatewayRouteTablePropagationQueryParams = /** @class */ (function (_super) {
    __extends(GetEnableTransitGatewayRouteTablePropagationQueryParams, _super);
    function GetEnableTransitGatewayRouteTablePropagationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetEnableTransitGatewayRouteTablePropagationQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TransitGatewayRouteTableId" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationQueryParams.prototype, "transitGatewayRouteTableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationQueryParams.prototype, "version", void 0);
    return GetEnableTransitGatewayRouteTablePropagationQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetEnableTransitGatewayRouteTablePropagationQueryParams = GetEnableTransitGatewayRouteTablePropagationQueryParams;
var GetEnableTransitGatewayRouteTablePropagationHeaders = /** @class */ (function (_super) {
    __extends(GetEnableTransitGatewayRouteTablePropagationHeaders, _super);
    function GetEnableTransitGatewayRouteTablePropagationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetEnableTransitGatewayRouteTablePropagationHeaders;
}(utils_1.SpeakeasyBase));
exports.GetEnableTransitGatewayRouteTablePropagationHeaders = GetEnableTransitGatewayRouteTablePropagationHeaders;
var GetEnableTransitGatewayRouteTablePropagationRequest = /** @class */ (function (_super) {
    __extends(GetEnableTransitGatewayRouteTablePropagationRequest, _super);
    function GetEnableTransitGatewayRouteTablePropagationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEnableTransitGatewayRouteTablePropagationQueryParams)
    ], GetEnableTransitGatewayRouteTablePropagationRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetEnableTransitGatewayRouteTablePropagationHeaders)
    ], GetEnableTransitGatewayRouteTablePropagationRequest.prototype, "headers", void 0);
    return GetEnableTransitGatewayRouteTablePropagationRequest;
}(utils_1.SpeakeasyBase));
exports.GetEnableTransitGatewayRouteTablePropagationRequest = GetEnableTransitGatewayRouteTablePropagationRequest;
var GetEnableTransitGatewayRouteTablePropagationResponse = /** @class */ (function (_super) {
    __extends(GetEnableTransitGatewayRouteTablePropagationResponse, _super);
    function GetEnableTransitGatewayRouteTablePropagationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetEnableTransitGatewayRouteTablePropagationResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetEnableTransitGatewayRouteTablePropagationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetEnableTransitGatewayRouteTablePropagationResponse.prototype, "statusCode", void 0);
    return GetEnableTransitGatewayRouteTablePropagationResponse;
}(utils_1.SpeakeasyBase));
exports.GetEnableTransitGatewayRouteTablePropagationResponse = GetEnableTransitGatewayRouteTablePropagationResponse;
