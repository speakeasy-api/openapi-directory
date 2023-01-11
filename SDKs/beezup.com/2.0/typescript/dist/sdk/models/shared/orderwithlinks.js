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
exports.OrderWithLinks = void 0;
var utils_1 = require("../../../internal/utils");
var orderlinks_1 = require("./orderlinks");
var orderitem_1 = require("./orderitem");
var linkschangeorderlink_1 = require("./linkschangeorderlink");
// OrderWithLinks
/**
 * Describe in details all informations related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails.
**/
var OrderWithLinks = /** @class */ (function (_super) {
    __extends(OrderWithLinks, _super);
    function OrderWithLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accountId" }),
        __metadata("design:type", Number)
    ], OrderWithLinks.prototype, "accountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPOrderId" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "beezUPOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=beezUPOrderUrl" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "beezUPOrderUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "etag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", orderlinks_1.OrderLinks)
    ], OrderWithLinks.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceBusinessCode" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "marketplaceBusinessCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=marketplaceTechnicalCode" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "marketplaceTechnicalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orderItems", elemType: orderitem_1.OrderItem }),
        __metadata("design:type", Array)
    ], OrderWithLinks.prototype, "orderItems", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_AddressCity" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerAddressCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_AddressCountryIsoCodeAlpha2" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerAddressCountryIsoCodeAlpha2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_AddressCountryName" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerAddressCountryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_AddressLine1" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerAddressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_AddressLine2" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerAddressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_AddressLine3" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerAddressLine3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_AddressPostalCode" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerAddressPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_AddressStateOrRegion" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerAddressStateOrRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_Civility" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerCivility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_CompanyName" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerCompanyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_Email" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_FirstName" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_Identifier" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerIdentifier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_LastName" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_MobilePhone" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerMobilePhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_Name" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Buyer_Phone" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderBuyerPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Comment" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderComment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_CurrencyCode" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderCurrencyCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_FulfilledBy" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderFulfilledBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Invoice_Number" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderInvoiceNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Invoice_Uri" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderInvoiceUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_IsBusiness" }),
        __metadata("design:type", Boolean)
    ], OrderWithLinks.prototype, "orderIsBusiness", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_IsPrime" }),
        __metadata("design:type", Boolean)
    ], OrderWithLinks.prototype, "orderIsPrime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_LastModificationUtcDate" }),
        __metadata("design:type", Date)
    ], OrderWithLinks.prototype, "orderLastModificationUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_MarketPlaceChannel" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderMarketPlaceChannel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_MarketplaceLastModificationUtcDate" }),
        __metadata("design:type", Date)
    ], OrderWithLinks.prototype, "orderMarketplaceLastModificationUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_MarketplaceOrderId" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderMarketplaceOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_MerchantECommerceSoftwareName" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderMerchantECommerceSoftwareName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_MerchantECommerceSoftwareVersion" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderMerchantECommerceSoftwareVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_MerchantOrderId" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderMerchantOrderId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_OrderItemsSourceUri" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderOrderItemsSourceUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_OrderSourceUri" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderOrderSourceUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_PayingUtcDate" }),
        __metadata("design:type", Date)
    ], OrderWithLinks.prototype, "orderPayingUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_PaymentMethod" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderPaymentMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_PurchaseUtcDate" }),
        __metadata("design:type", Date)
    ], OrderWithLinks.prototype, "orderPurchaseUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_AddressCity" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingAddressCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_AddressCountryIsoCodeAlpha2" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingAddressCountryIsoCodeAlpha2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_AddressCountryName" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingAddressCountryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_AddressLine1" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingAddressLine1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_AddressLine2" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingAddressLine2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_AddressLine3" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingAddressLine3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_AddressName" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingAddressName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_AddressPostalCode" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingAddressPostalCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_AddressStateOrRegion" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingAddressStateOrRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_Civility" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingCivility", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_CompanyName" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingCompanyName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_EarliestShipUtcDate" }),
        __metadata("design:type", Date)
    ], OrderWithLinks.prototype, "orderShippingEarliestShipUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_Email" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_FirstName" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_LastName" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_LatestShipUtcDate" }),
        __metadata("design:type", Date)
    ], OrderWithLinks.prototype, "orderShippingLatestShipUtcDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_Method" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_MobilePhone" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingMobilePhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_Phone" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderShippingPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_Price" }),
        __metadata("design:type", Number)
    ], OrderWithLinks.prototype, "orderShippingPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Shipping_ShippingTax" }),
        __metadata("design:type", Number)
    ], OrderWithLinks.prototype, "orderShippingShippingTax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Status_BeezUPOrderStatus" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderStatusBeezUPOrderStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_Status_MarketplaceOrderStatus" }),
        __metadata("design:type", String)
    ], OrderWithLinks.prototype, "orderStatusMarketplaceOrderStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_TotalCommission" }),
        __metadata("design:type", Number)
    ], OrderWithLinks.prototype, "orderTotalCommission", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_TotalPrice" }),
        __metadata("design:type", Number)
    ], OrderWithLinks.prototype, "orderTotalPrice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_TotalTax" }),
        __metadata("design:type", Number)
    ], OrderWithLinks.prototype, "orderTotalTax", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=processing" }),
        __metadata("design:type", Boolean)
    ], OrderWithLinks.prototype, "processing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transitionLinks", elemType: linkschangeorderlink_1.LinksChangeOrderLink }),
        __metadata("design:type", Array)
    ], OrderWithLinks.prototype, "transitionLinks", void 0);
    return OrderWithLinks;
}(utils_1.SpeakeasyBase));
exports.OrderWithLinks = OrderWithLinks;
