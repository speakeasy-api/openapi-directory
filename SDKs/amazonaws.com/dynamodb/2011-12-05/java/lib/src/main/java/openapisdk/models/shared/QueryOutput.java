package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumedCapacityUnits")
    public Double consumedCapacityUnits;
    public QueryOutput withConsumedCapacityUnits(Double consumedCapacityUnits) {
        this.consumedCapacityUnits = consumedCapacityUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;
    public QueryOutput withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public java.util.Map<String, AttributeValue>[] items;
    public QueryOutput withItems(java.util.Map<String, AttributeValue>[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastEvaluatedKey")
    public Key lastEvaluatedKey;
    public QueryOutput withLastEvaluatedKey(Key lastEvaluatedKey) {
        this.lastEvaluatedKey = lastEvaluatedKey;
        return this;
    }
}