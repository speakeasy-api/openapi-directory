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
exports.ChannelCatalogColumnMappingWithName = void 0;
var utils_1 = require("../../../internal/utils");
// ChannelCatalogColumnMappingWithName
/**
 * Represent a mapping between a channel column (considering channel category mapping) and a catalog column
**/
var ChannelCatalogColumnMappingWithName = /** @class */ (function (_super) {
    __extends(ChannelCatalogColumnMappingWithName, _super);
    function ChannelCatalogColumnMappingWithName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=catalogBeezUPColumnName" }),
        __metadata("design:type", String)
    ], ChannelCatalogColumnMappingWithName.prototype, "catalogBeezUPColumnName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=catalogColumnId" }),
        __metadata("design:type", String)
    ], ChannelCatalogColumnMappingWithName.prototype, "catalogColumnId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=catalogColumnName" }),
        __metadata("design:type", String)
    ], ChannelCatalogColumnMappingWithName.prototype, "catalogColumnName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelBeezUPColumnName" }),
        __metadata("design:type", String)
    ], ChannelCatalogColumnMappingWithName.prototype, "channelBeezUPColumnName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelCategoryPath" }),
        __metadata("design:type", Array)
    ], ChannelCatalogColumnMappingWithName.prototype, "channelCategoryPath", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelColumnId" }),
        __metadata("design:type", String)
    ], ChannelCatalogColumnMappingWithName.prototype, "channelColumnId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channelColumnName" }),
        __metadata("design:type", String)
    ], ChannelCatalogColumnMappingWithName.prototype, "channelColumnName", void 0);
    return ChannelCatalogColumnMappingWithName;
}(utils_1.SpeakeasyBase));
exports.ChannelCatalogColumnMappingWithName = ChannelCatalogColumnMappingWithName;
