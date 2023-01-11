package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetItemInput {
    @JsonProperty("RequestItems")
    public java.util.Map<String, KeysAndAttributes> requestItems;
    public BatchGetItemInput withRequestItems(java.util.Map<String, KeysAndAttributes> requestItems) {
        this.requestItems = requestItems;
        return this;
    }
}