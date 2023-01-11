package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeResourceGroupsResponse {
    @JsonProperty("failedItems")
    public java.util.Map<String, FailedItemDetails> failedItems;
    public DescribeResourceGroupsResponse withFailedItems(java.util.Map<String, FailedItemDetails> failedItems) {
        this.failedItems = failedItems;
        return this;
    }
    @JsonProperty("resourceGroups")
    public ResourceGroup[] resourceGroups;
    public DescribeResourceGroupsResponse withResourceGroups(ResourceGroup[] resourceGroups) {
        this.resourceGroups = resourceGroups;
        return this;
    }
}