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
exports.CatalogStoreIndexLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linksautogetautoimportconfigurationlink_1 = require("./linksautogetautoimportconfigurationlink");
var linkscataloggetcatalogcolumnslink_1 = require("./linkscataloggetcatalogcolumnslink");
var linkscataloggetcategorieslink_1 = require("./linkscataloggetcategorieslink");
var linkscatalogcomputeexpressionlink_1 = require("./linkscatalogcomputeexpressionlink");
var linkscataloggetcustomcolumnslink_1 = require("./linkscataloggetcustomcolumnslink");
var linksimportationgetreportingslink_1 = require("./linksimportationgetreportingslink");
var linksimportationgetmanualupdatelastinputconfiglink_1 = require("./linksimportationgetmanualupdatelastinputconfiglink");
var linkscataloggetproductslink_1 = require("./linkscataloggetproductslink");
var linkscataloggetrandomproductslink_1 = require("./linkscataloggetrandomproductslink");
var linkscatalogstoreindexlink_1 = require("./linkscatalogstoreindexlink");
var linksimportationstartmanualupdatelink_1 = require("./linksimportationstartmanualupdatelink");
var CatalogStoreIndexLinks = /** @class */ (function (_super) {
    __extends(CatalogStoreIndexLinks, _super);
    function CatalogStoreIndexLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoImportInfo" }),
        __metadata("design:type", linksautogetautoimportconfigurationlink_1.LinksAutoGetAutoImportConfigurationLink)
    ], CatalogStoreIndexLinks.prototype, "autoImportInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=catalogColumns" }),
        __metadata("design:type", linkscataloggetcatalogcolumnslink_1.LinksCatalogGetCatalogColumnsLink)
    ], CatalogStoreIndexLinks.prototype, "catalogColumns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", linkscataloggetcategorieslink_1.LinksCatalogGetCategoriesLink)
    ], CatalogStoreIndexLinks.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=computeExpression" }),
        __metadata("design:type", linkscatalogcomputeexpressionlink_1.LinksCatalogComputeExpressionLink)
    ], CatalogStoreIndexLinks.prototype, "computeExpression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=customColumns" }),
        __metadata("design:type", linkscataloggetcustomcolumnslink_1.LinksCatalogGetCustomColumnsLink)
    ], CatalogStoreIndexLinks.prototype, "customColumns", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=importations" }),
        __metadata("design:type", linksimportationgetreportingslink_1.LinksImportationGetReportingsLink)
    ], CatalogStoreIndexLinks.prototype, "importations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inputConfiguration" }),
        __metadata("design:type", linksimportationgetmanualupdatelastinputconfiglink_1.LinksImportationGetManualUpdateLastInputConfigLink)
    ], CatalogStoreIndexLinks.prototype, "inputConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=products" }),
        __metadata("design:type", linkscataloggetproductslink_1.LinksCatalogGetProductsLink)
    ], CatalogStoreIndexLinks.prototype, "products", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=randomProducts" }),
        __metadata("design:type", linkscataloggetrandomproductslink_1.LinksCatalogGetRandomProductsLink)
    ], CatalogStoreIndexLinks.prototype, "randomProducts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", linkscatalogstoreindexlink_1.LinksCatalogStoreIndexLink)
    ], CatalogStoreIndexLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=startImportation" }),
        __metadata("design:type", linksimportationstartmanualupdatelink_1.LinksImportationStartManualUpdateLink)
    ], CatalogStoreIndexLinks.prototype, "startImportation", void 0);
    return CatalogStoreIndexLinks;
}(utils_1.SpeakeasyBase));
exports.CatalogStoreIndexLinks = CatalogStoreIndexLinks;
