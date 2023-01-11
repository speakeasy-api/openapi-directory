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
exports.GetImportationReportResponse = void 0;
var utils_1 = require("../../../internal/utils");
var getimportationreportresponsediff_1 = require("./getimportationreportresponsediff");
var getimportationreportresponseerror_1 = require("./getimportationreportresponseerror");
var getimportationreportresponseimportationinfo_1 = require("./getimportationreportresponseimportationinfo");
var getimportationreportresponseproductmetrics_1 = require("./getimportationreportresponseproductmetrics");
// GetImportationReportResponse
/**
 * Get Importation Report Response
**/
var GetImportationReportResponse = /** @class */ (function (_super) {
    __extends(GetImportationReportResponse, _super);
    function GetImportationReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", getimportationreportresponsediff_1.GetImportationReportResponseDiff)
    ], GetImportationReportResponse.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=columns" }),
        __metadata("design:type", getimportationreportresponsediff_1.GetImportationReportResponseDiff)
    ], GetImportationReportResponse.prototype, "columns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: getimportationreportresponseerror_1.GetImportationReportResponseError }),
        __metadata("design:type", Array)
    ], GetImportationReportResponse.prototype, "errors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executionId" }),
        __metadata("design:type", String)
    ], GetImportationReportResponse.prototype, "executionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=importationInfo" }),
        __metadata("design:type", getimportationreportresponseimportationinfo_1.GetImportationReportResponseImportationInfo)
    ], GetImportationReportResponse.prototype, "importationInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productMetrics" }),
        __metadata("design:type", getimportationreportresponseproductmetrics_1.GetImportationReportResponseProductMetrics)
    ], GetImportationReportResponse.prototype, "productMetrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=products" }),
        __metadata("design:type", getimportationreportresponsediff_1.GetImportationReportResponseDiff)
    ], GetImportationReportResponse.prototype, "products", void 0);
    return GetImportationReportResponse;
}(utils_1.SpeakeasyBase));
exports.GetImportationReportResponse = GetImportationReportResponse;
