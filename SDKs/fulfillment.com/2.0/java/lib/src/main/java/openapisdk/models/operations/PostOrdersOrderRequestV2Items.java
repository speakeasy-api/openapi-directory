package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostOrdersOrderRequestV2Items {
    @JsonProperty("declaredValue")
    public String declaredValue;
    public PostOrdersOrderRequestV2Items withDeclaredValue(String declaredValue) {
        this.declaredValue = declaredValue;
        return this;
    }
    @JsonProperty("quantity")
    public Long quantity;
    public PostOrdersOrderRequestV2Items withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonProperty("sku")
    public String sku;
    public PostOrdersOrderRequestV2Items withSku(String sku) {
        this.sku = sku;
        return this;
    }
}