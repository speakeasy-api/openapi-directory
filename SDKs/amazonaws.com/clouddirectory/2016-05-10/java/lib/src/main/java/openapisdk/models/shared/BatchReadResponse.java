package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchReadResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Responses")
    public BatchReadOperationResponse[] responses;
    public BatchReadResponse withResponses(BatchReadOperationResponse[] responses) {
        this.responses = responses;
        return this;
    }
}