package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchWriteItemOutput
 * A container for <code>BatchWriteItem</code> response
**/
public class BatchWriteItemOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Responses")
    public java.util.Map<String, BatchWriteResponse> responses;
    public BatchWriteItemOutput withResponses(java.util.Map<String, BatchWriteResponse> responses) {
        this.responses = responses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedItems")
    public java.util.Map<String, WriteRequest[]> unprocessedItems;
    public BatchWriteItemOutput withUnprocessedItems(java.util.Map<String, WriteRequest[]> unprocessedItems) {
        this.unprocessedItems = unprocessedItems;
        return this;
    }
}