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
exports.VolumeRecommendation = void 0;
var utils_1 = require("../../../internal/utils");
var volumeconfiguration_1 = require("./volumeconfiguration");
var ebsfindingenum_1 = require("./ebsfindingenum");
var ebsutilizationmetric_1 = require("./ebsutilizationmetric");
var volumerecommendationoption_1 = require("./volumerecommendationoption");
// VolumeRecommendation
/**
 * Describes an Amazon Elastic Block Store (Amazon EBS) volume recommendation.
**/
var VolumeRecommendation = /** @class */ (function (_super) {
    __extends(VolumeRecommendation, _super);
    function VolumeRecommendation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], VolumeRecommendation.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentConfiguration" }),
        __metadata("design:type", volumeconfiguration_1.VolumeConfiguration)
    ], VolumeRecommendation.prototype, "currentConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finding" }),
        __metadata("design:type", String)
    ], VolumeRecommendation.prototype, "finding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastRefreshTimestamp" }),
        __metadata("design:type", Date)
    ], VolumeRecommendation.prototype, "lastRefreshTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lookBackPeriodInDays" }),
        __metadata("design:type", Number)
    ], VolumeRecommendation.prototype, "lookBackPeriodInDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=utilizationMetrics", elemType: ebsutilizationmetric_1.EbsUtilizationMetric }),
        __metadata("design:type", Array)
    ], VolumeRecommendation.prototype, "utilizationMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volumeArn" }),
        __metadata("design:type", String)
    ], VolumeRecommendation.prototype, "volumeArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volumeRecommendationOptions", elemType: volumerecommendationoption_1.VolumeRecommendationOption }),
        __metadata("design:type", Array)
    ], VolumeRecommendation.prototype, "volumeRecommendationOptions", void 0);
    return VolumeRecommendation;
}(utils_1.SpeakeasyBase));
exports.VolumeRecommendation = VolumeRecommendation;
