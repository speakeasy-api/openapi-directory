package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableToPromise")
    public Long availableToPromise;
    public GetInventoryItemInventoryArrayV2ItemInventoryV2QuantityTotal withAvailableToPromise(Long availableToPromise) {
        this.availableToPromise = availableToPromise;
        return this;
    }
}