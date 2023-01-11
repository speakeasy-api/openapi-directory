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
exports.AnalyticsStoreIndexLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linksoptimiselink_1 = require("./linksoptimiselink");
var linksoptimisealllink_1 = require("./linksoptimisealllink");
var linksoptimisebycategorylink_1 = require("./linksoptimisebycategorylink");
var linksoptimisebychannellink_1 = require("./linksoptimisebychannellink");
var linksoptimisebyproductlink_1 = require("./linksoptimisebyproductlink");
var linksgetstorereportbycategorylink_1 = require("./linksgetstorereportbycategorylink");
var linksgetstorereportbychannellink_1 = require("./linksgetstorereportbychannellink");
var linksgetstorereportbydaylink_1 = require("./linksgetstorereportbydaylink");
var linksgetstorereportbyproductlink_1 = require("./linksgetstorereportbyproductlink");
var linksgetreportfilterslink_1 = require("./linksgetreportfilterslink");
var linksgetruleslink_1 = require("./linksgetruleslink");
var linksanalyticsindexlink_1 = require("./linksanalyticsindexlink");
var linksgetstoretrackedclickslink_1 = require("./linksgetstoretrackedclickslink");
var linksgetstoretrackedexternalorderslink_1 = require("./linksgetstoretrackedexternalorderslink");
var linksgetstoretrackedorderslink_1 = require("./linksgetstoretrackedorderslink");
var linksgetstoretrackingstatuslink_1 = require("./linksgetstoretrackingstatuslink");
var AnalyticsStoreIndexLinks = /** @class */ (function (_super) {
    __extends(AnalyticsStoreIndexLinks, _super);
    function AnalyticsStoreIndexLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=optimise" }),
        __metadata("design:type", linksoptimiselink_1.LinksOptimiseLink)
    ], AnalyticsStoreIndexLinks.prototype, "optimise", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=optimiseAll" }),
        __metadata("design:type", linksoptimisealllink_1.LinksOptimiseAllLink)
    ], AnalyticsStoreIndexLinks.prototype, "optimiseAll", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=optimiseByCategory" }),
        __metadata("design:type", linksoptimisebycategorylink_1.LinksOptimiseByCategoryLink)
    ], AnalyticsStoreIndexLinks.prototype, "optimiseByCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=optimiseByChannel" }),
        __metadata("design:type", linksoptimisebychannellink_1.LinksOptimiseByChannelLink)
    ], AnalyticsStoreIndexLinks.prototype, "optimiseByChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=optimiseByProduct" }),
        __metadata("design:type", linksoptimisebyproductlink_1.LinksOptimiseByProductLink)
    ], AnalyticsStoreIndexLinks.prototype, "optimiseByProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportByCategory" }),
        __metadata("design:type", linksgetstorereportbycategorylink_1.LinksGetStoreReportByCategoryLink)
    ], AnalyticsStoreIndexLinks.prototype, "reportByCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportByChannel" }),
        __metadata("design:type", linksgetstorereportbychannellink_1.LinksGetStoreReportByChannelLink)
    ], AnalyticsStoreIndexLinks.prototype, "reportByChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportByDay" }),
        __metadata("design:type", linksgetstorereportbydaylink_1.LinksGetStoreReportByDayLink)
    ], AnalyticsStoreIndexLinks.prototype, "reportByDay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportByProduct" }),
        __metadata("design:type", linksgetstorereportbyproductlink_1.LinksGetStoreReportByProductLink)
    ], AnalyticsStoreIndexLinks.prototype, "reportByProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reportFilters" }),
        __metadata("design:type", linksgetreportfilterslink_1.LinksGetReportFiltersLink)
    ], AnalyticsStoreIndexLinks.prototype, "reportFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rules" }),
        __metadata("design:type", linksgetruleslink_1.LinksGetRulesLink)
    ], AnalyticsStoreIndexLinks.prototype, "rules", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", linksanalyticsindexlink_1.LinksAnalyticsIndexLink)
    ], AnalyticsStoreIndexLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackedClicks" }),
        __metadata("design:type", linksgetstoretrackedclickslink_1.LinksGetStoreTrackedClicksLink)
    ], AnalyticsStoreIndexLinks.prototype, "trackedClicks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackedExternalOrders" }),
        __metadata("design:type", linksgetstoretrackedexternalorderslink_1.LinksGetStoreTrackedExternalOrdersLink)
    ], AnalyticsStoreIndexLinks.prototype, "trackedExternalOrders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackedOrders" }),
        __metadata("design:type", linksgetstoretrackedorderslink_1.LinksGetStoreTrackedOrdersLink)
    ], AnalyticsStoreIndexLinks.prototype, "trackedOrders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackingStatus" }),
        __metadata("design:type", linksgetstoretrackingstatuslink_1.LinksGetStoreTrackingStatusLink)
    ], AnalyticsStoreIndexLinks.prototype, "trackingStatus", void 0);
    return AnalyticsStoreIndexLinks;
}(utils_1.SpeakeasyBase));
exports.AnalyticsStoreIndexLinks = AnalyticsStoreIndexLinks;
