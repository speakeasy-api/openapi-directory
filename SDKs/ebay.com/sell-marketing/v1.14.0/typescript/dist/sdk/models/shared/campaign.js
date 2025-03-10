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
exports.Campaign = void 0;
var utils_1 = require("../../../internal/utils");
var alert_1 = require("./alert");
var campaignbudget_1 = require("./campaignbudget");
var campaigncriterion_1 = require("./campaigncriterion");
var fundingstrategy_1 = require("./fundingstrategy");
var class_transformer_1 = require("class-transformer");
/**
 * This type defines the fields that describe an ad campaign.
 */
var Campaign = /** @class */ (function (_super) {
    __extends(Campaign, _super);
    function Campaign() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: alert_1.Alert }),
        (0, class_transformer_1.Expose)({ name: "alerts" }),
        (0, class_transformer_1.Type)(function () { return alert_1.Alert; }),
        __metadata("design:type", Array)
    ], Campaign.prototype, "alerts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "budget" }),
        (0, class_transformer_1.Type)(function () { return campaignbudget_1.CampaignBudget; }),
        __metadata("design:type", campaignbudget_1.CampaignBudget)
    ], Campaign.prototype, "budget", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "campaignCriterion" }),
        (0, class_transformer_1.Type)(function () { return campaigncriterion_1.CampaignCriterion; }),
        __metadata("design:type", campaigncriterion_1.CampaignCriterion)
    ], Campaign.prototype, "campaignCriterion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "campaignId" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "campaignId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "campaignName" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "campaignName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "campaignStatus" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "campaignStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "endDate" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "fundingStrategy" }),
        (0, class_transformer_1.Type)(function () { return fundingstrategy_1.FundingStrategy; }),
        __metadata("design:type", fundingstrategy_1.FundingStrategy)
    ], Campaign.prototype, "fundingStrategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "marketplaceId" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "marketplaceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "startDate" }),
        __metadata("design:type", String)
    ], Campaign.prototype, "startDate", void 0);
    return Campaign;
}(utils_1.SpeakeasyBase));
exports.Campaign = Campaign;
