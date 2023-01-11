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
exports.CreateNetworkInterfaceResult = exports.CreateNetworkInterfaceResultNetworkInterface = exports.CreateNetworkInterfaceResultNetworkInterfaceAttachment = exports.CreateNetworkInterfaceResultNetworkInterfaceAssociation = void 0;
var utils_1 = require("../../../internal/utils");
// CreateNetworkInterfaceResultNetworkInterfaceAssociation
/**
 * The association information for an Elastic IP address (IPv4) associated with the network interface.
**/
var CreateNetworkInterfaceResultNetworkInterfaceAssociation = /** @class */ (function (_super) {
    __extends(CreateNetworkInterfaceResultNetworkInterfaceAssociation, _super);
    function CreateNetworkInterfaceResultNetworkInterfaceAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAssociation.prototype, "allocationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAssociation.prototype, "associationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAssociation.prototype, "carrierIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAssociation.prototype, "customerOwnedIp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAssociation.prototype, "ipOwnerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAssociation.prototype, "publicDnsName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAssociation.prototype, "publicIp", void 0);
    return CreateNetworkInterfaceResultNetworkInterfaceAssociation;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkInterfaceResultNetworkInterfaceAssociation = CreateNetworkInterfaceResultNetworkInterfaceAssociation;
// CreateNetworkInterfaceResultNetworkInterfaceAttachment
/**
 * The network interface attachment.
**/
var CreateNetworkInterfaceResultNetworkInterfaceAttachment = /** @class */ (function (_super) {
    __extends(CreateNetworkInterfaceResultNetworkInterfaceAttachment, _super);
    function CreateNetworkInterfaceResultNetworkInterfaceAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAttachment.prototype, "attachTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAttachment.prototype, "attachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAttachment.prototype, "deleteOnTermination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAttachment.prototype, "deviceIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAttachment.prototype, "instanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAttachment.prototype, "instanceOwnerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAttachment.prototype, "networkCardIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterfaceAttachment.prototype, "status", void 0);
    return CreateNetworkInterfaceResultNetworkInterfaceAttachment;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkInterfaceResultNetworkInterfaceAttachment = CreateNetworkInterfaceResultNetworkInterfaceAttachment;
// CreateNetworkInterfaceResultNetworkInterface
/**
 * Information about the network interface.
**/
var CreateNetworkInterfaceResultNetworkInterface = /** @class */ (function (_super) {
    __extends(CreateNetworkInterfaceResultNetworkInterface, _super);
    function CreateNetworkInterfaceResultNetworkInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkInterfaceResultNetworkInterfaceAssociation)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "association", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkInterfaceResultNetworkInterfaceAttachment)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "attachment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "availabilityZone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "interfaceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "ipv4Prefixes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "ipv6Addresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "ipv6Prefixes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "networkInterfaceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "outpostArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "privateDnsName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "privateIpAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "privateIpAddresses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "requesterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "requesterManaged", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "sourceDestCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "subnetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "tagSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResultNetworkInterface.prototype, "vpcId", void 0);
    return CreateNetworkInterfaceResultNetworkInterface;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkInterfaceResultNetworkInterface = CreateNetworkInterfaceResultNetworkInterface;
// CreateNetworkInterfaceResult
/**
 * Contains the output of CreateNetworkInterface.
**/
var CreateNetworkInterfaceResult = /** @class */ (function (_super) {
    __extends(CreateNetworkInterfaceResult, _super);
    function CreateNetworkInterfaceResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateNetworkInterfaceResult.prototype, "clientToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateNetworkInterfaceResultNetworkInterface)
    ], CreateNetworkInterfaceResult.prototype, "networkInterface", void 0);
    return CreateNetworkInterfaceResult;
}(utils_1.SpeakeasyBase));
exports.CreateNetworkInterfaceResult = CreateNetworkInterfaceResult;
