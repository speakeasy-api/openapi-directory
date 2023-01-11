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
exports.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema = exports.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum = void 0;
var utils_1 = require("../../../internal/utils");
var Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum;
(function (Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum) {
    Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum["Unknown"] = "";
    Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum["Default"] = "DEFAULT";
})(Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum = exports.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum || (exports.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchemaIsChargingReasonsEnum = {}));
var Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema = /** @class */ (function (_super) {
    __extends(Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema, _super);
    function Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batteryCapacity" }),
        __metadata("design:type", Number)
    ], Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema.prototype, "batteryCapacity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=batteryLevel" }),
        __metadata("design:type", Number)
    ], Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema.prototype, "batteryLevel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeLimit" }),
        __metadata("design:type", Number)
    ], Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema.prototype, "chargeLimit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeRate" }),
        __metadata("design:type", Number)
    ], Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema.prototype, "chargeRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeTimeRemaining" }),
        __metadata("design:type", Number)
    ], Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema.prototype, "chargeTimeRemaining", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isCharging" }),
        __metadata("design:type", Boolean)
    ], Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema.prototype, "isCharging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isChargingReasons" }),
        __metadata("design:type", Array)
    ], Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema.prototype, "isChargingReasons", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPluggedIn" }),
        __metadata("design:type", Boolean)
    ], Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema.prototype, "isPluggedIn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=range" }),
        __metadata("design:type", Number)
    ], Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema.prototype, "range", void 0);
    return Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema;
}(utils_1.SpeakeasyBase));
exports.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema = Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema;
