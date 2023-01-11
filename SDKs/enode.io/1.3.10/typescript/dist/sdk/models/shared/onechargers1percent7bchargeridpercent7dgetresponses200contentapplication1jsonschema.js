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
exports.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema = exports.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation = exports.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState = void 0;
var utils_1 = require("../../../internal/utils");
var Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState = /** @class */ (function (_super) {
    __extends(Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState, _super);
    function Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeRate" }),
        __metadata("design:type", Number)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState.prototype, "chargeRate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isCharging" }),
        __metadata("design:type", Boolean)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState.prototype, "isCharging", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isPluggedIn" }),
        __metadata("design:type", Boolean)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState.prototype, "isPluggedIn", void 0);
    return Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState;
}(utils_1.SpeakeasyBase));
exports.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState = Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState;
// Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation
/**
 * Descriptive information about the Charger
**/
var Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation = /** @class */ (function (_super) {
    __extends(Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation, _super);
    function Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation.prototype, "brand", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation.prototype, "model", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", Number)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation.prototype, "year", void 0);
    return Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation;
}(utils_1.SpeakeasyBase));
exports.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation = Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation;
var Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema = /** @class */ (function (_super) {
    __extends(Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema, _super);
    function Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargeState" }),
        __metadata("design:type", Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaChargeState)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "chargeState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=information" }),
        __metadata("design:type", Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchemaInformation)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "information", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isReachable" }),
        __metadata("design:type", Boolean)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "isReachable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastSeen" }),
        __metadata("design:type", Date)
    ], Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema.prototype, "lastSeen", void 0);
    return Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema;
}(utils_1.SpeakeasyBase));
exports.Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema = Onechargers1Percent7BchargerIdPercent7DGetResponses200ContentApplication1jsonSchema;
