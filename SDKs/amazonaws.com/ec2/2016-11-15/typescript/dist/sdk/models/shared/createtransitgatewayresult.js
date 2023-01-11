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
exports.CreateTransitGatewayResult = exports.CreateTransitGatewayResultTransitGateway = exports.CreateTransitGatewayResultTransitGatewayOptions = void 0;
var utils_1 = require("../../../internal/utils");
// CreateTransitGatewayResultTransitGatewayOptions
/**
 * The transit gateway options.
**/
var CreateTransitGatewayResultTransitGatewayOptions = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayResultTransitGatewayOptions, _super);
    function CreateTransitGatewayResultTransitGatewayOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGatewayOptions.prototype, "amazonSideAsn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGatewayOptions.prototype, "associationDefaultRouteTableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGatewayOptions.prototype, "autoAcceptSharedAttachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGatewayOptions.prototype, "defaultRouteTableAssociation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGatewayOptions.prototype, "defaultRouteTablePropagation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGatewayOptions.prototype, "dnsSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGatewayOptions.prototype, "multicastSupport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGatewayOptions.prototype, "propagationDefaultRouteTableId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGatewayOptions.prototype, "transitGatewayCidrBlocks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGatewayOptions.prototype, "vpnEcmpSupport", void 0);
    return CreateTransitGatewayResultTransitGatewayOptions;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayResultTransitGatewayOptions = CreateTransitGatewayResultTransitGatewayOptions;
// CreateTransitGatewayResultTransitGateway
/**
 * Information about the transit gateway.
**/
var CreateTransitGatewayResultTransitGateway = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayResultTransitGateway, _super);
    function CreateTransitGatewayResultTransitGateway() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGateway.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGateway.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayResultTransitGatewayOptions)
    ], CreateTransitGatewayResultTransitGateway.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGateway.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGateway.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGateway.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGateway.prototype, "transitGatewayArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayResultTransitGateway.prototype, "transitGatewayId", void 0);
    return CreateTransitGatewayResultTransitGateway;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayResultTransitGateway = CreateTransitGatewayResultTransitGateway;
var CreateTransitGatewayResult = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayResult, _super);
    function CreateTransitGatewayResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayResultTransitGateway)
    ], CreateTransitGatewayResult.prototype, "transitGateway", void 0);
    return CreateTransitGatewayResult;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayResult = CreateTransitGatewayResult;
