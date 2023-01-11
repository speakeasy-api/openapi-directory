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
exports.AutoScalingGroupRecommendation = void 0;
var utils_1 = require("../../../internal/utils");
var autoscalinggroupconfiguration_1 = require("./autoscalinggroupconfiguration");
var findingenum_1 = require("./findingenum");
var autoscalinggrouprecommendationoption_1 = require("./autoscalinggrouprecommendationoption");
var utilizationmetric_1 = require("./utilizationmetric");
// AutoScalingGroupRecommendation
/**
 * Describes an Auto Scaling group recommendation.
**/
var AutoScalingGroupRecommendation = /** @class */ (function (_super) {
    __extends(AutoScalingGroupRecommendation, _super);
    function AutoScalingGroupRecommendation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], AutoScalingGroupRecommendation.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoScalingGroupArn" }),
        __metadata("design:type", String)
    ], AutoScalingGroupRecommendation.prototype, "autoScalingGroupArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoScalingGroupName" }),
        __metadata("design:type", String)
    ], AutoScalingGroupRecommendation.prototype, "autoScalingGroupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currentConfiguration" }),
        __metadata("design:type", autoscalinggroupconfiguration_1.AutoScalingGroupConfiguration)
    ], AutoScalingGroupRecommendation.prototype, "currentConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=finding" }),
        __metadata("design:type", String)
    ], AutoScalingGroupRecommendation.prototype, "finding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lastRefreshTimestamp" }),
        __metadata("design:type", Date)
    ], AutoScalingGroupRecommendation.prototype, "lastRefreshTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lookBackPeriodInDays" }),
        __metadata("design:type", Number)
    ], AutoScalingGroupRecommendation.prototype, "lookBackPeriodInDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommendationOptions", elemType: autoscalinggrouprecommendationoption_1.AutoScalingGroupRecommendationOption }),
        __metadata("design:type", Array)
    ], AutoScalingGroupRecommendation.prototype, "recommendationOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=utilizationMetrics", elemType: utilizationmetric_1.UtilizationMetric }),
        __metadata("design:type", Array)
    ], AutoScalingGroupRecommendation.prototype, "utilizationMetrics", void 0);
    return AutoScalingGroupRecommendation;
}(utils_1.SpeakeasyBase));
exports.AutoScalingGroupRecommendation = AutoScalingGroupRecommendation;
