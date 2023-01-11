package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelSimulationJobBatchRequestBody {
    @JsonProperty("batch")
    public String batch;
    public CancelSimulationJobBatchRequestBody withBatch(String batch) {
        this.batch = batch;
        return this;
    }
}