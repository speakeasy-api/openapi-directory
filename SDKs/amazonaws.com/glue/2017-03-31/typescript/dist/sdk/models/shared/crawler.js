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
exports.Crawler = void 0;
var utils_1 = require("../../../internal/utils");
var lastcrawlinfo_1 = require("./lastcrawlinfo");
var lineageconfiguration_1 = require("./lineageconfiguration");
var recrawlpolicy_1 = require("./recrawlpolicy");
var schedule_1 = require("./schedule");
var schemachangepolicy_1 = require("./schemachangepolicy");
var crawlerstateenum_1 = require("./crawlerstateenum");
var crawlertargets_1 = require("./crawlertargets");
// Crawler
/**
 * Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the Glue Data Catalog.
**/
var Crawler = /** @class */ (function (_super) {
    __extends(Crawler, _super);
    function Crawler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Classifiers" }),
        __metadata("design:type", Array)
    ], Crawler.prototype, "classifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Configuration" }),
        __metadata("design:type", String)
    ], Crawler.prototype, "configuration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CrawlElapsedTime" }),
        __metadata("design:type", Number)
    ], Crawler.prototype, "crawlElapsedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CrawlerSecurityConfiguration" }),
        __metadata("design:type", String)
    ], Crawler.prototype, "crawlerSecurityConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreationTime" }),
        __metadata("design:type", Date)
    ], Crawler.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DatabaseName" }),
        __metadata("design:type", String)
    ], Crawler.prototype, "databaseName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], Crawler.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastCrawl" }),
        __metadata("design:type", lastcrawlinfo_1.LastCrawlInfo)
    ], Crawler.prototype, "lastCrawl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], Crawler.prototype, "lastUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LineageConfiguration" }),
        __metadata("design:type", lineageconfiguration_1.LineageConfiguration)
    ], Crawler.prototype, "lineageConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], Crawler.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RecrawlPolicy" }),
        __metadata("design:type", recrawlpolicy_1.RecrawlPolicy)
    ], Crawler.prototype, "recrawlPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Role" }),
        __metadata("design:type", String)
    ], Crawler.prototype, "role", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Schedule" }),
        __metadata("design:type", schedule_1.Schedule)
    ], Crawler.prototype, "schedule", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SchemaChangePolicy" }),
        __metadata("design:type", schemachangepolicy_1.SchemaChangePolicy)
    ], Crawler.prototype, "schemaChangePolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], Crawler.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TablePrefix" }),
        __metadata("design:type", String)
    ], Crawler.prototype, "tablePrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Targets" }),
        __metadata("design:type", crawlertargets_1.CrawlerTargets)
    ], Crawler.prototype, "targets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Version" }),
        __metadata("design:type", Number)
    ], Crawler.prototype, "version", void 0);
    return Crawler;
}(utils_1.SpeakeasyBase));
exports.Crawler = Crawler;
