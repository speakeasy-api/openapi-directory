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
exports.AcceptTransitGatewayPeeringAttachmentResult = exports.AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = exports.AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = exports.AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = exports.AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = void 0;
var utils_1 = require("../../../internal/utils");
// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
/**
 * Information about the accepter transit gateway.
**/
var AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo, _super);
    function AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "transitGatewayId", void 0);
    return AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
}(utils_1.SpeakeasyBase));
exports.AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
/**
 * Information about the requester transit gateway.
**/
var AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo, _super);
    function AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "transitGatewayId", void 0);
    return AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
}(utils_1.SpeakeasyBase));
exports.AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
/**
 * The status of the transit gateway peering attachment.
**/
var AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus, _super);
    function AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus.prototype, "message", void 0);
    return AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
}(utils_1.SpeakeasyBase));
exports.AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
// AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
/**
 * The transit gateway peering attachment.
**/
var AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment, _super);
    function AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "accepterTgwInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "requesterTgwInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "transitGatewayAttachmentId", void 0);
    return AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}(utils_1.SpeakeasyBase));
exports.AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
var AcceptTransitGatewayPeeringAttachmentResult = /** @class */ (function (_super) {
    __extends(AcceptTransitGatewayPeeringAttachmentResult, _super);
    function AcceptTransitGatewayPeeringAttachmentResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment)
    ], AcceptTransitGatewayPeeringAttachmentResult.prototype, "transitGatewayPeeringAttachment", void 0);
    return AcceptTransitGatewayPeeringAttachmentResult;
}(utils_1.SpeakeasyBase));
exports.AcceptTransitGatewayPeeringAttachmentResult = AcceptTransitGatewayPeeringAttachmentResult;
