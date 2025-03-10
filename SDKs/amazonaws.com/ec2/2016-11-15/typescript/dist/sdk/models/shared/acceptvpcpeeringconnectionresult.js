"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.AcceptVpcPeeringConnectionResult = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnection = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet = void 0;
var utils_1 = require("../../../internal/utils");
/**
 * Describes an IPv4 CIDR block.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet.prototype, "cidrBlock", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet = AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet;
/**
 * Describes an IPv6 CIDR block.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet.prototype, "ipv6CidrBlock", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet = AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet;
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions.prototype, "allowDnsResolutionFromRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalClassicLinkToRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalVpcToRemoteClassicLink", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions = AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;
/**
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "cidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoCidrBlockSet,
        }),
        __metadata("design:type", Array)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "cidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoIpv6CidrBlockSet,
        }),
        __metadata("design:type", Array)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "ipv6CidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "peeringOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "vpcId", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo = AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;
/**
 * Describes an IPv4 CIDR block.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet.prototype, "cidrBlock", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet = AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet;
/**
 * Describes an IPv6 CIDR block.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet.prototype, "ipv6CidrBlock", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet = AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet;
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions.prototype, "allowDnsResolutionFromRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalClassicLinkToRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Boolean)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalVpcToRemoteClassicLink", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions = AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;
/**
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "cidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoCidrBlockSet,
        }),
        __metadata("design:type", Array)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "cidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoIpv6CidrBlockSet,
        }),
        __metadata("design:type", Array)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "ipv6CidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "peeringOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "vpcId", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo = AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;
/**
 * The status of the VPC peering connection.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum;
(function (AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum) {
    AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum["InitiatingRequest"] = "initiating-request";
    AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum["PendingAcceptance"] = "pending-acceptance";
    AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum["Active"] = "active";
    AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum["Deleted"] = "deleted";
    AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum["Rejected"] = "rejected";
    AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum["Failed"] = "failed";
    AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum["Expired"] = "expired";
    AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum["Provisioning"] = "provisioning";
    AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum["Deleting"] = "deleting";
})(AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum = exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum || (exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatusCodeEnum = {}));
/**
 * The status of the VPC peering connection.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus.prototype, "message", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus = AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus;
/**
 * Describes a tag.
 */
var AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags = /** @class */ (function (_super) {
    __extends(AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags, _super);
    function AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags.prototype, "value", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags = AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags;
/**
 * Information about the VPC peering connection.
 */
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
        __metadata("design:type", Date)
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
        (0, utils_1.SpeakeasyMetadata)({
            elemType: AcceptVpcPeeringConnectionResultVpcPeeringConnectionTags,
        }),
        __metadata("design:type", Array)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnection.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AcceptVpcPeeringConnectionResultVpcPeeringConnection.prototype, "vpcPeeringConnectionId", void 0);
    return AcceptVpcPeeringConnectionResultVpcPeeringConnection;
}(utils_1.SpeakeasyBase));
exports.AcceptVpcPeeringConnectionResultVpcPeeringConnection = AcceptVpcPeeringConnectionResultVpcPeeringConnection;
/**
 * Success
 */
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
