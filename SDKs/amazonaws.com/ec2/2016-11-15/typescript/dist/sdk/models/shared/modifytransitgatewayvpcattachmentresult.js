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
exports.ModifyTransitGatewayVpcAttachmentResult = exports.ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment = exports.ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions = void 0;
var utils_1 = require("../../../internal/utils");
// ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
/**
 * The VPC attachment options.
**/
var ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions = /** @class */ (function (_super) {
    __extends(ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions, _super);
    function ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions.prototype, "applianceModeSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions.prototype, "dnsSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions.prototype, "ipv6Support", void 0);
    return ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
}(utils_1.SpeakeasyBase));
exports.ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions = ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
// ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
/**
 * Information about the modified attachment.
**/
var ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment = /** @class */ (function (_super) {
    __extends(ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment, _super);
    function ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "subnetIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "transitGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "vpcId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "vpcOwnerId", void 0);
    return ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}(utils_1.SpeakeasyBase));
exports.ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment = ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
var ModifyTransitGatewayVpcAttachmentResult = /** @class */ (function (_super) {
    __extends(ModifyTransitGatewayVpcAttachmentResult, _super);
    function ModifyTransitGatewayVpcAttachmentResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment)
    ], ModifyTransitGatewayVpcAttachmentResult.prototype, "transitGatewayVpcAttachment", void 0);
    return ModifyTransitGatewayVpcAttachmentResult;
}(utils_1.SpeakeasyBase));
exports.ModifyTransitGatewayVpcAttachmentResult = ModifyTransitGatewayVpcAttachmentResult;
