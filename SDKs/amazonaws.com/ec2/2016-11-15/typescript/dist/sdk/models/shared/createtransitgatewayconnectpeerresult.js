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
exports.CreateTransitGatewayConnectPeerResult = exports.CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer = exports.CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
// CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration
/**
 * The Connect peer details.
**/
var CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration, _super);
    function CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration.prototype, "bgpConfigurations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration.prototype, "insideCidrBlocks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration.prototype, "peerAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration.prototype, "protocol", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration.prototype, "transitGatewayAddress", void 0);
    return CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration = CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration;
// CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer
/**
 * Information about the Connect peer.
**/
var CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer, _super);
    function CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeerConnectPeerConfiguration)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "connectPeerConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer.prototype, "transitGatewayConnectPeerId", void 0);
    return CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer = CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer;
var CreateTransitGatewayConnectPeerResult = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayConnectPeerResult, _super);
    function CreateTransitGatewayConnectPeerResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayConnectPeerResultTransitGatewayConnectPeer)
    ], CreateTransitGatewayConnectPeerResult.prototype, "transitGatewayConnectPeer", void 0);
    return CreateTransitGatewayConnectPeerResult;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayConnectPeerResult = CreateTransitGatewayConnectPeerResult;
