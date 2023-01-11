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
exports.CreateTransitGatewayVpcAttachmentResult = exports.CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment = exports.CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions = void 0;
var utils_1 = require("../../../internal/utils");
// CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
/**
 * The VPC attachment options.
**/
var CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions, _super);
    function CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions.prototype, "applianceModeSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions.prototype, "dnsSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions.prototype, "ipv6Support", void 0);
    return CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions = CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions;
// CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
/**
 * Information about the VPC attachment.
**/
var CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment, _super);
    function CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "subnetIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "transitGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "vpcId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment.prototype, "vpcOwnerId", void 0);
    return CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment = CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment;
var CreateTransitGatewayVpcAttachmentResult = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayVpcAttachmentResult, _super);
    function CreateTransitGatewayVpcAttachmentResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment)
    ], CreateTransitGatewayVpcAttachmentResult.prototype, "transitGatewayVpcAttachment", void 0);
    return CreateTransitGatewayVpcAttachmentResult;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayVpcAttachmentResult = CreateTransitGatewayVpcAttachmentResult;
