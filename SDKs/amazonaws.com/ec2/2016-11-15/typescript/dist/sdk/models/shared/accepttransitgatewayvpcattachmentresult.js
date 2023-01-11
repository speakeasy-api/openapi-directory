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
exports.AcceptTransitGatewayVpcAttachmentResult = exports.AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment = exports.AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions = void 0;
var utils_1 = require("../../../internal/utils");
// AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
/**
 * The VPC attachment options.
**/
var AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions, _super);
    function AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions.prototype, "applianceModeSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions.prototype, "dnsSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions.prototype, "ipv6Support", void 0);
    return AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
}(utils_1.SpeakeasyBase));
exports.AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions = AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
// AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
/**
 * The VPC attachment.
**/
var AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment, _super);
    function AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "subnetIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "transitGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "vpcId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "vpcOwnerId", void 0);
    return AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}(utils_1.SpeakeasyBase));
exports.AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment = AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
var AcceptTransitGatewayVpcAttachmentResult = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayVpcAttachmentResult, _super);
    function AcceptTransitGatewayVpcAttachmentResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment)
    ], AcceptTransitGatewayVpcAttachmentResult.prototype, "transitGatewayVpcAttachment", void 0);
    return AcceptTransitGatewayVpcAttachmentResult;
}(utils_1.SpeakeasyBase));
exports.AcceptTransitGatewayVpcAttachmentResult = AcceptTransitGatewayVpcAttachmentResult;
