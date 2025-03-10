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
exports.MarketplaceListingPlan = exports.MarketplaceListingPlanPriceModelEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var MarketplaceListingPlanPriceModelEnum;
(function (MarketplaceListingPlanPriceModelEnum) {
    MarketplaceListingPlanPriceModelEnum["Free"] = "FREE";
    MarketplaceListingPlanPriceModelEnum["FlatRate"] = "FLAT_RATE";
    MarketplaceListingPlanPriceModelEnum["PerUnit"] = "PER_UNIT";
})(MarketplaceListingPlanPriceModelEnum = exports.MarketplaceListingPlanPriceModelEnum || (exports.MarketplaceListingPlanPriceModelEnum = {}));
/**
 * Marketplace Listing Plan
 */
var MarketplaceListingPlan = /** @class */ (function (_super) {
    __extends(MarketplaceListingPlan, _super);
    function MarketplaceListingPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "accounts_url" }),
        __metadata("design:type", String)
    ], MarketplaceListingPlan.prototype, "accountsUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "bullets" }),
        __metadata("design:type", Array)
    ], MarketplaceListingPlan.prototype, "bullets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], MarketplaceListingPlan.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "has_free_trial" }),
        __metadata("design:type", Boolean)
    ], MarketplaceListingPlan.prototype, "hasFreeTrial", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], MarketplaceListingPlan.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "monthly_price_in_cents" }),
        __metadata("design:type", Number)
    ], MarketplaceListingPlan.prototype, "monthlyPriceInCents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], MarketplaceListingPlan.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "number" }),
        __metadata("design:type", Number)
    ], MarketplaceListingPlan.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "price_model" }),
        __metadata("design:type", String)
    ], MarketplaceListingPlan.prototype, "priceModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "state" }),
        __metadata("design:type", String)
    ], MarketplaceListingPlan.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "unit_name" }),
        __metadata("design:type", String)
    ], MarketplaceListingPlan.prototype, "unitName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], MarketplaceListingPlan.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "yearly_price_in_cents" }),
        __metadata("design:type", Number)
    ], MarketplaceListingPlan.prototype, "yearlyPriceInCents", void 0);
    return MarketplaceListingPlan;
}(utils_1.SpeakeasyBase));
exports.MarketplaceListingPlan = MarketplaceListingPlan;
