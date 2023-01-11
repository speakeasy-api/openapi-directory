package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InvokeEndpointAsyncOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InferenceId")
    public String inferenceId;
    public InvokeEndpointAsyncOutput withInferenceId(String inferenceId) {
        this.inferenceId = inferenceId;
        return this;
    }
}