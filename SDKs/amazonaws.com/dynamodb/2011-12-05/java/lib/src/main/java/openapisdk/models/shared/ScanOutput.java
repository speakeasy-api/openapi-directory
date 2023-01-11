package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScanOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsumedCapacityUnits")
    public Double consumedCapacityUnits;
    public ScanOutput withConsumedCapacityUnits(Double consumedCapacityUnits) {
        this.consumedCapacityUnits = consumedCapacityUnits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Count")
    public Long count;
    public ScanOutput withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Items")
    public java.util.Map<String, AttributeValue>[] items;
    public ScanOutput withItems(java.util.Map<String, AttributeValue>[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastEvaluatedKey")
    public Key lastEvaluatedKey;
    public ScanOutput withLastEvaluatedKey(Key lastEvaluatedKey) {
        this.lastEvaluatedKey = lastEvaluatedKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScannedCount")
    public Long scannedCount;
    public ScanOutput withScannedCount(Long scannedCount) {
        this.scannedCount = scannedCount;
        return this;
    }
}