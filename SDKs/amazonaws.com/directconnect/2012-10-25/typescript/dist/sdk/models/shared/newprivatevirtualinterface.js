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
exports.NewPrivateVirtualInterface = void 0;
var utils_1 = require("../../../internal/utils");
var addressfamilyenum_1 = require("./addressfamilyenum");
var tag_1 = require("./tag");
// NewPrivateVirtualInterface
/**
 * Information about a private virtual interface.
**/
var NewPrivateVirtualInterface = /** @class */ (function (_super) {
    __extends(NewPrivateVirtualInterface, _super);
    function NewPrivateVirtualInterface() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addressFamily" }),
        __metadata("design:type", String)
    ], NewPrivateVirtualInterface.prototype, "addressFamily", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=amazonAddress" }),
        __metadata("design:type", String)
    ], NewPrivateVirtualInterface.prototype, "amazonAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asn" }),
        __metadata("design:type", Number)
    ], NewPrivateVirtualInterface.prototype, "asn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authKey" }),
        __metadata("design:type", String)
    ], NewPrivateVirtualInterface.prototype, "authKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customerAddress" }),
        __metadata("design:type", String)
    ], NewPrivateVirtualInterface.prototype, "customerAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=directConnectGatewayId" }),
        __metadata("design:type", String)
    ], NewPrivateVirtualInterface.prototype, "directConnectGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mtu" }),
        __metadata("design:type", Number)
    ], NewPrivateVirtualInterface.prototype, "mtu", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], NewPrivateVirtualInterface.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtualGatewayId" }),
        __metadata("design:type", String)
    ], NewPrivateVirtualInterface.prototype, "virtualGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=virtualInterfaceName" }),
        __metadata("design:type", String)
    ], NewPrivateVirtualInterface.prototype, "virtualInterfaceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vlan" }),
        __metadata("design:type", Number)
    ], NewPrivateVirtualInterface.prototype, "vlan", void 0);
    return NewPrivateVirtualInterface;
}(utils_1.SpeakeasyBase));
exports.NewPrivateVirtualInterface = NewPrivateVirtualInterface;
