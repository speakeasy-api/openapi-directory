package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declaredValue")
    public String declaredValue;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData withDeclaredValue(String declaredValue) {
        this.declaredValue = declaredValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Long quantity;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData withQuantity(Long quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData withSku(String sku) {
        this.sku = sku;
        return this;
    }
}