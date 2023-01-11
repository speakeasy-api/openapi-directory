package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddAttributesToFindingsResponse {
    @JsonProperty("failedItems")
    public java.util.Map<String, FailedItemDetails> failedItems;
    public AddAttributesToFindingsResponse withFailedItems(java.util.Map<String, FailedItemDetails> failedItems) {
        this.failedItems = failedItems;
        return this;
    }
}