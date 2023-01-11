package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveAttributesFromFindingsResponse {
    @JsonProperty("failedItems")
    public java.util.Map<String, FailedItemDetails> failedItems;
    public RemoveAttributesFromFindingsResponse withFailedItems(java.util.Map<String, FailedItemDetails> failedItems) {
        this.failedItems = failedItems;
        return this;
    }
}