import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe an order item. All properties with the prefix orderItem_ are translated in the list of values /user/lov/OrderMetaInfoOrderItems
 */
export declare class OrderItem extends SpeakeasyBase {
    /**
     * The BeezUP identifier of the order Item
     */
    beezUPOrderItemId: string;
    /**
     * The store id in the beezup system related to the order item. This property will help you to match the order to the inventory system.
     */
    orderItemBeezUPStoreId?: string;
    /**
     * The merchant product condition of the order item
     */
    orderItemCondition?: string;
    /**
     * The URL of the image of the order item
     */
    orderItemImageUrl?: string;
    /**
     * The price of the order item
     */
    orderItemItemPrice?: number;
    /**
     * The tax of the order item
     */
    orderItemItemTax?: number;
    /**
     * The marketplace product identifier of the order item
     */
    orderItemMarketPlaceProductId?: string;
    /**
     * The marketplace image uri
     */
    orderItemMarketplaceImageUri?: string;
    /**
     * The merchant product uri of the order item
     */
    orderItemMarketplaceProductUri?: string;
    /**
     * The product id indicated in the catalog importation in BeezUP system for this order item. This property will help you to match the order to the inventory system.
     */
    orderItemMerchantImportedProductId?: string;
    /**
     * The column name for the product id indicated in the catalog importation in BeezUP system related to this order item. This property will help you to match the order to the inventory system.
     */
    orderItemMerchantImportedProductIdColumnName?: string;
    /**
     * The product url indicated in the catalog importation in BeezUP system related to this order item
     */
    orderItemMerchantImportedProductUrl?: string;
    /**
     * The merchant product id of the order item
     */
    orderItemMerchantProductId?: string;
    /**
     * The column name indicate in the mapping for the product id related to the order item
     */
    orderItemMerchantProductIdColumnName?: string;
    /**
     * The order item type of the order item
     */
    orderItemOrderItemType: string;
    /**
     * The quantity of the order item
     */
    orderItemQuantity?: number;
    /**
     * The shipping price of the order item
     */
    orderItemShippingPrice?: number;
    /**
     * The title of the order item
     */
    orderItemTitle?: string;
    /**
     * The total price of the order item
     */
    orderItemTotalPrice?: number;
    /**
     * The order item gtin
     */
    orderItemGtin?: string;
}
