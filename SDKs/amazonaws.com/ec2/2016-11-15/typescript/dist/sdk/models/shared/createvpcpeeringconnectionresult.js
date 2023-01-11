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
exports.CreateVpcPeeringConnectionResult = exports.CreateVpcPeeringConnectionResultVpcPeeringConnection = exports.CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus = exports.CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo = exports.CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions = exports.CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo = exports.CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions = void 0;
var utils_1 = require("../../../internal/utils");
// CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
var CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions = /** @class */ (function (_super) {
    __extends(CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions, _super);
    function CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions.prototype, "allowDnsResolutionFromRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalClassicLinkToRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalVpcToRemoteClassicLink", void 0);
    return CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;
}(utils_1.SpeakeasyBase));
exports.CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions = CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;
// CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
/**
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
var CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo = /** @class */ (function (_super) {
    __extends(CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo, _super);
    function CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "cidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "cidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "ipv6CidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "peeringOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo.prototype, "vpcId", void 0);
    return CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;
}(utils_1.SpeakeasyBase));
exports.CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo = CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;
// CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
/**
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
var CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions = /** @class */ (function (_super) {
    __extends(CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions, _super);
    function CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions.prototype, "allowDnsResolutionFromRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalClassicLinkToRemoteVpc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions.prototype, "allowEgressFromLocalVpcToRemoteClassicLink", void 0);
    return CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;
}(utils_1.SpeakeasyBase));
exports.CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions = CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;
// CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
/**
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
var CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo = /** @class */ (function (_super) {
    __extends(CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo, _super);
    function CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "cidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "cidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "ipv6CidrBlockSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "peeringOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo.prototype, "vpcId", void 0);
    return CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;
}(utils_1.SpeakeasyBase));
exports.CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo = CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;
// CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus
/**
 * The status of the VPC peering connection.
**/
var CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus = /** @class */ (function (_super) {
    __extends(CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus, _super);
    function CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus.prototype, "message", void 0);
    return CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus;
}(utils_1.SpeakeasyBase));
exports.CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus = CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus;
// CreateVpcPeeringConnectionResultVpcPeeringConnection
/**
 * Information about the VPC peering connection.
**/
var CreateVpcPeeringConnectionResultVpcPeeringConnection = /** @class */ (function (_super) {
    __extends(CreateVpcPeeringConnectionResultVpcPeeringConnection, _super);
    function CreateVpcPeeringConnectionResultVpcPeeringConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnection.prototype, "accepterVpcInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnection.prototype, "expirationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnection.prototype, "requesterVpcInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnection.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnection.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateVpcPeeringConnectionResultVpcPeeringConnection.prototype, "vpcPeeringConnectionId", void 0);
    return CreateVpcPeeringConnectionResultVpcPeeringConnection;
}(utils_1.SpeakeasyBase));
exports.CreateVpcPeeringConnectionResultVpcPeeringConnection = CreateVpcPeeringConnectionResultVpcPeeringConnection;
var CreateVpcPeeringConnectionResult = /** @class */ (function (_super) {
    __extends(CreateVpcPeeringConnectionResult, _super);
    function CreateVpcPeeringConnectionResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateVpcPeeringConnectionResultVpcPeeringConnection)
    ], CreateVpcPeeringConnectionResult.prototype, "vpcPeeringConnection", void 0);
    return CreateVpcPeeringConnectionResult;
}(utils_1.SpeakeasyBase));
exports.CreateVpcPeeringConnectionResult = CreateVpcPeeringConnectionResult;
