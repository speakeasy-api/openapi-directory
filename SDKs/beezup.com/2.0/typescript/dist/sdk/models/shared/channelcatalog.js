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
exports.ChannelCatalog = void 0;
var utils_1 = require("../../../internal/utils");
var channelcatalogcategorymappingsettings_1 = require("./channelcatalogcategorymappingsettings");
var channelcategorysettings_1 = require("./channelcategorysettings");
var channelcostsettings_1 = require("./channelcostsettings");
var channelcatalogcolumnmappingwithname_1 = require("./channelcatalogcolumnmappingwithname");
var costsettings_1 = require("./costsettings");
var exclusionfilter_1 = require("./exclusionfilter");
var generalsettings_1 = require("./generalsettings");
var channelcataloglinks_1 = require("./channelcataloglinks");
var channelcatalogstate_1 = require("./channelcatalogstate");
// ChannelCatalog
/**
 * The channel catalog
**/
var ChannelCatalog = /** @class */ (function (_super) {
    __extends(ChannelCatalog, _super);
    function ChannelCatalog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categoryMappingSettings" }),
        __metadata("design:type", channelcatalogcategorymappingsettings_1.ChannelCatalogCategoryMappingSettings)
    ], ChannelCatalog.prototype, "categoryMappingSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelCatalogId" }),
        __metadata("design:type", String)
    ], ChannelCatalog.prototype, "channelCatalogId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelCategorySettings" }),
        __metadata("design:type", channelcategorysettings_1.ChannelCategorySettings)
    ], ChannelCatalog.prototype, "channelCategorySettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelCostSettings" }),
        __metadata("design:type", channelcostsettings_1.ChannelCostSettings)
    ], ChannelCatalog.prototype, "channelCostSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelId" }),
        __metadata("design:type", String)
    ], ChannelCatalog.prototype, "channelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelImageUrl" }),
        __metadata("design:type", String)
    ], ChannelCatalog.prototype, "channelImageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelName" }),
        __metadata("design:type", String)
    ], ChannelCatalog.prototype, "channelName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=columnMappings", elemType: channelcatalogcolumnmappingwithname_1.ChannelCatalogColumnMappingWithName }),
        __metadata("design:type", Array)
    ], ChannelCatalog.prototype, "columnMappings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=costSettings" }),
        __metadata("design:type", costsettings_1.CostSettings)
    ], ChannelCatalog.prototype, "costSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], ChannelCatalog.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exclusionFilters", elemType: exclusionfilter_1.ExclusionFilter }),
        __metadata("design:type", Array)
    ], ChannelCatalog.prototype, "exclusionFilters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exportUrl" }),
        __metadata("design:type", String)
    ], ChannelCatalog.prototype, "exportUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=generalSettings" }),
        __metadata("design:type", generalsettings_1.GeneralSettings)
    ], ChannelCatalog.prototype, "generalSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isMarketplace" }),
        __metadata("design:type", Boolean)
    ], ChannelCatalog.prototype, "isMarketplace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", channelcataloglinks_1.ChannelCatalogLinks)
    ], ChannelCatalog.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", channelcatalogstate_1.ChannelCatalogState)
    ], ChannelCatalog.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storeId" }),
        __metadata("design:type", String)
    ], ChannelCatalog.prototype, "storeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], ChannelCatalog.prototype, "types", void 0);
    return ChannelCatalog;
}(utils_1.SpeakeasyBase));
exports.ChannelCatalog = ChannelCatalog;
