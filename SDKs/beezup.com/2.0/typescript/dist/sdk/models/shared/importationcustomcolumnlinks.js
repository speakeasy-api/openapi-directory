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
exports.ImportationCustomColumnLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linkscatalogdeletecustomcolumnlink_1 = require("./linkscatalogdeletecustomcolumnlink");
var linkscataloggetcustomcolumnexpressionlink_1 = require("./linkscataloggetcustomcolumnexpressionlink");
var linksimportationmapcustomcolumnlink_1 = require("./linksimportationmapcustomcolumnlink");
var linksimportationgetproductsamplecustomcolumnvaluelink_1 = require("./linksimportationgetproductsamplecustomcolumnvaluelink");
var linksimportationsavecustomcolumnlink_1 = require("./linksimportationsavecustomcolumnlink");
var linksimportationunmapcustomcolumnlink_1 = require("./linksimportationunmapcustomcolumnlink");
var ImportationCustomColumnLinks = /** @class */ (function (_super) {
    __extends(ImportationCustomColumnLinks, _super);
    function ImportationCustomColumnLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=delete" }),
        __metadata("design:type", linkscatalogdeletecustomcolumnlink_1.LinksCatalogDeleteCustomColumnLink)
    ], ImportationCustomColumnLinks.prototype, "delete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=expression" }),
        __metadata("design:type", linkscataloggetcustomcolumnexpressionlink_1.LinksCatalogGetCustomColumnExpressionLink)
    ], ImportationCustomColumnLinks.prototype, "expression", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=map" }),
        __metadata("design:type", linksimportationmapcustomcolumnlink_1.LinksImportationMapCustomColumnLink)
    ], ImportationCustomColumnLinks.prototype, "map", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=productSampleValue" }),
        __metadata("design:type", linksimportationgetproductsamplecustomcolumnvaluelink_1.LinksImportationGetProductSampleCustomColumnValueLink)
    ], ImportationCustomColumnLinks.prototype, "productSampleValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=save" }),
        __metadata("design:type", linksimportationsavecustomcolumnlink_1.LinksImportationSaveCustomColumnLink)
    ], ImportationCustomColumnLinks.prototype, "save", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=unmap" }),
        __metadata("design:type", linksimportationunmapcustomcolumnlink_1.LinksImportationUnmapCustomColumnLink)
    ], ImportationCustomColumnLinks.prototype, "unmap", void 0);
    return ImportationCustomColumnLinks;
}(utils_1.SpeakeasyBase));
exports.ImportationCustomColumnLinks = ImportationCustomColumnLinks;
