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
exports.RejectTransitGatewayPeeringAttachmentResult = exports.RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = exports.RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = exports.RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = exports.RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = void 0;
var utils_1 = require("../../../internal/utils");
// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
/**
 * Information about the accepter transit gateway.
**/
var RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = /** @class */ (function (_super) {
    __extends(RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo, _super);
    function RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "transitGatewayId", void 0);
    return RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
}(utils_1.SpeakeasyBase));
exports.RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
/**
 * Information about the requester transit gateway.
**/
var RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = /** @class */ (function (_super) {
    __extends(RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo, _super);
    function RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "transitGatewayId", void 0);
    return RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
}(utils_1.SpeakeasyBase));
exports.RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
/**
 * The status of the transit gateway peering attachment.
**/
var RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = /** @class */ (function (_super) {
    __extends(RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus, _super);
    function RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus.prototype, "message", void 0);
    return RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
}(utils_1.SpeakeasyBase));
exports.RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
// RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
/**
 * The transit gateway peering attachment.
**/
var RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = /** @class */ (function (_super) {
    __extends(RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment, _super);
    function RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "accepterTgwInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "requesterTgwInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "transitGatewayAttachmentId", void 0);
    return RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}(utils_1.SpeakeasyBase));
exports.RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
var RejectTransitGatewayPeeringAttachmentResult = /** @class */ (function (_super) {
    __extends(RejectTransitGatewayPeeringAttachmentResult, _super);
    function RejectTransitGatewayPeeringAttachmentResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment)
    ], RejectTransitGatewayPeeringAttachmentResult.prototype, "transitGatewayPeeringAttachment", void 0);
    return RejectTransitGatewayPeeringAttachmentResult;
}(utils_1.SpeakeasyBase));
exports.RejectTransitGatewayPeeringAttachmentResult = RejectTransitGatewayPeeringAttachmentResult;
