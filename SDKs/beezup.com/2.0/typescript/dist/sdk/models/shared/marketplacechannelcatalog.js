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
exports.MarketplaceChannelCatalog = void 0;
var utils_1 = require("../../../internal/utils");
var beezupcommonapisettingsstatusenum_1 = require("./beezupcommonapisettingsstatusenum");
var marketplacechannelcataloglinks_1 = require("./marketplacechannelcataloglinks");
var marketplacechannelcataloglovlinks_1 = require("./marketplacechannelcataloglovlinks");
// MarketplaceChannelCatalog
/**
 * This object indicates you the association between a channel catalog and a marketplace. The account identifier will be automatically defined based on your marketplace merchant identfier.
**/
var MarketplaceChannelCatalog = /** @class */ (function (_super) {
    __extends(MarketplaceChannelCatalog, _super);
    function MarketplaceChannelCatalog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apiSettingsStatus" }),
        __metadata("design:type", String)
    ], MarketplaceChannelCatalog.prototype, "apiSettingsStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPChannelCatalogId" }),
        __metadata("design:type", String)
    ], MarketplaceChannelCatalog.prototype, "beezUPChannelCatalogId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPChannelId" }),
        __metadata("design:type", String)
    ], MarketplaceChannelCatalog.prototype, "beezUPChannelId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPMarketplaceName" }),
        __metadata("design:type", Object)
    ], MarketplaceChannelCatalog.prototype, "beezUPMarketplaceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPStoreId" }),
        __metadata("design:type", String)
    ], MarketplaceChannelCatalog.prototype, "beezUPStoreId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPStoreName" }),
        __metadata("design:type", String)
    ], MarketplaceChannelCatalog.prototype, "beezUPStoreName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], MarketplaceChannelCatalog.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", marketplacechannelcataloglinks_1.MarketplaceChannelCatalogLinks)
    ], MarketplaceChannelCatalog.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lovLinks" }),
        __metadata("design:type", marketplacechannelcataloglovlinks_1.MarketplaceChannelCatalogLovLinks)
    ], MarketplaceChannelCatalog.prototype, "lovLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceAccountId" }),
        __metadata("design:type", Number)
    ], MarketplaceChannelCatalog.prototype, "marketplaceAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceBusinessCode" }),
        __metadata("design:type", String)
    ], MarketplaceChannelCatalog.prototype, "marketplaceBusinessCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceIsoCountryCodeAlpha2" }),
        __metadata("design:type", String)
    ], MarketplaceChannelCatalog.prototype, "marketplaceIsoCountryCodeAlpha2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceMarketPlaceId" }),
        __metadata("design:type", String)
    ], MarketplaceChannelCatalog.prototype, "marketplaceMarketPlaceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceMerchantIdentifiers" }),
        __metadata("design:type", Object)
    ], MarketplaceChannelCatalog.prototype, "marketplaceMerchantIdentifiers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceTechnicalCode" }),
        __metadata("design:type", String)
    ], MarketplaceChannelCatalog.prototype, "marketplaceTechnicalCode", void 0);
    return MarketplaceChannelCatalog;
}(utils_1.SpeakeasyBase));
exports.MarketplaceChannelCatalog = MarketplaceChannelCatalog;
