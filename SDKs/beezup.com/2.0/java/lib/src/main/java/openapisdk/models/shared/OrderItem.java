package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderItem
 * Describe an order item. All properties with the prefix orderItem_ are translated in the list of values /user/lov/OrderMetaInfoOrderItems
**/
public class OrderItem {
    @JsonProperty("beezUPOrderItemId")
    public String beezUPOrderItemId;
    public OrderItem withBeezUpOrderItemId(String beezUPOrderItemId) {
        this.beezUPOrderItemId = beezUPOrderItemId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_BeezUPStoreId")
    public String orderItemBeezUPStoreId;
    public OrderItem withOrderItemBeezUpStoreId(String orderItemBeezUPStoreId) {
        this.orderItemBeezUPStoreId = orderItemBeezUPStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_Condition")
    public String orderItemCondition;
    public OrderItem withOrderItemCondition(String orderItemCondition) {
        this.orderItemCondition = orderItemCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_ImageUrl")
    public String orderItemImageUrl;
    public OrderItem withOrderItemImageUrl(String orderItemImageUrl) {
        this.orderItemImageUrl = orderItemImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_ItemPrice")
    public Double orderItemItemPrice;
    public OrderItem withOrderItemItemPrice(Double orderItemItemPrice) {
        this.orderItemItemPrice = orderItemItemPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_ItemTax")
    public Double orderItemItemTax;
    public OrderItem withOrderItemItemTax(Double orderItemItemTax) {
        this.orderItemItemTax = orderItemItemTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_MarketPlaceProductId")
    public String orderItemMarketPlaceProductId;
    public OrderItem withOrderItemMarketPlaceProductId(String orderItemMarketPlaceProductId) {
        this.orderItemMarketPlaceProductId = orderItemMarketPlaceProductId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_MarketplaceImageUri")
    public String orderItemMarketplaceImageUri;
    public OrderItem withOrderItemMarketplaceImageUri(String orderItemMarketplaceImageUri) {
        this.orderItemMarketplaceImageUri = orderItemMarketplaceImageUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_MarketplaceProductUri")
    public String orderItemMarketplaceProductUri;
    public OrderItem withOrderItemMarketplaceProductUri(String orderItemMarketplaceProductUri) {
        this.orderItemMarketplaceProductUri = orderItemMarketplaceProductUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_MerchantImportedProductId")
    public String orderItemMerchantImportedProductId;
    public OrderItem withOrderItemMerchantImportedProductId(String orderItemMerchantImportedProductId) {
        this.orderItemMerchantImportedProductId = orderItemMerchantImportedProductId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_MerchantImportedProductIdColumnName")
    public String orderItemMerchantImportedProductIdColumnName;
    public OrderItem withOrderItemMerchantImportedProductIdColumnName(String orderItemMerchantImportedProductIdColumnName) {
        this.orderItemMerchantImportedProductIdColumnName = orderItemMerchantImportedProductIdColumnName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_MerchantImportedProductUrl")
    public String orderItemMerchantImportedProductUrl;
    public OrderItem withOrderItemMerchantImportedProductUrl(String orderItemMerchantImportedProductUrl) {
        this.orderItemMerchantImportedProductUrl = orderItemMerchantImportedProductUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_MerchantProductId")
    public String orderItemMerchantProductId;
    public OrderItem withOrderItemMerchantProductId(String orderItemMerchantProductId) {
        this.orderItemMerchantProductId = orderItemMerchantProductId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_MerchantProductIdColumnName")
    public String orderItemMerchantProductIdColumnName;
    public OrderItem withOrderItemMerchantProductIdColumnName(String orderItemMerchantProductIdColumnName) {
        this.orderItemMerchantProductIdColumnName = orderItemMerchantProductIdColumnName;
        return this;
    }
    @JsonProperty("orderItem_OrderItemType")
    public String orderItemOrderItemType;
    public OrderItem withOrderItemOrderItemType(String orderItemOrderItemType) {
        this.orderItemOrderItemType = orderItemOrderItemType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_Quantity")
    public Double orderItemQuantity;
    public OrderItem withOrderItemQuantity(Double orderItemQuantity) {
        this.orderItemQuantity = orderItemQuantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_Shipping_Price")
    public Double orderItemShippingPrice;
    public OrderItem withOrderItemShippingPrice(Double orderItemShippingPrice) {
        this.orderItemShippingPrice = orderItemShippingPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_Title")
    public String orderItemTitle;
    public OrderItem withOrderItemTitle(String orderItemTitle) {
        this.orderItemTitle = orderItemTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_TotalPrice")
    public Double orderItemTotalPrice;
    public OrderItem withOrderItemTotalPrice(Double orderItemTotalPrice) {
        this.orderItemTotalPrice = orderItemTotalPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderItem_gtin")
    public String orderItemGtin;
    public OrderItem withOrderItemGtin(String orderItemGtin) {
        this.orderItemGtin = orderItemGtin;
        return this;
    }
}