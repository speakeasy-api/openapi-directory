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
exports.ModifyVpnConnectionResult = exports.ModifyVpnConnectionResultVpnConnection = exports.ModifyVpnConnectionResultVpnConnectionOptions = void 0;
var utils_1 = require("../../../internal/utils");
// ModifyVpnConnectionResultVpnConnectionOptions
/**
 * The VPN connection options.
**/
var ModifyVpnConnectionResultVpnConnectionOptions = /** @class */ (function (_super) {
    __extends(ModifyVpnConnectionResultVpnConnectionOptions, _super);
    function ModifyVpnConnectionResultVpnConnectionOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnectionOptions.prototype, "enableAcceleration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnectionOptions.prototype, "localIpv4NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnectionOptions.prototype, "localIpv6NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnectionOptions.prototype, "remoteIpv4NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnectionOptions.prototype, "remoteIpv6NetworkCidr", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnectionOptions.prototype, "staticRoutesOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnectionOptions.prototype, "tunnelInsideIpVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnectionOptions.prototype, "tunnelOptions", void 0);
    return ModifyVpnConnectionResultVpnConnectionOptions;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnConnectionResultVpnConnectionOptions = ModifyVpnConnectionResultVpnConnectionOptions;
// ModifyVpnConnectionResultVpnConnection
/**
 * Describes a VPN connection.
**/
var ModifyVpnConnectionResultVpnConnection = /** @class */ (function (_super) {
    __extends(ModifyVpnConnectionResultVpnConnection, _super);
    function ModifyVpnConnectionResultVpnConnection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "category", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "customerGatewayConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "customerGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyVpnConnectionResultVpnConnectionOptions)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "routes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "transitGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "vgwTelemetry", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "vpnConnectionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ModifyVpnConnectionResultVpnConnection.prototype, "vpnGatewayId", void 0);
    return ModifyVpnConnectionResultVpnConnection;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnConnectionResultVpnConnection = ModifyVpnConnectionResultVpnConnection;
var ModifyVpnConnectionResult = /** @class */ (function (_super) {
    __extends(ModifyVpnConnectionResult, _super);
    function ModifyVpnConnectionResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ModifyVpnConnectionResultVpnConnection)
    ], ModifyVpnConnectionResult.prototype, "vpnConnection", void 0);
    return ModifyVpnConnectionResult;
}(utils_1.SpeakeasyBase));
exports.ModifyVpnConnectionResult = ModifyVpnConnectionResult;
