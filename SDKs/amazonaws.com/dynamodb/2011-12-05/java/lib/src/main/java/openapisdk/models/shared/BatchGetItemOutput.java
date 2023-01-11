package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetItemOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Responses")
    public java.util.Map<String, BatchResponse> responses;
    public BatchGetItemOutput withResponses(java.util.Map<String, BatchResponse> responses) {
        this.responses = responses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UnprocessedKeys")
    public java.util.Map<String, KeysAndAttributes> unprocessedKeys;
    public BatchGetItemOutput withUnprocessedKeys(java.util.Map<String, KeysAndAttributes> unprocessedKeys) {
        this.unprocessedKeys = unprocessedKeys;
        return this;
    }
}