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
exports.DeleteTransitGatewayResult = exports.DeleteTransitGatewayResultTransitGateway = exports.DeleteTransitGatewayResultTransitGatewayOptions = void 0;
var utils_1 = require("../../../internal/utils");
// DeleteTransitGatewayResultTransitGatewayOptions
/**
 * The transit gateway options.
**/
var DeleteTransitGatewayResultTransitGatewayOptions = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayResultTransitGatewayOptions, _super);
    function DeleteTransitGatewayResultTransitGatewayOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGatewayOptions.prototype, "amazonSideAsn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGatewayOptions.prototype, "associationDefaultRouteTableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGatewayOptions.prototype, "autoAcceptSharedAttachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGatewayOptions.prototype, "defaultRouteTableAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGatewayOptions.prototype, "defaultRouteTablePropagation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGatewayOptions.prototype, "dnsSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGatewayOptions.prototype, "multicastSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGatewayOptions.prototype, "propagationDefaultRouteTableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGatewayOptions.prototype, "transitGatewayCidrBlocks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGatewayOptions.prototype, "vpnEcmpSupport", void 0);
    return DeleteTransitGatewayResultTransitGatewayOptions;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayResultTransitGatewayOptions = DeleteTransitGatewayResultTransitGatewayOptions;
// DeleteTransitGatewayResultTransitGateway
/**
 * Information about the deleted transit gateway.
**/
var DeleteTransitGatewayResultTransitGateway = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayResultTransitGateway, _super);
    function DeleteTransitGatewayResultTransitGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGateway.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGateway.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTransitGatewayResultTransitGatewayOptions)
    ], DeleteTransitGatewayResultTransitGateway.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGateway.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGateway.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGateway.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGateway.prototype, "transitGatewayArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayResultTransitGateway.prototype, "transitGatewayId", void 0);
    return DeleteTransitGatewayResultTransitGateway;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayResultTransitGateway = DeleteTransitGatewayResultTransitGateway;
var DeleteTransitGatewayResult = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayResult, _super);
    function DeleteTransitGatewayResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTransitGatewayResultTransitGateway)
    ], DeleteTransitGatewayResult.prototype, "transitGateway", void 0);
    return DeleteTransitGatewayResult;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayResult = DeleteTransitGatewayResult;
