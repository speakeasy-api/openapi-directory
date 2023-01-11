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
exports.AnalyticsIndexLovLinks = void 0;
var utils_1 = require("../../../internal/utils");
var beezupcommonlovlink3_1 = require("./beezupcommonlovlink3");
var AnalyticsIndexLovLinks = /** @class */ (function (_super) {
    __extends(AnalyticsIndexLovLinks, _super);
    function AnalyticsIndexLovLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analyticsNumericalProductColumnFilterOperatorNameLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "analyticsNumericalProductColumnFilterOperatorNameLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analyticsProductColumnFilterOperatorNameLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "analyticsProductColumnFilterOperatorNameLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analyticsStringProductColumnFilterOperatorNameLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "analyticsStringProductColumnFilterOperatorNameLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performanceIndicatorFilterOperatorNameLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "performanceIndicatorFilterOperatorNameLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performanceIndicatorFormulaOperatorNameLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "performanceIndicatorFormulaOperatorNameLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performanceIndicatorFormulaParameterTypeLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "performanceIndicatorFormulaParameterTypeLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performanceIndicatorTypeForReportsByCategoryLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "performanceIndicatorTypeForReportsByCategoryLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performanceIndicatorTypeForReportsByChannelLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "performanceIndicatorTypeForReportsByChannelLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performanceIndicatorTypeForReportsByProductLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "performanceIndicatorTypeForReportsByProductLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performanceIndicatorTypeLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "performanceIndicatorTypeLov", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storeOptimisationRuleExecutionStatusLov" }),
        __metadata("design:type", beezupcommonlovlink3_1.BeezUpCommonLovLink3)
    ], AnalyticsIndexLovLinks.prototype, "storeOptimisationRuleExecutionStatusLov", void 0);
    return AnalyticsIndexLovLinks;
}(utils_1.SpeakeasyBase));
exports.AnalyticsIndexLovLinks = AnalyticsIndexLovLinks;
