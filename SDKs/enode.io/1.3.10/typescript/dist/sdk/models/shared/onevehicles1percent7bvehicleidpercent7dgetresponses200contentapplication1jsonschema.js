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
exports.Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema = void 0;
var utils_1 = require("../../../internal/utils");
var onevehicles1percent7bvehicleidpercent7d1chargestategetresponses200contentapplication1jsonschema_1 = require("./onevehicles1percent7bvehicleidpercent7d1chargestategetresponses200contentapplication1jsonschema");
var onevehicles1percent7bvehicleidpercent7d1informationgetresponses200contentapplication1jsonschema_1 = require("./onevehicles1percent7bvehicleidpercent7d1informationgetresponses200contentapplication1jsonschema");
var onevehicles1percent7bvehicleidpercent7d1locationgetresponses200contentapplication1jsonschema_1 = require("./onevehicles1percent7bvehicleidpercent7d1locationgetresponses200contentapplication1jsonschema");
var onevehicles1percent7bvehicleidpercent7d1odometergetresponses200contentapplication1jsonschema_1 = require("./onevehicles1percent7bvehicleidpercent7d1odometergetresponses200contentapplication1jsonschema");
var onevehicles1percent7bvehicleidpercent7d1smartchargingpolicyputrequestbodycontentapplication1jsonschema_1 = require("./onevehicles1percent7bvehicleidpercent7d1smartchargingpolicyputrequestbodycontentapplication1jsonschema");
var Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema = /** @class */ (function (_super) {
    __extends(Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema, _super);
    function Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeState" }),
        __metadata("design:type", onevehicles1percent7bvehicleidpercent7d1chargestategetresponses200contentapplication1jsonschema_1.Onevehicles1Percent7BvehicleIdPercent7D1chargeStateGetResponses200ContentApplication1jsonSchema)
    ], Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "chargeState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargingLocationId" }),
        __metadata("design:type", String)
    ], Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "chargingLocationId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=information" }),
        __metadata("design:type", onevehicles1percent7bvehicleidpercent7d1informationgetresponses200contentapplication1jsonschema_1.Onevehicles1Percent7BvehicleIdPercent7D1informationGetResponses200ContentApplication1jsonSchema)
    ], Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "information", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isReachable" }),
        __metadata("design:type", Boolean)
    ], Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "isReachable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastSeen" }),
        __metadata("design:type", Date)
    ], Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "lastSeen", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", onevehicles1percent7bvehicleidpercent7d1locationgetresponses200contentapplication1jsonschema_1.Onevehicles1Percent7BvehicleIdPercent7D1locationGetResponses200ContentApplication1jsonSchema)
    ], Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=odometer" }),
        __metadata("design:type", onevehicles1percent7bvehicleidpercent7d1odometergetresponses200contentapplication1jsonschema_1.Onevehicles1Percent7BvehicleIdPercent7D1odometerGetResponses200ContentApplication1jsonSchema)
    ], Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "odometer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=smartChargingPolicy" }),
        __metadata("design:type", onevehicles1percent7bvehicleidpercent7d1smartchargingpolicyputrequestbodycontentapplication1jsonschema_1.Onevehicles1Percent7BvehicleIdPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema)
    ], Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "smartChargingPolicy", void 0);
    return Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema;
}(utils_1.SpeakeasyBase));
exports.Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema = Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema;
