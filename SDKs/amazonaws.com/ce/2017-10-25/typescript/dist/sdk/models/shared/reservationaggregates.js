"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.ReservationAggregates = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
/**
 * The aggregated numbers for your reservation usage.
 */
var ReservationAggregates = /** @class */ (function (_super) {
    __extends(ReservationAggregates, _super);
    function ReservationAggregates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AmortizedRecurringFee" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "amortizedRecurringFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AmortizedUpfrontFee" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "amortizedUpfrontFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "NetRISavings" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "netRISavings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "OnDemandCostOfRIHoursUsed" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "onDemandCostOfRIHoursUsed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "PurchasedHours" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "purchasedHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "PurchasedUnits" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "purchasedUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "RICostForUnusedHours" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "riCostForUnusedHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "RealizedSavings" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "realizedSavings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TotalActualHours" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "totalActualHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TotalActualUnits" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "totalActualUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TotalAmortizedFee" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "totalAmortizedFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "TotalPotentialRISavings" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "totalPotentialRISavings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "UnrealizedSavings" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "unrealizedSavings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "UnusedHours" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "unusedHours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "UnusedUnits" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "unusedUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "UtilizationPercentage" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "utilizationPercentage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "UtilizationPercentageInUnits" }),
        __metadata("design:type", String)
    ], ReservationAggregates.prototype, "utilizationPercentageInUnits", void 0);
    return ReservationAggregates;
}(utils_1.SpeakeasyBase));
exports.ReservationAggregates = ReservationAggregates;
