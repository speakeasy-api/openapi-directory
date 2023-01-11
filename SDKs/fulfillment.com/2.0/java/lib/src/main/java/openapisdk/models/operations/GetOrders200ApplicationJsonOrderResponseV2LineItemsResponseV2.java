package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryDetails")
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails[] inventoryDetails;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 withInventoryDetails(GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2InventoryDetails[] inventoryDetails) {
        this.inventoryDetails = inventoryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineDetails")
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails lineDetails;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 withLineDetails(GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2LineDetails lineDetails) {
        this.lineDetails = lineDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedSkuData")
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData requestedSkuData;
    public GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2 withRequestedSkuData(GetOrders200ApplicationJsonOrderResponseV2LineItemsResponseV2RequestedSkuData requestedSkuData) {
        this.requestedSkuData = requestedSkuData;
        return this;
    }
}