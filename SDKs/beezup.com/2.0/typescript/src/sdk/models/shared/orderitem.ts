import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrderItem
/** 
 * Describe an order item. All properties with the prefix orderItem_ are translated in the list of values /user/lov/OrderMetaInfoOrderItems
**/
export class OrderItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPOrderItemId" })
  beezUPOrderItemId: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_BeezUPStoreId" })
  orderItemBeezUPStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_Condition" })
  orderItemCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_ImageUrl" })
  orderItemImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_ItemPrice" })
  orderItemItemPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=orderItem_ItemTax" })
  orderItemItemTax?: number;

  @SpeakeasyMetadata({ data: "json, name=orderItem_MarketPlaceProductId" })
  orderItemMarketPlaceProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_MarketplaceImageUri" })
  orderItemMarketplaceImageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_MarketplaceProductUri" })
  orderItemMarketplaceProductUri?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_MerchantImportedProductId" })
  orderItemMerchantImportedProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_MerchantImportedProductIdColumnName" })
  orderItemMerchantImportedProductIdColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_MerchantImportedProductUrl" })
  orderItemMerchantImportedProductUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_MerchantProductId" })
  orderItemMerchantProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_MerchantProductIdColumnName" })
  orderItemMerchantProductIdColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_OrderItemType" })
  orderItemOrderItemType: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_Quantity" })
  orderItemQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=orderItem_Shipping_Price" })
  orderItemShippingPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=orderItem_Title" })
  orderItemTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=orderItem_TotalPrice" })
  orderItemTotalPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=orderItem_gtin" })
  orderItemGtin?: string;
}
