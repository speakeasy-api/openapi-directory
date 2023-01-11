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
exports.ModifyVpnTunnelOptionsResult = exports.ModifyVpnTunnelOptionsResultVpnConnection = exports.ModifyVpnTunnelOptionsResultVpnConnectionOptions = void 0;
var utils_1 = require("../../../internal/utils");
// ModifyVpnTunnelOptionsResultVpnConnectionOptions
/**
 * The VPN connection options.
**/
var ModifyVpnTunnelOptionsResultVpnConnectionOptions = /** @class */ (function (_super) {
    __extends(ModifyVpnTunnelOptionsResultVpnConnectionOptions, _super);
    function ModifyVpnTunnelOptionsResultVpnConnectionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnectionOptions.prototype, "enableAcceleration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnectionOptions.prototype, "localIpv4NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnectionOptions.prototype, "localIpv6NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnectionOptions.prototype, "remoteIpv4NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnectionOptions.prototype, "remoteIpv6NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnectionOptions.prototype, "staticRoutesOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnectionOptions.prototype, "tunnelInsideIpVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnectionOptions.prototype, "tunnelOptions", void 0);
    return ModifyVpnTunnelOptionsResultVpnConnectionOptions;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnTunnelOptionsResultVpnConnectionOptions = ModifyVpnTunnelOptionsResultVpnConnectionOptions;
// ModifyVpnTunnelOptionsResultVpnConnection
/**
 * Describes a VPN connection.
**/
var ModifyVpnTunnelOptionsResultVpnConnection = /** @class */ (function (_super) {
    __extends(ModifyVpnTunnelOptionsResultVpnConnection, _super);
    function ModifyVpnTunnelOptionsResultVpnConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "customerGatewayConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "customerGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyVpnTunnelOptionsResultVpnConnectionOptions)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "transitGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "vgwTelemetry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "vpnConnectionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelOptionsResultVpnConnection.prototype, "vpnGatewayId", void 0);
    return ModifyVpnTunnelOptionsResultVpnConnection;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnTunnelOptionsResultVpnConnection = ModifyVpnTunnelOptionsResultVpnConnection;
var ModifyVpnTunnelOptionsResult = /** @class */ (function (_super) {
    __extends(ModifyVpnTunnelOptionsResult, _super);
    function ModifyVpnTunnelOptionsResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyVpnTunnelOptionsResultVpnConnection)
    ], ModifyVpnTunnelOptionsResult.prototype, "vpnConnection", void 0);
    return ModifyVpnTunnelOptionsResult;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnTunnelOptionsResult = ModifyVpnTunnelOptionsResult;
