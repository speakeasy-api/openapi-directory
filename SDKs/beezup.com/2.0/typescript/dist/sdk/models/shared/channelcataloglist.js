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
exports.ChannelCatalogList = void 0;
var utils_1 = require("../../../internal/utils");
var channelcatalog_1 = require("./channelcatalog");
var channelcataloglistlinks_1 = require("./channelcataloglistlinks");
var channelcataloglistlovlinks_1 = require("./channelcataloglistlovlinks");
// ChannelCatalogList
/**
 * This is the index of the channel catalog API
**/
var ChannelCatalogList = /** @class */ (function (_super) {
    __extends(ChannelCatalogList, _super);
    function ChannelCatalogList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelCatalogs", elemType: channelcatalog_1.ChannelCatalog }),
        __metadata("design:type", Object)
    ], ChannelCatalogList.prototype, "channelCatalogs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", channelcataloglistlinks_1.ChannelCatalogListLinks)
    ], ChannelCatalogList.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lovLinks" }),
        __metadata("design:type", channelcataloglistlovlinks_1.ChannelCatalogListLovLinks)
    ], ChannelCatalogList.prototype, "lovLinks", void 0);
    return ChannelCatalogList;
}(utils_1.SpeakeasyBase));
exports.ChannelCatalogList = ChannelCatalogList;
