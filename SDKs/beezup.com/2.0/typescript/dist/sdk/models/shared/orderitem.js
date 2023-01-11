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
exports.OrderItem = void 0;
var utils_1 = require("../../../internal/utils");
// OrderItem
/**
 * Describe an order item. All properties with the prefix orderItem_ are translated in the list of values /user/lov/OrderMetaInfoOrderItems
**/
var OrderItem = /** @class */ (function (_super) {
    __extends(OrderItem, _super);
    function OrderItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPOrderItemId" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "beezUPOrderItemId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_BeezUPStoreId" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemBeezUPStoreId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_Condition" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_ImageUrl" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemImageUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_ItemPrice" }),
        __metadata("design:type", Number)
    ], OrderItem.prototype, "orderItemItemPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_ItemTax" }),
        __metadata("design:type", Number)
    ], OrderItem.prototype, "orderItemItemTax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_MarketPlaceProductId" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemMarketPlaceProductId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_MarketplaceImageUri" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemMarketplaceImageUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_MarketplaceProductUri" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemMarketplaceProductUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_MerchantImportedProductId" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemMerchantImportedProductId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_MerchantImportedProductIdColumnName" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemMerchantImportedProductIdColumnName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_MerchantImportedProductUrl" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemMerchantImportedProductUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_MerchantProductId" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemMerchantProductId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_MerchantProductIdColumnName" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemMerchantProductIdColumnName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_OrderItemType" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemOrderItemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_Quantity" }),
        __metadata("design:type", Number)
    ], OrderItem.prototype, "orderItemQuantity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_Shipping_Price" }),
        __metadata("design:type", Number)
    ], OrderItem.prototype, "orderItemShippingPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_Title" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_TotalPrice" }),
        __metadata("design:type", Number)
    ], OrderItem.prototype, "orderItemTotalPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItem_gtin" }),
        __metadata("design:type", String)
    ], OrderItem.prototype, "orderItemGtin", void 0);
    return OrderItem;
}(utils_1.SpeakeasyBase));
exports.OrderItem = OrderItem;
