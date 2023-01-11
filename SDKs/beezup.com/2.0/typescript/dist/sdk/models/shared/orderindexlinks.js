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
exports.OrderIndexLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linksgetautomatictransitionslink_1 = require("./linksgetautomatictransitionslink");
var linksclearmerchantorderinfolistlink_1 = require("./linksclearmerchantorderinfolistlink");
var linksexportorderslink_1 = require("./linksexportorderslink");
var linksgetorderexportationslink_1 = require("./linksgetorderexportationslink");
var linksharvestalllink_1 = require("./linksharvestalllink");
var linksgetorderlistlightlink_1 = require("./linksgetorderlistlightlink");
var linksgetorderlistfulllink_1 = require("./linksgetorderlistfulllink");
var linksgetorderindexlink_1 = require("./linksgetorderindexlink");
var linkssetmerchantorderinfolistlink_1 = require("./linkssetmerchantorderinfolistlink");
var linksgetmarketplaceaccountssynchronizationlink_1 = require("./linksgetmarketplaceaccountssynchronizationlink");
// OrderIndexLinks
/**
 * Gives you all entry point operations you can do on this API
**/
var OrderIndexLinks = /** @class */ (function (_super) {
    __extends(OrderIndexLinks, _super);
    function OrderIndexLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=autoTransitions" }),
        __metadata("design:type", linksgetautomatictransitionslink_1.LinksGetAutomaticTransitionsLink)
    ], OrderIndexLinks.prototype, "autoTransitions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clearMerchantInfos" }),
        __metadata("design:type", linksclearmerchantorderinfolistlink_1.LinksClearMerchantOrderInfoListLink)
    ], OrderIndexLinks.prototype, "clearMerchantInfos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=export" }),
        __metadata("design:type", linksexportorderslink_1.LinksExportOrdersLink)
    ], OrderIndexLinks.prototype, "export", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=exportations" }),
        __metadata("design:type", linksgetorderexportationslink_1.LinksGetOrderExportationsLink)
    ], OrderIndexLinks.prototype, "exportations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harvest" }),
        __metadata("design:type", linksharvestalllink_1.LinksHarvestAllLink)
    ], OrderIndexLinks.prototype, "harvest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lightOrders" }),
        __metadata("design:type", linksgetorderlistlightlink_1.LinksGetOrderListLightLink)
    ], OrderIndexLinks.prototype, "lightOrders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orders" }),
        __metadata("design:type", linksgetorderlistfulllink_1.LinksGetOrderListFullLink)
    ], OrderIndexLinks.prototype, "orders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", linksgetorderindexlink_1.LinksGetOrderIndexLink)
    ], OrderIndexLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setMerchantInfos" }),
        __metadata("design:type", linkssetmerchantorderinfolistlink_1.LinksSetMerchantOrderInfoListLink)
    ], OrderIndexLinks.prototype, "setMerchantInfos", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", linksgetmarketplaceaccountssynchronizationlink_1.LinksGetMarketplaceAccountsSynchronizationLink)
    ], OrderIndexLinks.prototype, "status", void 0);
    return OrderIndexLinks;
}(utils_1.SpeakeasyBase));
exports.OrderIndexLinks = OrderIndexLinks;
