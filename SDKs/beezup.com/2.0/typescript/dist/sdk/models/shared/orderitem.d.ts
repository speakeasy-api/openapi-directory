import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe an order item. All properties with the prefix orderItem_ are translated in the list of values /user/lov/OrderMetaInfoOrderItems
**/
export declare class OrderItem extends SpeakeasyBase {
    beezUPOrderItemId: string;
    orderItemBeezUPStoreId?: string;
    orderItemCondition?: string;
    orderItemImageUrl?: string;
    orderItemItemPrice?: number;
    orderItemItemTax?: number;
    orderItemMarketPlaceProductId?: string;
    orderItemMarketplaceImageUri?: string;
    orderItemMarketplaceProductUri?: string;
    orderItemMerchantImportedProductId?: string;
    orderItemMerchantImportedProductIdColumnName?: string;
    orderItemMerchantImportedProductUrl?: string;
    orderItemMerchantProductId?: string;
    orderItemMerchantProductIdColumnName?: string;
    orderItemOrderItemType: string;
    orderItemQuantity?: number;
    orderItemShippingPrice?: number;
    orderItemTitle?: string;
    orderItemTotalPrice?: number;
    orderItemGtin?: string;
}
