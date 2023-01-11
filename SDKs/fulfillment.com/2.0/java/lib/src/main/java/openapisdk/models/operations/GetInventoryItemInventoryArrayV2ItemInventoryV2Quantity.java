package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal total;
    public GetInventoryItemInventoryArrayV2ItemInventoryV2Quantity withTotal(GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal total) {
        this.total = total;
        return this;
    }
}