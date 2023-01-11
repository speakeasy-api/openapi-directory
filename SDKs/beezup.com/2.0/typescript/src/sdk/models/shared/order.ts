import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderLinks } from "./orderlinks";
import { OrderItem } from "./orderitem";
import { LinksChangeOrderLink } from "./linkschangeorderlink";



// Order
/** 
 * Describe in details all informations related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails.
**/
export class Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "json, name=beezUPOrderId" })
  beezUPOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=beezUPOrderUrl" })
  beezUPOrderUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: OrderLinks;

  @SpeakeasyMetadata({ data: "json, name=marketplaceBusinessCode" })
  marketplaceBusinessCode: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;

  @SpeakeasyMetadata({ data: "json, name=orderItems", elemType: OrderItem })
  orderItems: OrderItem[];

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_AddressCity" })
  orderBuyerAddressCity?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_AddressCountryIsoCodeAlpha2" })
  orderBuyerAddressCountryIsoCodeAlpha2?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_AddressCountryName" })
  orderBuyerAddressCountryName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_AddressLine1" })
  orderBuyerAddressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_AddressLine2" })
  orderBuyerAddressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_AddressLine3" })
  orderBuyerAddressLine3?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_AddressPostalCode" })
  orderBuyerAddressPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_AddressStateOrRegion" })
  orderBuyerAddressStateOrRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_Civility" })
  orderBuyerCivility?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_CompanyName" })
  orderBuyerCompanyName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_Email" })
  orderBuyerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_FirstName" })
  orderBuyerFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_Identifier" })
  orderBuyerIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_LastName" })
  orderBuyerLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_MobilePhone" })
  orderBuyerMobilePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_Name" })
  orderBuyerName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_Phone" })
  orderBuyerPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Comment" })
  orderComment?: string;

  @SpeakeasyMetadata({ data: "json, name=order_CurrencyCode" })
  orderCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=order_FulfilledBy" })
  orderFulfilledBy?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Invoice_Number" })
  orderInvoiceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Invoice_Uri" })
  orderInvoiceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=order_IsBusiness" })
  orderIsBusiness?: boolean;

  @SpeakeasyMetadata({ data: "json, name=order_IsPrime" })
  orderIsPrime?: boolean;

  @SpeakeasyMetadata({ data: "json, name=order_LastModificationUtcDate" })
  orderLastModificationUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=order_MarketPlaceChannel" })
  orderMarketPlaceChannel?: string;

  @SpeakeasyMetadata({ data: "json, name=order_MarketplaceLastModificationUtcDate" })
  orderMarketplaceLastModificationUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=order_MarketplaceOrderId" })
  orderMarketplaceOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=order_MerchantECommerceSoftwareName" })
  orderMerchantECommerceSoftwareName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_MerchantECommerceSoftwareVersion" })
  orderMerchantECommerceSoftwareVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=order_MerchantOrderId" })
  orderMerchantOrderId?: string;

  @SpeakeasyMetadata({ data: "json, name=order_OrderItemsSourceUri" })
  orderOrderItemsSourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=order_OrderSourceUri" })
  orderOrderSourceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=order_PayingUtcDate" })
  orderPayingUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=order_PaymentMethod" })
  orderPaymentMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=order_PurchaseUtcDate" })
  orderPurchaseUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_AddressCity" })
  orderShippingAddressCity?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_AddressCountryIsoCodeAlpha2" })
  orderShippingAddressCountryIsoCodeAlpha2?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_AddressCountryName" })
  orderShippingAddressCountryName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_AddressLine1" })
  orderShippingAddressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_AddressLine2" })
  orderShippingAddressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_AddressLine3" })
  orderShippingAddressLine3?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_AddressName" })
  orderShippingAddressName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_AddressPostalCode" })
  orderShippingAddressPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_AddressStateOrRegion" })
  orderShippingAddressStateOrRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_Civility" })
  orderShippingCivility?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_CompanyName" })
  orderShippingCompanyName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_EarliestShipUtcDate" })
  orderShippingEarliestShipUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_Email" })
  orderShippingEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_FirstName" })
  orderShippingFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_LastName" })
  orderShippingLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_LatestShipUtcDate" })
  orderShippingLatestShipUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_Method" })
  orderShippingMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_MobilePhone" })
  orderShippingMobilePhone?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_Phone" })
  orderShippingPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_Price" })
  orderShippingPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=order_Shipping_ShippingTax" })
  orderShippingShippingTax?: number;

  @SpeakeasyMetadata({ data: "json, name=order_Status_BeezUPOrderStatus" })
  orderStatusBeezUPOrderStatus: string;

  @SpeakeasyMetadata({ data: "json, name=order_Status_MarketplaceOrderStatus" })
  orderStatusMarketplaceOrderStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=order_TotalCommission" })
  orderTotalCommission?: number;

  @SpeakeasyMetadata({ data: "json, name=order_TotalPrice" })
  orderTotalPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=order_TotalTax" })
  orderTotalTax?: number;

  @SpeakeasyMetadata({ data: "json, name=processing" })
  processing: boolean;

  @SpeakeasyMetadata({ data: "json, name=transitionLinks", elemType: LinksChangeOrderLink })
  transitionLinks: LinksChangeOrderLink[];
}
