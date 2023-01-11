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
exports.ChannelCatalogMarketplaceProperties = void 0;
var utils_1 = require("../../../internal/utils");
var beezupcommoninfosummaries_1 = require("./beezupcommoninfosummaries");
var channelcatalogmarketplacepropertieslinks_1 = require("./channelcatalogmarketplacepropertieslinks");
var ChannelCatalogMarketplaceProperties = /** @class */ (function (_super) {
    __extends(ChannelCatalogMarketplaceProperties, _super);
    function ChannelCatalogMarketplaceProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=info" }),
        __metadata("design:type", beezupcommoninfosummaries_1.BeezUpCommonInfoSummaries)
    ], ChannelCatalogMarketplaceProperties.prototype, "info", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", channelcatalogmarketplacepropertieslinks_1.ChannelCatalogMarketplacePropertiesLinks)
    ], ChannelCatalogMarketplaceProperties.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=propertyGroups" }),
        __metadata("design:type", Array)
    ], ChannelCatalogMarketplaceProperties.prototype, "propertyGroups", void 0);
    return ChannelCatalogMarketplaceProperties;
}(utils_1.SpeakeasyBase));
exports.ChannelCatalogMarketplaceProperties = ChannelCatalogMarketplaceProperties;
