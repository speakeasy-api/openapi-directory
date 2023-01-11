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
exports.CreateTransitGatewayPeeringAttachmentResult = exports.CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = exports.CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = exports.CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = exports.CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = void 0;
var utils_1 = require("../../../internal/utils");
// CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
/**
 * Information about the accepter transit gateway.
**/
var CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo, _super);
    function CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo.prototype, "transitGatewayId", void 0);
    return CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo = CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo;
// CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
/**
 * Information about the requester transit gateway.
**/
var CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo, _super);
    function CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo.prototype, "transitGatewayId", void 0);
    return CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo = CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo;
// CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
/**
 * The status of the transit gateway peering attachment.
**/
var CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus, _super);
    function CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus.prototype, "message", void 0);
    return CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus = CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus;
// CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
/**
 * The transit gateway peering attachment.
**/
var CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment, _super);
    function CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "accepterTgwInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "requesterTgwInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment.prototype, "transitGatewayAttachmentId", void 0);
    return CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment = CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment;
var CreateTransitGatewayPeeringAttachmentResult = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayPeeringAttachmentResult, _super);
    function CreateTransitGatewayPeeringAttachmentResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment)
    ], CreateTransitGatewayPeeringAttachmentResult.prototype, "transitGatewayPeeringAttachment", void 0);
    return CreateTransitGatewayPeeringAttachmentResult;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayPeeringAttachmentResult = CreateTransitGatewayPeeringAttachmentResult;
