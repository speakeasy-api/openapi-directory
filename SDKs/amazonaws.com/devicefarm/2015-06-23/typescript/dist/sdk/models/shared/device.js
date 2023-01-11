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
exports.Device = void 0;
var utils_1 = require("../../../internal/utils");
var deviceavailabilityenum_1 = require("./deviceavailabilityenum");
var cpu_1 = require("./cpu");
var deviceformfactorenum_1 = require("./deviceformfactorenum");
var deviceinstance_1 = require("./deviceinstance");
var deviceplatformenum_1 = require("./deviceplatformenum");
var resolution_1 = require("./resolution");
// Device
/**
 * Represents a device type that an app is tested against.
**/
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], Device.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], Device.prototype, "availability", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier" }),
        __metadata("design:type", String)
    ], Device.prototype, "carrier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cpu" }),
        __metadata("design:type", cpu_1.Cpu)
    ], Device.prototype, "cpu", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fleetName" }),
        __metadata("design:type", String)
    ], Device.prototype, "fleetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fleetType" }),
        __metadata("design:type", String)
    ], Device.prototype, "fleetType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formFactor" }),
        __metadata("design:type", String)
    ], Device.prototype, "formFactor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=heapSize" }),
        __metadata("design:type", Number)
    ], Device.prototype, "heapSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], Device.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instances", elemType: deviceinstance_1.DeviceInstance }),
        __metadata("design:type", Array)
    ], Device.prototype, "instances", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], Device.prototype, "manufacturer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], Device.prototype, "memory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], Device.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modelId" }),
        __metadata("design:type", String)
    ], Device.prototype, "modelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Device.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=os" }),
        __metadata("design:type", String)
    ], Device.prototype, "os", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], Device.prototype, "platform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=radio" }),
        __metadata("design:type", String)
    ], Device.prototype, "radio", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remoteAccessEnabled" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "remoteAccessEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remoteDebugEnabled" }),
        __metadata("design:type", Boolean)
    ], Device.prototype, "remoteDebugEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resolution" }),
        __metadata("design:type", resolution_1.Resolution)
    ], Device.prototype, "resolution", void 0);
    return Device;
}(utils_1.SpeakeasyBase));
exports.Device = Device;
