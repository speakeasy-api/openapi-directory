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
exports.VirtualGatewayListener = void 0;
var utils_1 = require("../../../internal/utils");
var virtualgatewayconnectionpool_1 = require("./virtualgatewayconnectionpool");
var virtualgatewayhealthcheckpolicy_1 = require("./virtualgatewayhealthcheckpolicy");
var virtualgatewayportmapping_1 = require("./virtualgatewayportmapping");
var virtualgatewaylistenertls_1 = require("./virtualgatewaylistenertls");
// VirtualGatewayListener
/**
 * An object that represents a listener for a virtual gateway.
**/
var VirtualGatewayListener = /** @class */ (function (_super) {
    __extends(VirtualGatewayListener, _super);
    function VirtualGatewayListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connectionPool" }),
        __metadata("design:type", virtualgatewayconnectionpool_1.VirtualGatewayConnectionPool)
    ], VirtualGatewayListener.prototype, "connectionPool", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=healthCheck" }),
        __metadata("design:type", virtualgatewayhealthcheckpolicy_1.VirtualGatewayHealthCheckPolicy)
    ], VirtualGatewayListener.prototype, "healthCheck", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=portMapping" }),
        __metadata("design:type", virtualgatewayportmapping_1.VirtualGatewayPortMapping)
    ], VirtualGatewayListener.prototype, "portMapping", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tls" }),
        __metadata("design:type", virtualgatewaylistenertls_1.VirtualGatewayListenerTls)
    ], VirtualGatewayListener.prototype, "tls", void 0);
    return VirtualGatewayListener;
}(utils_1.SpeakeasyBase));
exports.VirtualGatewayListener = VirtualGatewayListener;
