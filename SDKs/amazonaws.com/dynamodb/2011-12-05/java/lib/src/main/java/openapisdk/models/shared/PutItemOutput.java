package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutItemOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, AttributeValue> attributes;
    public PutItemOutput withAttributes(java.util.Map<String, AttributeValue> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumedCapacityUnits")
    public Double consumedCapacityUnits;
    public PutItemOutput withConsumedCapacityUnits(Double consumedCapacityUnits) {
        this.consumedCapacityUnits = consumedCapacityUnits;
        return this;
    }
}