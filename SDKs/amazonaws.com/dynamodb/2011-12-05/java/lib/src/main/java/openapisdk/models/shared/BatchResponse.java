package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumedCapacityUnits")
    public Double consumedCapacityUnits;
    public BatchResponse withConsumedCapacityUnits(Double consumedCapacityUnits) {
        this.consumedCapacityUnits = consumedCapacityUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public java.util.Map<String, AttributeValue>[] items;
    public BatchResponse withItems(java.util.Map<String, AttributeValue>[] items) {
        this.items = items;
        return this;
    }
}