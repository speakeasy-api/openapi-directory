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
exports.ImportationMonitoringLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linksimportationactivateautoimportlink_1 = require("./linksimportationactivateautoimportlink");
var linksimportationcancellink_1 = require("./linksimportationcancellink");
var linksimportationgetdetectedcatalogcolumnslink_1 = require("./linksimportationgetdetectedcatalogcolumnslink");
var linksimportationcommitlink_1 = require("./linksimportationcommitlink");
var linksimportationcommitcolumnslink_1 = require("./linksimportationcommitcolumnslink");
var linksimportationconfigureremainingcatalogcolumnslink_1 = require("./linksimportationconfigureremainingcatalogcolumnslink");
var linksimportationgetcustomcolumnslink_1 = require("./linksimportationgetcustomcolumnslink");
var linksimportationgetproductsamplelink_1 = require("./linksimportationgetproductsamplelink");
var linksimportationgetimportationmonitoringlink_1 = require("./linksimportationgetimportationmonitoringlink");
var linksimportationtechnicalprogressionlink_1 = require("./linksimportationtechnicalprogressionlink");
// ImportationMonitoringLinks
/**
 * Applicable operations considering the state of the importation
**/
var ImportationMonitoringLinks = /** @class */ (function (_super) {
    __extends(ImportationMonitoringLinks, _super);
    function ImportationMonitoringLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activateAutoImport" }),
        __metadata("design:type", linksimportationactivateautoimportlink_1.LinksImportationActivateAutoImportLink)
    ], ImportationMonitoringLinks.prototype, "activateAutoImport", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cancel" }),
        __metadata("design:type", linksimportationcancellink_1.LinksImportationCancelLink)
    ], ImportationMonitoringLinks.prototype, "cancel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=catalogColumns" }),
        __metadata("design:type", linksimportationgetdetectedcatalogcolumnslink_1.LinksImportationGetDetectedCatalogColumnsLink)
    ], ImportationMonitoringLinks.prototype, "catalogColumns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commit" }),
        __metadata("design:type", linksimportationcommitlink_1.LinksImportationCommitLink)
    ], ImportationMonitoringLinks.prototype, "commit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commitColumns" }),
        __metadata("design:type", linksimportationcommitcolumnslink_1.LinksImportationCommitColumnsLink)
    ], ImportationMonitoringLinks.prototype, "commitColumns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configureRemainingCatalogColumns" }),
        __metadata("design:type", linksimportationconfigureremainingcatalogcolumnslink_1.LinksImportationConfigureRemainingCatalogColumnsLink)
    ], ImportationMonitoringLinks.prototype, "configureRemainingCatalogColumns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customColumns" }),
        __metadata("design:type", linksimportationgetcustomcolumnslink_1.LinksImportationGetCustomColumnsLink)
    ], ImportationMonitoringLinks.prototype, "customColumns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productSamples" }),
        __metadata("design:type", linksimportationgetproductsamplelink_1.LinksImportationGetProductSampleLink)
    ], ImportationMonitoringLinks.prototype, "productSamples", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", linksimportationgetimportationmonitoringlink_1.LinksImportationGetImportationMonitoringLink)
    ], ImportationMonitoringLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=technicalProgression" }),
        __metadata("design:type", linksimportationtechnicalprogressionlink_1.LinksImportationTechnicalProgressionLink)
    ], ImportationMonitoringLinks.prototype, "technicalProgression", void 0);
    return ImportationMonitoringLinks;
}(utils_1.SpeakeasyBase));
exports.ImportationMonitoringLinks = ImportationMonitoringLinks;
