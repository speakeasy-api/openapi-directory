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
exports.MotorcycleListing = void 0;
var utils_1 = require("../../../internal/utils");
var motorcyclebuild_1 = require("./motorcyclebuild");
var nestdealer_1 = require("./nestdealer");
var listingnestextraattributes_1 = require("./listingnestextraattributes");
var listingnestmedia_1 = require("./listingnestmedia");
// MotorcycleListing
/**
 * Represents a full list of attributes available with Marketcheck for a car
**/
var MotorcycleListing = /** @class */ (function (_super) {
    __extends(MotorcycleListing, _super);
    function MotorcycleListing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=build" }),
        __metadata("design:type", motorcyclebuild_1.MotorcycleBuild)
    ], MotorcycleListing.prototype, "build", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "color", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dealer" }),
        __metadata("design:type", nestdealer_1.NestDealer)
    ], MotorcycleListing.prototype, "dealer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=dp_url" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "dpUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extra" }),
        __metadata("design:type", listingnestextraattributes_1.ListingNestExtraAttributes)
    ], MotorcycleListing.prototype, "extra", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_seen_at" }),
        __metadata("design:type", Number)
    ], MotorcycleListing.prototype, "firstSeenAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_seen_at_date" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "firstSeenAtDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=heading" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "heading", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=inventory_type" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "inventoryType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_seen_at" }),
        __metadata("design:type", Number)
    ], MotorcycleListing.prototype, "lastSeenAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_seen_at_date" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "lastSeenAtDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=media" }),
        __metadata("design:type", listingnestmedia_1.ListingNestMedia)
    ], MotorcycleListing.prototype, "media", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=miles" }),
        __metadata("design:type", Number)
    ], MotorcycleListing.prototype, "miles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=msrp" }),
        __metadata("design:type", Number)
    ], MotorcycleListing.prototype, "msrp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price" }),
        __metadata("design:type", Number)
    ], MotorcycleListing.prototype, "price", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scraped_at" }),
        __metadata("design:type", Number)
    ], MotorcycleListing.prototype, "scrapedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=scraped_at_date" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "scrapedAtDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=seller_type" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "sellerType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stock_no" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "stockNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vin" }),
        __metadata("design:type", String)
    ], MotorcycleListing.prototype, "vin", void 0);
    return MotorcycleListing;
}(utils_1.SpeakeasyBase));
exports.MotorcycleListing = MotorcycleListing;
