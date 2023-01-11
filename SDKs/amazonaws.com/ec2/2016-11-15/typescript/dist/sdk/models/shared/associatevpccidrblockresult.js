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
exports.AssociateVpcCidrBlockResult = exports.AssociateVpcCidrBlockResultIpv6CidrBlockAssociation = exports.AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState = exports.AssociateVpcCidrBlockResultCidrBlockAssociation = exports.AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState = void 0;
var utils_1 = require("../../../internal/utils");
// AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState
/**
 * Information about the state of the CIDR block.
**/
var AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState = /** @class */ (function (_super) {
    __extends(AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState, _super);
    function AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState.prototype, "statusMessage", void 0);
    return AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState;
}(utils_1.SpeakeasyBase));
exports.AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState = AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState;
// AssociateVpcCidrBlockResultCidrBlockAssociation
/**
 * Information about the IPv4 CIDR block association.
**/
var AssociateVpcCidrBlockResultCidrBlockAssociation = /** @class */ (function (_super) {
    __extends(AssociateVpcCidrBlockResultCidrBlockAssociation, _super);
    function AssociateVpcCidrBlockResultCidrBlockAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResultCidrBlockAssociation.prototype, "associationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResultCidrBlockAssociation.prototype, "cidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssociateVpcCidrBlockResultCidrBlockAssociationCidrBlockState)
    ], AssociateVpcCidrBlockResultCidrBlockAssociation.prototype, "cidrBlockState", void 0);
    return AssociateVpcCidrBlockResultCidrBlockAssociation;
}(utils_1.SpeakeasyBase));
exports.AssociateVpcCidrBlockResultCidrBlockAssociation = AssociateVpcCidrBlockResultCidrBlockAssociation;
// AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState
/**
 * Information about the state of the CIDR block.
**/
var AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState = /** @class */ (function (_super) {
    __extends(AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState, _super);
    function AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState.prototype, "statusMessage", void 0);
    return AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
}(utils_1.SpeakeasyBase));
exports.AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState = AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState;
// AssociateVpcCidrBlockResultIpv6CidrBlockAssociation
/**
 * Information about the IPv6 CIDR block association.
**/
var AssociateVpcCidrBlockResultIpv6CidrBlockAssociation = /** @class */ (function (_super) {
    __extends(AssociateVpcCidrBlockResultIpv6CidrBlockAssociation, _super);
    function AssociateVpcCidrBlockResultIpv6CidrBlockAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResultIpv6CidrBlockAssociation.prototype, "associationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResultIpv6CidrBlockAssociation.prototype, "ipv6CidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssociateVpcCidrBlockResultIpv6CidrBlockAssociationIpv6CidrBlockState)
    ], AssociateVpcCidrBlockResultIpv6CidrBlockAssociation.prototype, "ipv6CidrBlockState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResultIpv6CidrBlockAssociation.prototype, "ipv6Pool", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResultIpv6CidrBlockAssociation.prototype, "networkBorderGroup", void 0);
    return AssociateVpcCidrBlockResultIpv6CidrBlockAssociation;
}(utils_1.SpeakeasyBase));
exports.AssociateVpcCidrBlockResultIpv6CidrBlockAssociation = AssociateVpcCidrBlockResultIpv6CidrBlockAssociation;
var AssociateVpcCidrBlockResult = /** @class */ (function (_super) {
    __extends(AssociateVpcCidrBlockResult, _super);
    function AssociateVpcCidrBlockResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssociateVpcCidrBlockResultCidrBlockAssociation)
    ], AssociateVpcCidrBlockResult.prototype, "cidrBlockAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssociateVpcCidrBlockResultIpv6CidrBlockAssociation)
    ], AssociateVpcCidrBlockResult.prototype, "ipv6CidrBlockAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AssociateVpcCidrBlockResult.prototype, "vpcId", void 0);
    return AssociateVpcCidrBlockResult;
}(utils_1.SpeakeasyBase));
exports.AssociateVpcCidrBlockResult = AssociateVpcCidrBlockResult;
