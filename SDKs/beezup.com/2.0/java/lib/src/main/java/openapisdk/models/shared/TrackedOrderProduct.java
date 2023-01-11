package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TrackedOrderProduct
 * The basic information related to a product
**/
public class TrackedOrderProduct {
    @JsonProperty("margin")
    public Double margin;
    public TrackedOrderProduct withMargin(Double margin) {
        this.margin = margin;
        return this;
    }
    @JsonProperty("productExists")
    public Boolean productExists;
    public TrackedOrderProduct withProductExists(Boolean productExists) {
        this.productExists = productExists;
        return this;
    }
    @JsonProperty("productId")
    public String productId;
    public TrackedOrderProduct withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonProperty("productImageUrl")
    public String productImageUrl;
    public TrackedOrderProduct withProductImageUrl(String productImageUrl) {
        this.productImageUrl = productImageUrl;
        return this;
    }
    @JsonProperty("productSku")
    public String productSku;
    public TrackedOrderProduct withProductSku(String productSku) {
        this.productSku = productSku;
        return this;
    }
    @JsonProperty("productTitle")
    public String productTitle;
    public TrackedOrderProduct withProductTitle(String productTitle) {
        this.productTitle = productTitle;
        return this;
    }
    @JsonProperty("quantity")
    public Double quantity;
    public TrackedOrderProduct withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonProperty("unitPrice")
    public Double unitPrice;
    public TrackedOrderProduct withUnitPrice(Double unitPrice) {
        this.unitPrice = unitPrice;
        return this;
    }
}