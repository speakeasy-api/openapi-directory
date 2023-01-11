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
exports.ModifyVpnTunnelCertificateResult = exports.ModifyVpnTunnelCertificateResultVpnConnection = exports.ModifyVpnTunnelCertificateResultVpnConnectionOptions = void 0;
var utils_1 = require("../../../internal/utils");
// ModifyVpnTunnelCertificateResultVpnConnectionOptions
/**
 * The VPN connection options.
**/
var ModifyVpnTunnelCertificateResultVpnConnectionOptions = /** @class */ (function (_super) {
    __extends(ModifyVpnTunnelCertificateResultVpnConnectionOptions, _super);
    function ModifyVpnTunnelCertificateResultVpnConnectionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnectionOptions.prototype, "enableAcceleration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnectionOptions.prototype, "localIpv4NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnectionOptions.prototype, "localIpv6NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnectionOptions.prototype, "remoteIpv4NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnectionOptions.prototype, "remoteIpv6NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnectionOptions.prototype, "staticRoutesOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnectionOptions.prototype, "tunnelInsideIpVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnectionOptions.prototype, "tunnelOptions", void 0);
    return ModifyVpnTunnelCertificateResultVpnConnectionOptions;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnTunnelCertificateResultVpnConnectionOptions = ModifyVpnTunnelCertificateResultVpnConnectionOptions;
// ModifyVpnTunnelCertificateResultVpnConnection
/**
 * Describes a VPN connection.
**/
var ModifyVpnTunnelCertificateResultVpnConnection = /** @class */ (function (_super) {
    __extends(ModifyVpnTunnelCertificateResultVpnConnection, _super);
    function ModifyVpnTunnelCertificateResultVpnConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "customerGatewayConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "customerGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyVpnTunnelCertificateResultVpnConnectionOptions)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "transitGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "vgwTelemetry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "vpnConnectionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnTunnelCertificateResultVpnConnection.prototype, "vpnGatewayId", void 0);
    return ModifyVpnTunnelCertificateResultVpnConnection;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnTunnelCertificateResultVpnConnection = ModifyVpnTunnelCertificateResultVpnConnection;
var ModifyVpnTunnelCertificateResult = /** @class */ (function (_super) {
    __extends(ModifyVpnTunnelCertificateResult, _super);
    function ModifyVpnTunnelCertificateResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyVpnTunnelCertificateResultVpnConnection)
    ], ModifyVpnTunnelCertificateResult.prototype, "vpnConnection", void 0);
    return ModifyVpnTunnelCertificateResult;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnTunnelCertificateResult = ModifyVpnTunnelCertificateResult;
