package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchWriteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Responses")
    public BatchWriteOperationResponse[] responses;
    public BatchWriteResponse withResponses(BatchWriteOperationResponse[] responses) {
        this.responses = responses;
        return this;
    }
}