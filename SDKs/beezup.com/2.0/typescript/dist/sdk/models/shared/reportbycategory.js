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
exports.ReportByCategory = void 0;
var utils_1 = require("../../../internal/utils");
var reportbycategorylinks_1 = require("./reportbycategorylinks");
var ReportByCategory = /** @class */ (function (_super) {
    __extends(ReportByCategory, _super);
    function ReportByCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allProductCount" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "allProductCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=catalogCategoryId" }),
        __metadata("design:type", String)
    ], ReportByCategory.prototype, "catalogCategoryId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=catalogCategoryPath" }),
        __metadata("design:type", Array)
    ], ReportByCategory.prototype, "catalogCategoryPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=catalogProductCount" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "catalogProductCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clickCount" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "clickCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cost" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "cost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabledProductCount" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "enabledProductCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", reportbycategorylinks_1.ReportByCategoryLinks)
    ], ReportByCategory.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=margin" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "margin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderCount" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "orderCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performanceIndicator" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "performanceIndicator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roi" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "roi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=soldProductCount" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "soldProductCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalSales" }),
        __metadata("design:type", Number)
    ], ReportByCategory.prototype, "totalSales", void 0);
    return ReportByCategory;
}(utils_1.SpeakeasyBase));
exports.ReportByCategory = ReportByCategory;
