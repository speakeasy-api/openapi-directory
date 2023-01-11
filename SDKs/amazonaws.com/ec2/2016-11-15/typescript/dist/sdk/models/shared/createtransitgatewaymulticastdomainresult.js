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
exports.CreateTransitGatewayMulticastDomainResult = exports.CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain = exports.CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions = void 0;
var utils_1 = require("../../../internal/utils");
// CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions
/**
 * The options for the transit gateway multicast domain.
**/
var CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions, _super);
    function CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions.prototype, "autoAcceptSharedAssociations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions.prototype, "igmpv2Support", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions.prototype, "staticSourcesSupport", void 0);
    return CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions = CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions;
// CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain
/**
 * Information about the transit gateway multicast domain.
**/
var CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain, _super);
    function CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomainOptions)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "transitGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "transitGatewayMulticastDomainArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain.prototype, "transitGatewayMulticastDomainId", void 0);
    return CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain = CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain;
var CreateTransitGatewayMulticastDomainResult = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayMulticastDomainResult, _super);
    function CreateTransitGatewayMulticastDomainResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayMulticastDomainResultTransitGatewayMulticastDomain)
    ], CreateTransitGatewayMulticastDomainResult.prototype, "transitGatewayMulticastDomain", void 0);
    return CreateTransitGatewayMulticastDomainResult;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayMulticastDomainResult = CreateTransitGatewayMulticastDomainResult;
