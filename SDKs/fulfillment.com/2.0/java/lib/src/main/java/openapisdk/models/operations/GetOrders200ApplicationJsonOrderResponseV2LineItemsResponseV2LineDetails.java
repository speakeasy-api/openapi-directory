package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalSku")
    public String externalSku;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails withExternalSku(String externalSku) {
        this.externalSku = externalSku;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalQuantity")
    public Long totalQuantity;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails withTotalQuantity(Long totalQuantity) {
        this.totalQuantity = totalQuantity;
        return this;
    }
}