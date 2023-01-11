import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderHeaderLinks } from "./orderheaderlinks";



// OrderHeaderWithLinks
/** 
 * Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails
**/
export class OrderHeaderWithLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "json, name=beezUPOrderId" })
  beezUPOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=beezUPOrderUrl" })
  beezUPOrderUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links: OrderHeaderLinks;

  @SpeakeasyMetadata({ data: "json, name=marketplaceBusinessCode" })
  marketplaceBusinessCode: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;

  @SpeakeasyMetadata({ data: "json, name=order_Buyer_Name" })
  orderBuyerName?: string;

  @SpeakeasyMetadata({ data: "json, name=order_CurrencyCode" })
  orderCurrencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Invoice_Number" })
  orderInvoiceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=order_Invoice_Uri" })
  orderInvoiceUri?: string;

  @SpeakeasyMetadata({ data: "json, name=order_LastModificationUtcDate" })
  orderLastModificationUtcDate: Date;

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

  @SpeakeasyMetadata({ data: "json, name=order_PurchaseUtcDate" })
  orderPurchaseUtcDate: Date;

  @SpeakeasyMetadata({ data: "json, name=order_Status_BeezUPOrderStatus" })
  orderStatusBeezUPOrderStatus: string;

  @SpeakeasyMetadata({ data: "json, name=order_Status_MarketplaceOrderStatus" })
  orderStatusMarketplaceOrderStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=order_TotalPrice" })
  orderTotalPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=processing" })
  processing: boolean;
}
