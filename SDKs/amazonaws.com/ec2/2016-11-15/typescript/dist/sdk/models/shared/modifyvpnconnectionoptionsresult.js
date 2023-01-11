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
exports.ModifyVpnConnectionOptionsResult = exports.ModifyVpnConnectionOptionsResultVpnConnection = exports.ModifyVpnConnectionOptionsResultVpnConnectionOptions = void 0;
var utils_1 = require("../../../internal/utils");
// ModifyVpnConnectionOptionsResultVpnConnectionOptions
/**
 * The VPN connection options.
**/
var ModifyVpnConnectionOptionsResultVpnConnectionOptions = /** @class */ (function (_super) {
    __extends(ModifyVpnConnectionOptionsResultVpnConnectionOptions, _super);
    function ModifyVpnConnectionOptionsResultVpnConnectionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnectionOptions.prototype, "enableAcceleration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnectionOptions.prototype, "localIpv4NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnectionOptions.prototype, "localIpv6NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnectionOptions.prototype, "remoteIpv4NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnectionOptions.prototype, "remoteIpv6NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnectionOptions.prototype, "staticRoutesOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnectionOptions.prototype, "tunnelInsideIpVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnectionOptions.prototype, "tunnelOptions", void 0);
    return ModifyVpnConnectionOptionsResultVpnConnectionOptions;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnConnectionOptionsResultVpnConnectionOptions = ModifyVpnConnectionOptionsResultVpnConnectionOptions;
// ModifyVpnConnectionOptionsResultVpnConnection
/**
 * Describes a VPN connection.
**/
var ModifyVpnConnectionOptionsResultVpnConnection = /** @class */ (function (_super) {
    __extends(ModifyVpnConnectionOptionsResultVpnConnection, _super);
    function ModifyVpnConnectionOptionsResultVpnConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "customerGatewayConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "customerGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyVpnConnectionOptionsResultVpnConnectionOptions)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "transitGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "vgwTelemetry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "vpnConnectionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionOptionsResultVpnConnection.prototype, "vpnGatewayId", void 0);
    return ModifyVpnConnectionOptionsResultVpnConnection;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnConnectionOptionsResultVpnConnection = ModifyVpnConnectionOptionsResultVpnConnection;
var ModifyVpnConnectionOptionsResult = /** @class */ (function (_super) {
    __extends(ModifyVpnConnectionOptionsResult, _super);
    function ModifyVpnConnectionOptionsResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyVpnConnectionOptionsResultVpnConnection)
    ], ModifyVpnConnectionOptionsResult.prototype, "vpnConnection", void 0);
    return ModifyVpnConnectionOptionsResult;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnConnectionOptionsResult = ModifyVpnConnectionOptionsResult;
