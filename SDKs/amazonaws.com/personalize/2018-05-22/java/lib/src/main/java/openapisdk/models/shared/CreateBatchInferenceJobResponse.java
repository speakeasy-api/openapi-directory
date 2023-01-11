package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchInferenceJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchInferenceJobArn")
    public String batchInferenceJobArn;
    public CreateBatchInferenceJobResponse withBatchInferenceJobArn(String batchInferenceJobArn) {
        this.batchInferenceJobArn = batchInferenceJobArn;
        return this;
    }
}