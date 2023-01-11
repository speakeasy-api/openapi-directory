package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeExclusionsResponse {
    @JsonProperty("exclusions")
    public java.util.Map<String, Exclusion> exclusions;
    public DescribeExclusionsResponse withExclusions(java.util.Map<String, Exclusion> exclusions) {
        this.exclusions = exclusions;
        return this;
    }
    @JsonProperty("failedItems")
    public java.util.Map<String, FailedItemDetails> failedItems;
    public DescribeExclusionsResponse withFailedItems(java.util.Map<String, FailedItemDetails> failedItems) {
        this.failedItems = failedItems;
        return this;
    }
}