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
exports.ColumnStatisticsData = void 0;
var utils_1 = require("../../../internal/utils");
var binarycolumnstatisticsdata_1 = require("./binarycolumnstatisticsdata");
var booleancolumnstatisticsdata_1 = require("./booleancolumnstatisticsdata");
var datecolumnstatisticsdata_1 = require("./datecolumnstatisticsdata");
var decimalcolumnstatisticsdata_1 = require("./decimalcolumnstatisticsdata");
var doublecolumnstatisticsdata_1 = require("./doublecolumnstatisticsdata");
var longcolumnstatisticsdata_1 = require("./longcolumnstatisticsdata");
var stringcolumnstatisticsdata_1 = require("./stringcolumnstatisticsdata");
var columnstatisticstypeenum_1 = require("./columnstatisticstypeenum");
// ColumnStatisticsData
/**
 * Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.
**/
var ColumnStatisticsData = /** @class */ (function (_super) {
    __extends(ColumnStatisticsData, _super);
    function ColumnStatisticsData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BinaryColumnStatisticsData" }),
        __metadata("design:type", binarycolumnstatisticsdata_1.BinaryColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "binaryColumnStatisticsData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BooleanColumnStatisticsData" }),
        __metadata("design:type", booleancolumnstatisticsdata_1.BooleanColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "booleanColumnStatisticsData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DateColumnStatisticsData" }),
        __metadata("design:type", datecolumnstatisticsdata_1.DateColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "dateColumnStatisticsData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DecimalColumnStatisticsData" }),
        __metadata("design:type", decimalcolumnstatisticsdata_1.DecimalColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "decimalColumnStatisticsData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DoubleColumnStatisticsData" }),
        __metadata("design:type", doublecolumnstatisticsdata_1.DoubleColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "doubleColumnStatisticsData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LongColumnStatisticsData" }),
        __metadata("design:type", longcolumnstatisticsdata_1.LongColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "longColumnStatisticsData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StringColumnStatisticsData" }),
        __metadata("design:type", stringcolumnstatisticsdata_1.StringColumnStatisticsData)
    ], ColumnStatisticsData.prototype, "stringColumnStatisticsData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Type" }),
        __metadata("design:type", String)
    ], ColumnStatisticsData.prototype, "type", void 0);
    return ColumnStatisticsData;
}(utils_1.SpeakeasyBase));
exports.ColumnStatisticsData = ColumnStatisticsData;
