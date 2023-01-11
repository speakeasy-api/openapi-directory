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
exports.OrderLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linksclearmerchantorderinfolink_1 = require("./linksclearmerchantorderinfolink");
var linksharvestorderlink_1 = require("./linksharvestorderlink");
var linksgetorderhistorylink_1 = require("./linksgetorderhistorylink");
var linksgetorderlink_1 = require("./linksgetorderlink");
var linkssetmerchantorderinfolink_1 = require("./linkssetmerchantorderinfolink");
var OrderLinks = /** @class */ (function (_super) {
    __extends(OrderLinks, _super);
    function OrderLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clearMerchantInfo" }),
        __metadata("design:type", linksclearmerchantorderinfolink_1.LinksClearMerchantOrderInfoLink)
    ], OrderLinks.prototype, "clearMerchantInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=harvest" }),
        __metadata("design:type", linksharvestorderlink_1.LinksHarvestOrderLink)
    ], OrderLinks.prototype, "harvest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=history" }),
        __metadata("design:type", linksgetorderhistorylink_1.LinksGetOrderHistoryLink)
    ], OrderLinks.prototype, "history", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", linksgetorderlink_1.LinksGetOrderLink)
    ], OrderLinks.prototype, "self", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setMerchantInfo" }),
        __metadata("design:type", linkssetmerchantorderinfolink_1.LinksSetMerchantOrderInfoLink)
    ], OrderLinks.prototype, "setMerchantInfo", void 0);
    return OrderLinks;
}(utils_1.SpeakeasyBase));
exports.OrderLinks = OrderLinks;
