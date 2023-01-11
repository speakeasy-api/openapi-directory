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
exports.CreativeVideoSearchItem = void 0;
var utils_1 = require("../../../internal/utils");
var alloweduse_1 = require("./alloweduse");
var videosearchitemdisplaysize_1 = require("./videosearchitemdisplaysize");
var istocklicense_1 = require("./istocklicense");
var keyword_1 = require("./keyword");
var download_1 = require("./download");
var referraldestination_1 = require("./referraldestination");
var CreativeVideoSearchItem = /** @class */ (function (_super) {
    __extends(CreativeVideoSearchItem, _super);
    function CreativeVideoSearchItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_use" }),
        __metadata("design:type", alloweduse_1.AllowedUse)
    ], CreativeVideoSearchItem.prototype, "allowedUse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=artist" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "artist", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=asset_family" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "assetFamily", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "caption", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clip_length" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "clipLength", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collection_code" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "collectionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collection_id" }),
        __metadata("design:type", Number)
    ], CreativeVideoSearchItem.prototype, "collectionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=collection_name" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "collectionName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color_type" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "colorType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "copyright", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], CreativeVideoSearchItem.prototype, "dateCreated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_sizes", elemType: videosearchitemdisplaysize_1.VideoSearchItemDisplaySize }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "displaySizes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=download_product" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "downloadProduct", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=era" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "era", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=event_ids" }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "eventIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=istock_licenses", elemType: istocklicense_1.IStockLicense }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "istockLicenses", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keywords", elemType: keyword_1.Keyword }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "keywords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=largest_downloads", elemType: download_1.Download }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "largestDownloads", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license_model" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "licenseModel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mastered_to" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "masteredTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=originally_shot_on" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "originallyShotOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=product_types" }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "productTypes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=referral_destinations", elemType: referraldestination_1.ReferralDestination }),
        __metadata("design:type", Array)
    ], CreativeVideoSearchItem.prototype, "referralDestinations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shot_speed" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "shotSpeed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], CreativeVideoSearchItem.prototype, "title", void 0);
    return CreativeVideoSearchItem;
}(utils_1.SpeakeasyBase));
exports.CreativeVideoSearchItem = CreativeVideoSearchItem;
