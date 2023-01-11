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
exports.OptimiseRequest = void 0;
var utils_1 = require("../../../internal/utils");
var reportadvancedfilters_1 = require("./reportadvancedfilters");
var analyticsproductcolumnfilters_1 = require("./analyticsproductcolumnfilters");
var beezupcommoncatalogcategoryfilter_1 = require("./beezupcommoncatalogcategoryfilter");
var performanceindicatortypeenum_1 = require("./performanceindicatortypeenum");
var orderbydirectionenum_1 = require("./orderbydirectionenum");
var performanceindicatorfilter_1 = require("./performanceindicatorfilter");
var reportfilterperiodtypeenum_1 = require("./reportfilterperiodtypeenum");
var productstatefilterenum_1 = require("./productstatefilterenum");
var reporttypeenum_1 = require("./reporttypeenum");
// OptimiseRequest
/**
 * Contains common filter parameters
**/
var OptimiseRequest = /** @class */ (function (_super) {
    __extends(OptimiseRequest, _super);
    function OptimiseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=advancedFilters" }),
        __metadata("design:type", reportadvancedfilters_1.ReportAdvancedFilters)
    ], OptimiseRequest.prototype, "advancedFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=analyticsProductColumnFilters" }),
        __metadata("design:type", analyticsproductcolumnfilters_1.AnalyticsProductColumnFilters)
    ], OptimiseRequest.prototype, "analyticsProductColumnFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beginPeriodUtcDate" }),
        __metadata("design:type", Date)
    ], OptimiseRequest.prototype, "beginPeriodUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryFilter" }),
        __metadata("design:type", beezupcommoncatalogcategoryfilter_1.BeezUpCommonCatalogCategoryFilter)
    ], OptimiseRequest.prototype, "categoryFilter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], OptimiseRequest.prototype, "channelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=endPeriodUtcDate" }),
        __metadata("design:type", Date)
    ], OptimiseRequest.prototype, "endPeriodUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderBy" }),
        __metadata("design:type", String)
    ], OptimiseRequest.prototype, "orderBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderByDirection" }),
        __metadata("design:type", String)
    ], OptimiseRequest.prototype, "orderByDirection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageNumber" }),
        __metadata("design:type", Number)
    ], OptimiseRequest.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pageSize" }),
        __metadata("design:type", Number)
    ], OptimiseRequest.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performanceIndicatorFilters", elemType: performanceindicatorfilter_1.PerformanceIndicatorFilter }),
        __metadata("design:type", Array)
    ], OptimiseRequest.prototype, "performanceIndicatorFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=periodType" }),
        __metadata("design:type", String)
    ], OptimiseRequest.prototype, "periodType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productColumnsToDisplay" }),
        __metadata("design:type", Array)
    ], OptimiseRequest.prototype, "productColumnsToDisplay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productState" }),
        __metadata("design:type", String)
    ], OptimiseRequest.prototype, "productState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportType" }),
        __metadata("design:type", String)
    ], OptimiseRequest.prototype, "reportType", void 0);
    return OptimiseRequest;
}(utils_1.SpeakeasyBase));
exports.OptimiseRequest = OptimiseRequest;
