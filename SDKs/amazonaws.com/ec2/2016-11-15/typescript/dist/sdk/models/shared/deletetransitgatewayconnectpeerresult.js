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
exports.DeleteTransitGatewayConnectPeerResult = exports.DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer = exports.DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
// DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
/**
 * The Connect peer details.
**/
var DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration, _super);
    function DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration.prototype, "bgpConfigurations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration.prototype, "insideCidrBlocks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration.prototype, "peerAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration.prototype, "transitGatewayAddress", void 0);
    return DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration = DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration;
// DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer
/**
 * Information about the deleted Connect peer.
**/
var DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer, _super);
    function DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "connectPeerConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "transitGatewayConnectPeerId", void 0);
    return DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer = DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer;
var DeleteTransitGatewayConnectPeerResult = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayConnectPeerResult, _super);
    function DeleteTransitGatewayConnectPeerResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTransitGatewayConnectPeerResultTransitGatewayConnectPeer)
    ], DeleteTransitGatewayConnectPeerResult.prototype, "transitGatewayConnectPeer", void 0);
    return DeleteTransitGatewayConnectPeerResult;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayConnectPeerResult = DeleteTransitGatewayConnectPeerResult;
