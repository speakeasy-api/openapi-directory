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
exports.AssociateSubnetCidrBlockResult = exports.AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation = exports.AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState = void 0;
var utils_1 = require("../../../internal/utils");
// AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
/**
 * Information about the state of the CIDR block.
**/
var AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState = /** @class */ (function (_super) {
    __extends(AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState, _super);
    function AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState.prototype, "statusMessage", void 0);
    return AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
}(utils_1.SpeakeasyBase));
exports.AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState = AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
// AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation
/**
 * Information about the IPv6 CIDR block association.
**/
var AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation = /** @class */ (function (_super) {
    __extends(AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation, _super);
    function AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation.prototype, "associationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation.prototype, "ipv6CidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssociateSubnetCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState)
    ], AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation.prototype, "ipv6CidrBlockState", void 0);
    return AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation;
}(utils_1.SpeakeasyBase));
exports.AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation = AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation;
var AssociateSubnetCidrBlockResult = /** @class */ (function (_super) {
    __extends(AssociateSubnetCidrBlockResult, _super);
    function AssociateSubnetCidrBlockResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssociateSubnetCidrBlockResultIpv6CidrBlockAssociation)
    ], AssociateSubnetCidrBlockResult.prototype, "ipv6CidrBlockAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateSubnetCidrBlockResult.prototype, "subnetId", void 0);
    return AssociateSubnetCidrBlockResult;
}(utils_1.SpeakeasyBase));
exports.AssociateSubnetCidrBlockResult = AssociateSubnetCidrBlockResult;
