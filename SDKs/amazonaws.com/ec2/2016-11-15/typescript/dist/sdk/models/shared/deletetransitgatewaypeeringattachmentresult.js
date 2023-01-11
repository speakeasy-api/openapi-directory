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
exports.DeleteTransitGatewayPeeringAttachmentResult = exports.DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = exports.DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = exports.DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = exports.DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = void 0;
var utils_1 = require("../../../internal/utils");
// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
/**
 * Information about the accepter transit gateway.
**/
var DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo, _super);
    function DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "transitGatewayId", void 0);
    return DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
/**
 * Information about the requester transit gateway.
**/
var DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo, _super);
    function DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "transitGatewayId", void 0);
    return DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
/**
 * The status of the transit gateway peering attachment.
**/
var DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus, _super);
    function DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus.prototype, "message", void 0);
    return DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
// DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
/**
 * The transit gateway peering attachment.
**/
var DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment, _super);
    function DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "accepterTgwInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "requesterTgwInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "transitGatewayAttachmentId", void 0);
    return DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
var DeleteTransitGatewayPeeringAttachmentResult = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayPeeringAttachmentResult, _super);
    function DeleteTransitGatewayPeeringAttachmentResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment)
    ], DeleteTransitGatewayPeeringAttachmentResult.prototype, "transitGatewayPeeringAttachment", void 0);
    return DeleteTransitGatewayPeeringAttachmentResult;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayPeeringAttachmentResult = DeleteTransitGatewayPeeringAttachmentResult;
