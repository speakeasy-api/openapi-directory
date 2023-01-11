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
exports.GetRejectTransitGatewayVpcAttachmentResponse = exports.GetRejectTransitGatewayVpcAttachmentRequest = exports.GetRejectTransitGatewayVpcAttachmentHeaders = exports.GetRejectTransitGatewayVpcAttachmentQueryParams = exports.GetRejectTransitGatewayVpcAttachmentVersionEnum = exports.GetRejectTransitGatewayVpcAttachmentActionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var GetRejectTransitGatewayVpcAttachmentActionEnum;
(function (GetRejectTransitGatewayVpcAttachmentActionEnum) {
    GetRejectTransitGatewayVpcAttachmentActionEnum["RejectTransitGatewayVpcAttachment"] = "RejectTransitGatewayVpcAttachment";
})(GetRejectTransitGatewayVpcAttachmentActionEnum = exports.GetRejectTransitGatewayVpcAttachmentActionEnum || (exports.GetRejectTransitGatewayVpcAttachmentActionEnum = {}));
var GetRejectTransitGatewayVpcAttachmentVersionEnum;
(function (GetRejectTransitGatewayVpcAttachmentVersionEnum) {
    GetRejectTransitGatewayVpcAttachmentVersionEnum["TwoThousandAndSixteen1115"] = "2016-11-15";
})(GetRejectTransitGatewayVpcAttachmentVersionEnum = exports.GetRejectTransitGatewayVpcAttachmentVersionEnum || (exports.GetRejectTransitGatewayVpcAttachmentVersionEnum = {}));
var GetRejectTransitGatewayVpcAttachmentQueryParams = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayVpcAttachmentQueryParams, _super);
    function GetRejectTransitGatewayVpcAttachmentQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Action" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentQueryParams.prototype, "action", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=DryRun" }),
        __metadata("design:type", Boolean)
    ], GetRejectTransitGatewayVpcAttachmentQueryParams.prototype, "dryRun", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=TransitGatewayAttachmentId" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentQueryParams.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=Version" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentQueryParams.prototype, "version", void 0);
    return GetRejectTransitGatewayVpcAttachmentQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetRejectTransitGatewayVpcAttachmentQueryParams = GetRejectTransitGatewayVpcAttachmentQueryParams;
var GetRejectTransitGatewayVpcAttachmentHeaders = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayVpcAttachmentHeaders, _super);
    function GetRejectTransitGatewayVpcAttachmentHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetRejectTransitGatewayVpcAttachmentHeaders;
}(utils_1.SpeakeasyBase));
exports.GetRejectTransitGatewayVpcAttachmentHeaders = GetRejectTransitGatewayVpcAttachmentHeaders;
var GetRejectTransitGatewayVpcAttachmentRequest = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayVpcAttachmentRequest, _super);
    function GetRejectTransitGatewayVpcAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRejectTransitGatewayVpcAttachmentQueryParams)
    ], GetRejectTransitGatewayVpcAttachmentRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetRejectTransitGatewayVpcAttachmentHeaders)
    ], GetRejectTransitGatewayVpcAttachmentRequest.prototype, "headers", void 0);
    return GetRejectTransitGatewayVpcAttachmentRequest;
}(utils_1.SpeakeasyBase));
exports.GetRejectTransitGatewayVpcAttachmentRequest = GetRejectTransitGatewayVpcAttachmentRequest;
var GetRejectTransitGatewayVpcAttachmentResponse = /** @class */ (function (_super) {
    __extends(GetRejectTransitGatewayVpcAttachmentResponse, _super);
    function GetRejectTransitGatewayVpcAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetRejectTransitGatewayVpcAttachmentResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetRejectTransitGatewayVpcAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetRejectTransitGatewayVpcAttachmentResponse.prototype, "statusCode", void 0);
    return GetRejectTransitGatewayVpcAttachmentResponse;
}(utils_1.SpeakeasyBase));
exports.GetRejectTransitGatewayVpcAttachmentResponse = GetRejectTransitGatewayVpcAttachmentResponse;
