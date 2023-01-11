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
exports.AcceptVpcPeeringConnectionResult = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnection = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions = void 0;
var utils_1 = require("../../../internal/utils");
// AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions.prototype, "allowDnsResolutionFromRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalClassicLinkToRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalVpcToRemoteClassicLink", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions = AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;
// AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
/**
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "cidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "cidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "ipv6CidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "peeringOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "vpcId", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo = AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;
// AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions.prototype, "allowDnsResolutionFromRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalClassicLinkToRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalVpcToRemoteClassicLink", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions = AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;
// AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
/**
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "cidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "cidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "ipv6CidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "peeringOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "vpcId", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo = AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;
// AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus
/**
 * The status of the VPC peering connection.
**/
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus.prototype, "message", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus = AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus;
// AcceptVpcPeeringConnectionResultVpcPeeringConnection
/**
 * Information about the VPC peering connection.
**/
var AcceptVpcPeeringConnectionResultVpcPeeringConnection = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnection, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnection.prototype, "accepterVpcInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnection.prototype, "expirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnection.prototype, "requesterVpcInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnection.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnection.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnection.prototype, "vpcPeeringConnectionId", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnection;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnection = AcceptVpcPeeringConnectionResultVpcPeeringConnection;
var AcceptVpcPeeringConnectionResult = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResult, _super);
    function AcceptVpcPeeringConnectionResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptVpcPeeringConnectionResultVpcPeeringConnection)
    ], AcceptVpcPeeringConnectionResult.prototype, "vpcPeeringConnection", void 0);
    return AcceptVpcPeeringConnectionResult;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResult = AcceptVpcPeeringConnectionResult;
