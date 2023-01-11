package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DocumentItemData {
    @JsonProperty("product_id")
    public Long productId;
    public DocumentItemData withProductId(Long productId) {
        this.productId = productId;
        return this;
    }
    @JsonProperty("quantity")
    public Float quantity;
    public DocumentItemData withQuantity(Float quantity) {
        this.quantity = quantity;
        return this;
    }
}