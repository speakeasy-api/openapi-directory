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
exports.ReportByCategoryResponse = void 0;
var utils_1 = require("../../../internal/utils");
var reportbycategory_1 = require("./reportbycategory");
var reportbycommonresponselinks_1 = require("./reportbycommonresponselinks");
var beezupcommonpaginationresult_1 = require("./beezupcommonpaginationresult");
var ReportByCategoryResponse = /** @class */ (function (_super) {
    __extends(ReportByCategoryResponse, _super);
    function ReportByCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories", elemType: reportbycategory_1.ReportByCategory }),
        __metadata("design:type", Array)
    ], ReportByCategoryResponse.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], ReportByCategoryResponse.prototype, "currencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", reportbycommonresponselinks_1.ReportByCommonResponseLinks)
    ], ReportByCategoryResponse.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=paginationResult" }),
        __metadata("design:type", beezupcommonpaginationresult_1.BeezUpCommonPaginationResult)
    ], ReportByCategoryResponse.prototype, "paginationResult", void 0);
    return ReportByCategoryResponse;
}(utils_1.SpeakeasyBase));
exports.ReportByCategoryResponse = ReportByCategoryResponse;
