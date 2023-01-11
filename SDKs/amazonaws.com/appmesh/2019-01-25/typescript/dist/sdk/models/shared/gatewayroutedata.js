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
exports.GatewayRouteData = void 0;
var utils_1 = require("../../../internal/utils");
var resourcemetadata_1 = require("./resourcemetadata");
var gatewayroutespec_1 = require("./gatewayroutespec");
var gatewayroutestatus_1 = require("./gatewayroutestatus");
// GatewayRouteData
/**
 * An object that represents a gateway route returned by a describe operation.
**/
var GatewayRouteData = /** @class */ (function (_super) {
    __extends(GatewayRouteData, _super);
    function GatewayRouteData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gatewayRouteName" }),
        __metadata("design:type", String)
    ], GatewayRouteData.prototype, "gatewayRouteName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meshName" }),
        __metadata("design:type", String)
    ], GatewayRouteData.prototype, "meshName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", resourcemetadata_1.ResourceMetadata)
    ], GatewayRouteData.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", gatewayroutespec_1.GatewayRouteSpec)
    ], GatewayRouteData.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", gatewayroutestatus_1.GatewayRouteStatus)
    ], GatewayRouteData.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtualGatewayName" }),
        __metadata("design:type", String)
    ], GatewayRouteData.prototype, "virtualGatewayName", void 0);
    return GatewayRouteData;
}(utils_1.SpeakeasyBase));
exports.GatewayRouteData = GatewayRouteData;
