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
exports.DeleteTransitGatewayMulticastDomainResult = exports.DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain = exports.DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions = void 0;
var utils_1 = require("../../../internal/utils");
// DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
/**
 * The options for the transit gateway multicast domain.
**/
var DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions, _super);
    function DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions.prototype, "autoAcceptSharedAssociations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions.prototype, "igmpv2Support", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions.prototype, "staticSourcesSupport", void 0);
    return DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions = DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions;
// DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain
/**
 * Information about the deleted transit gateway multicast domain.
**/
var DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain, _super);
    function DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "transitGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "transitGatewayMulticastDomainArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "transitGatewayMulticastDomainId", void 0);
    return DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain = DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain;
var DeleteTransitGatewayMulticastDomainResult = /** @class */ (function (_super) {
    __extends(DeleteTransitGatewayMulticastDomainResult, _super);
    function DeleteTransitGatewayMulticastDomainResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain)
    ], DeleteTransitGatewayMulticastDomainResult.prototype, "transitGatewayMulticastDomain", void 0);
    return DeleteTransitGatewayMulticastDomainResult;
}(utils_1.SpeakeasyBase));
exports.DeleteTransitGatewayMulticastDomainResult = DeleteTransitGatewayMulticastDomainResult;
