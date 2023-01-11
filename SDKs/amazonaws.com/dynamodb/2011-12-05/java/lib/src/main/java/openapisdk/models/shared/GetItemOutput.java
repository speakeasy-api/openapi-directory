package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetItemOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumedCapacityUnits")
    public Double consumedCapacityUnits;
    public GetItemOutput withConsumedCapacityUnits(Double consumedCapacityUnits) {
        this.consumedCapacityUnits = consumedCapacityUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Item")
    public java.util.Map<String, AttributeValue> item;
    public GetItemOutput withItem(java.util.Map<String, AttributeValue> item) {
        this.item = item;
        return this;
    }
}