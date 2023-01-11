package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutRequest
 * A container for a Put BatchWrite request
**/
public class PutRequest {
    @JsonProperty("Item")
    public java.util.Map<String, AttributeValue> item;
    public PutRequest withItem(java.util.Map<String, AttributeValue> item) {
        this.item = item;
        return this;
    }
}