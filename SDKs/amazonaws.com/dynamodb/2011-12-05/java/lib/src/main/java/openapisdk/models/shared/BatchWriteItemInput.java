package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchWriteItemInput {
    @JsonProperty("RequestItems")
    public java.util.Map<String, WriteRequest[]> requestItems;
    public BatchWriteItemInput withRequestItems(java.util.Map<String, WriteRequest[]> requestItems) {
        this.requestItems = requestItems;
        return this;
    }
}