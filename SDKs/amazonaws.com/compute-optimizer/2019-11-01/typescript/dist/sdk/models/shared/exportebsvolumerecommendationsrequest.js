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
exports.ExportEbsVolumeRecommendationsRequest = void 0;
var utils_1 = require("../../../internal/utils");
var fileformatenum_1 = require("./fileformatenum");
var ebsfilter_1 = require("./ebsfilter");
var s3destinationconfig_1 = require("./s3destinationconfig");
var ExportEbsVolumeRecommendationsRequest = /** @class */ (function (_super) {
    __extends(ExportEbsVolumeRecommendationsRequest, _super);
    function ExportEbsVolumeRecommendationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountIds" }),
        __metadata("design:type", Array)
    ], ExportEbsVolumeRecommendationsRequest.prototype, "accountIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fieldsToExport" }),
        __metadata("design:type", Array)
    ], ExportEbsVolumeRecommendationsRequest.prototype, "fieldsToExport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fileFormat" }),
        __metadata("design:type", String)
    ], ExportEbsVolumeRecommendationsRequest.prototype, "fileFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filters", elemType: ebsfilter_1.EbsFilter }),
        __metadata("design:type", Array)
    ], ExportEbsVolumeRecommendationsRequest.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=includeMemberAccounts" }),
        __metadata("design:type", Boolean)
    ], ExportEbsVolumeRecommendationsRequest.prototype, "includeMemberAccounts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=s3DestinationConfig" }),
        __metadata("design:type", s3destinationconfig_1.S3DestinationConfig)
    ], ExportEbsVolumeRecommendationsRequest.prototype, "s3DestinationConfig", void 0);
    return ExportEbsVolumeRecommendationsRequest;
}(utils_1.SpeakeasyBase));
exports.ExportEbsVolumeRecommendationsRequest = ExportEbsVolumeRecommendationsRequest;
