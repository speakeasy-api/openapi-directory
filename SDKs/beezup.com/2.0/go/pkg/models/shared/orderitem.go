package shared

// OrderItem
// Describe an order item. All properties with the prefix orderItem_ are translated in the list of values /user/lov/OrderMetaInfoOrderItems
type OrderItem struct {
	BeezUPOrderItemID                            string   `json:"beezUPOrderItemId"`
	OrderItemBeezUPStoreID                       *string  `json:"orderItem_BeezUPStoreId,omitempty"`
	OrderItemCondition                           *string  `json:"orderItem_Condition,omitempty"`
	OrderItemImageURL                            *string  `json:"orderItem_ImageUrl,omitempty"`
	OrderItemItemPrice                           *float64 `json:"orderItem_ItemPrice,omitempty"`
	OrderItemItemTax                             *float64 `json:"orderItem_ItemTax,omitempty"`
	OrderItemMarketPlaceProductID                *string  `json:"orderItem_MarketPlaceProductId,omitempty"`
	OrderItemMarketplaceImageURI                 *string  `json:"orderItem_MarketplaceImageUri,omitempty"`
	OrderItemMarketplaceProductURI               *string  `json:"orderItem_MarketplaceProductUri,omitempty"`
	OrderItemMerchantImportedProductID           *string  `json:"orderItem_MerchantImportedProductId,omitempty"`
	OrderItemMerchantImportedProductIDColumnName *string  `json:"orderItem_MerchantImportedProductIdColumnName,omitempty"`
	OrderItemMerchantImportedProductURL          *string  `json:"orderItem_MerchantImportedProductUrl,omitempty"`
	OrderItemMerchantProductID                   *string  `json:"orderItem_MerchantProductId,omitempty"`
	OrderItemMerchantProductIDColumnName         *string  `json:"orderItem_MerchantProductIdColumnName,omitempty"`
	OrderItemOrderItemType                       string   `json:"orderItem_OrderItemType"`
	OrderItemQuantity                            *float64 `json:"orderItem_Quantity,omitempty"`
	OrderItemShippingPrice                       *float64 `json:"orderItem_Shipping_Price,omitempty"`
	OrderItemTitle                               *string  `json:"orderItem_Title,omitempty"`
	OrderItemTotalPrice                          *float64 `json:"orderItem_TotalPrice,omitempty"`
	OrderItemGtin                                *string  `json:"orderItem_gtin,omitempty"`
}
