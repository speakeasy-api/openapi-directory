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
exports.DirectConnectGatewayAssociationProposal = void 0;
var utils_1 = require("../../../internal/utils");
var associatedgateway_1 = require("./associatedgateway");
var routefilterprefix_1 = require("./routefilterprefix");
var directconnectgatewayassociationproposalstateenum_1 = require("./directconnectgatewayassociationproposalstateenum");
// DirectConnectGatewayAssociationProposal
/**
 * Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway.
**/
var DirectConnectGatewayAssociationProposal = /** @class */ (function (_super) {
    __extends(DirectConnectGatewayAssociationProposal, _super);
    function DirectConnectGatewayAssociationProposal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=associatedGateway" }),
        __metadata("design:type", associatedgateway_1.AssociatedGateway)
    ], DirectConnectGatewayAssociationProposal.prototype, "associatedGateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directConnectGatewayId" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociationProposal.prototype, "directConnectGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directConnectGatewayOwnerAccount" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociationProposal.prototype, "directConnectGatewayOwnerAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=existingAllowedPrefixesToDirectConnectGateway", elemType: routefilterprefix_1.RouteFilterPrefix }),
        __metadata("design:type", Array)
    ], DirectConnectGatewayAssociationProposal.prototype, "existingAllowedPrefixesToDirectConnectGateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proposalId" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociationProposal.prototype, "proposalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=proposalState" }),
        __metadata("design:type", String)
    ], DirectConnectGatewayAssociationProposal.prototype, "proposalState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requestedAllowedPrefixesToDirectConnectGateway", elemType: routefilterprefix_1.RouteFilterPrefix }),
        __metadata("design:type", Array)
    ], DirectConnectGatewayAssociationProposal.prototype, "requestedAllowedPrefixesToDirectConnectGateway", void 0);
    return DirectConnectGatewayAssociationProposal;
}(utils_1.SpeakeasyBase));
exports.DirectConnectGatewayAssociationProposal = DirectConnectGatewayAssociationProposal;
