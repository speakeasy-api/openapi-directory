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
exports.DisassociateSubnetCidrBlockResult = exports.DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation = exports.DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState = void 0;
var utils_1 = require("../../../internal/utils");
// DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
/**
 * Information about the state of the CIDR block.
**/
var DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState = /** @class */ (function (_super) {
    __extends(DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState, _super);
    function DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState.prototype, "statusMessage", void 0);
    return DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
}(utils_1.SpeakeasyBase));
exports.DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState = DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
// DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation
/**
 * Information about the IPv6 CIDR block association.
**/
var DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation = /** @class */ (function (_super) {
    __extends(DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation, _super);
    function DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation.prototype, "associationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation.prototype, "ipv6CidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState)
    ], DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation.prototype, "ipv6CidrBlockState", void 0);
    return DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation;
}(utils_1.SpeakeasyBase));
exports.DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation = DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation;
var DisassociateSubnetCidrBlockResult = /** @class */ (function (_super) {
    __extends(DisassociateSubnetCidrBlockResult, _super);
    function DisassociateSubnetCidrBlockResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DisassociateSubnetCidrBlockResultIpv6CidrBlockAssociation)
    ], DisassociateSubnetCidrBlockResult.prototype, "ipv6CidrBlockAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DisassociateSubnetCidrBlockResult.prototype, "subnetId", void 0);
    return DisassociateSubnetCidrBlockResult;
}(utils_1.SpeakeasyBase));
exports.DisassociateSubnetCidrBlockResult = DisassociateSubnetCidrBlockResult;
