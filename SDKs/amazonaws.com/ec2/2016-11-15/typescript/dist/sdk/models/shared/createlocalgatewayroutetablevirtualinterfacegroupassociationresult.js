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
exports.CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult = exports.CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation = exports.CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags = void 0;
var utils_1 = require("../../../internal/utils");
/**
 * Describes a tag.
 */
var CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags = /** @class */ (function (_super) {
    __extends(CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags, _super);
    function CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags.prototype, "value", void 0);
    return CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags;
}(utils_1.SpeakeasyBase));
exports.CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags = CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags;
/**
 * Information about the local gateway route table virtual interface group association.
 */
var CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation = /** @class */ (function (_super) {
    __extends(CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation, _super);
    function CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype, "localGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype, "localGatewayRouteTableArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype, "localGatewayRouteTableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype, "localGatewayRouteTableVirtualInterfaceGroupAssociationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype, "localGatewayVirtualInterfaceGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociationTags,
        }),
        __metadata("design:type", Array)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation.prototype, "tags", void 0);
    return CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation;
}(utils_1.SpeakeasyBase));
exports.CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation = CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation;
/**
 * Success
 */
var CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult = /** @class */ (function (_super) {
    __extends(CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult, _super);
    function CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResultLocalGatewayRouteTableVirtualInterfaceGroupAssociation)
    ], CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult.prototype, "localGatewayRouteTableVirtualInterfaceGroupAssociation", void 0);
    return CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult;
}(utils_1.SpeakeasyBase));
exports.CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult = CreateLocalGatewayRouteTableVirtualInterfaceGroupAssociationResult;
