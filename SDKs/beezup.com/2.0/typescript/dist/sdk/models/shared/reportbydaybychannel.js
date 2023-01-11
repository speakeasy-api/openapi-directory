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
exports.ReportByDayByChannel = void 0;
var utils_1 = require("../../../internal/utils");
var beezupcommonchannelbasicinfo_1 = require("./beezupcommonchannelbasicinfo");
var ReportByDayByChannel = /** @class */ (function (_super) {
    __extends(ReportByDayByChannel, _super);
    function ReportByDayByChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", beezupcommonchannelbasicinfo_1.BeezUpCommonChannelBasicInfo)
    ], ReportByDayByChannel.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clickCount" }),
        __metadata("design:type", Number)
    ], ReportByDayByChannel.prototype, "clickCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cost" }),
        __metadata("design:type", Number)
    ], ReportByDayByChannel.prototype, "cost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=margin" }),
        __metadata("design:type", Number)
    ], ReportByDayByChannel.prototype, "margin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderCount" }),
        __metadata("design:type", Number)
    ], ReportByDayByChannel.prototype, "orderCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=performanceIndicator" }),
        __metadata("design:type", Number)
    ], ReportByDayByChannel.prototype, "performanceIndicator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=roi" }),
        __metadata("design:type", Number)
    ], ReportByDayByChannel.prototype, "roi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=soldProductCount" }),
        __metadata("design:type", Number)
    ], ReportByDayByChannel.prototype, "soldProductCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalSales" }),
        __metadata("design:type", Number)
    ], ReportByDayByChannel.prototype, "totalSales", void 0);
    return ReportByDayByChannel;
}(utils_1.SpeakeasyBase));
exports.ReportByDayByChannel = ReportByDayByChannel;
