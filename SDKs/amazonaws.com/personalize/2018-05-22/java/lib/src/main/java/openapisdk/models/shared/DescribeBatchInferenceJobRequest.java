package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeBatchInferenceJobRequest {
    @JsonProperty("batchInferenceJobArn")
    public String batchInferenceJobArn;
    public DescribeBatchInferenceJobRequest withBatchInferenceJobArn(String batchInferenceJobArn) {
        this.batchInferenceJobArn = batchInferenceJobArn;
        return this;
    }
}