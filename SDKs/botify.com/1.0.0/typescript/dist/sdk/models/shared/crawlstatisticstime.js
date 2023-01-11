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
exports.CrawlStatisticsTime = void 0;
var utils_1 = require("../../../internal/utils");
var crawlstatisticstimepoint_1 = require("./crawlstatisticstimepoint");
var CrawlStatisticsTime = /** @class */ (function (_super) {
    __extends(CrawlStatisticsTime, _super);
    function CrawlStatisticsTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_delay", elemType: crawlstatisticstimepoint_1.CrawlStatisticsTimePoint }),
        __metadata("design:type", Array)
    ], CrawlStatisticsTime.prototype, "avgDelay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=avg_size", elemType: crawlstatisticstimepoint_1.CrawlStatisticsTimePoint }),
        __metadata("design:type", Array)
    ], CrawlStatisticsTime.prototype, "avgSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=frequency" }),
        __metadata("design:type", String)
    ], CrawlStatisticsTime.prototype, "frequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_code_2xx", elemType: crawlstatisticstimepoint_1.CrawlStatisticsTimePoint }),
        __metadata("design:type", Array)
    ], CrawlStatisticsTime.prototype, "httpCode2xx", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_code_3xx", elemType: crawlstatisticstimepoint_1.CrawlStatisticsTimePoint }),
        __metadata("design:type", Array)
    ], CrawlStatisticsTime.prototype, "httpCode3xx", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_code_4xx", elemType: crawlstatisticstimepoint_1.CrawlStatisticsTimePoint }),
        __metadata("design:type", Array)
    ], CrawlStatisticsTime.prototype, "httpCode4xx", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_code_5xx", elemType: crawlstatisticstimepoint_1.CrawlStatisticsTimePoint }),
        __metadata("design:type", Array)
    ], CrawlStatisticsTime.prototype, "httpCode5xx", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=http_code_xxx", elemType: crawlstatisticstimepoint_1.CrawlStatisticsTimePoint }),
        __metadata("design:type", Array)
    ], CrawlStatisticsTime.prototype, "httpCodeXxx", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_update_date" }),
        __metadata("design:type", Date)
    ], CrawlStatisticsTime.prototype, "lastUpdateDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=new_urls", elemType: crawlstatisticstimepoint_1.CrawlStatisticsTimePoint }),
        __metadata("design:type", Array)
    ], CrawlStatisticsTime.prototype, "newUrls", void 0);
    return CrawlStatisticsTime;
}(utils_1.SpeakeasyBase));
exports.CrawlStatisticsTime = CrawlStatisticsTime;
