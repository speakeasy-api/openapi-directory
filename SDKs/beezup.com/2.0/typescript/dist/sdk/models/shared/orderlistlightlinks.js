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
exports.OrderListLightLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linksclearmerchantorderinfolistlink_1 = require("./linksclearmerchantorderinfolistlink");
var linksexportorderslink_1 = require("./linksexportorderslink");
var linksharvestalllink_1 = require("./linksharvestalllink");
var linksgetorderlistlightlink_1 = require("./linksgetorderlistlightlink");
var linkssetmerchantorderinfolistlink_1 = require("./linkssetmerchantorderinfolistlink");
var linksgetmarketplaceaccountssynchronizationlink_1 = require("./linksgetmarketplaceaccountssynchronizationlink");
// OrderListLightLinks
/**
 * The list of actions you can do from the order list response
**/
var OrderListLightLinks = /** @class */ (function (_super) {
    __extends(OrderListLightLinks, _super);
    function OrderListLightLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clearMerchantInfos" }),
        __metadata("design:type", linksclearmerchantorderinfolistlink_1.LinksClearMerchantOrderInfoListLink)
    ], OrderListLightLinks.prototype, "clearMerchantInfos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=export" }),
        __metadata("design:type", linksexportorderslink_1.LinksExportOrdersLink)
    ], OrderListLightLinks.prototype, "export", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harvest" }),
        __metadata("design:type", linksharvestalllink_1.LinksHarvestAllLink)
    ], OrderListLightLinks.prototype, "harvest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", linksgetorderlistlightlink_1.LinksGetOrderListLightLink)
    ], OrderListLightLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setMerchantInfos" }),
        __metadata("design:type", linkssetmerchantorderinfolistlink_1.LinksSetMerchantOrderInfoListLink)
    ], OrderListLightLinks.prototype, "setMerchantInfos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", linksgetmarketplaceaccountssynchronizationlink_1.LinksGetMarketplaceAccountsSynchronizationLink)
    ], OrderListLightLinks.prototype, "status", void 0);
    return OrderListLightLinks;
}(utils_1.SpeakeasyBase));
exports.OrderListLightLinks = OrderListLightLinks;
