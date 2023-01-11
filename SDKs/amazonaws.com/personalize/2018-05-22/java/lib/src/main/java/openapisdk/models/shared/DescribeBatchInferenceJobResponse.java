package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeBatchInferenceJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchInferenceJob")
    public BatchInferenceJob batchInferenceJob;
    public DescribeBatchInferenceJobResponse withBatchInferenceJob(BatchInferenceJob batchInferenceJob) {
        this.batchInferenceJob = batchInferenceJob;
        return this;
    }
}