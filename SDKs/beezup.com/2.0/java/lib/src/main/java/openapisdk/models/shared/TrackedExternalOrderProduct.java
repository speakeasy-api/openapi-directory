package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TrackedExternalOrderProduct {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("margin")
    public String margin;
    public TrackedExternalOrderProduct withMargin(String margin) {
        this.margin = margin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productActive")
    public Boolean productActive;
    public TrackedExternalOrderProduct withProductActive(Boolean productActive) {
        this.productActive = productActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productId")
    public String productId;
    public TrackedExternalOrderProduct withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productImageUrl")
    public String productImageUrl;
    public TrackedExternalOrderProduct withProductImageUrl(String productImageUrl) {
        this.productImageUrl = productImageUrl;
        return this;
    }
    @JsonProperty("productSku")
    public String productSku;
    public TrackedExternalOrderProduct withProductSku(String productSku) {
        this.productSku = productSku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productTitle")
    public String productTitle;
    public TrackedExternalOrderProduct withProductTitle(String productTitle) {
        this.productTitle = productTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public String quantity;
    public TrackedExternalOrderProduct withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unitPrice")
    public String unitPrice;
    public TrackedExternalOrderProduct withUnitPrice(String unitPrice) {
        this.unitPrice = unitPrice;
        return this;
    }
}