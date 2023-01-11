package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeSimulationJobBatchRequestBody {
    @JsonProperty("batch")
    public String batch;
    public DescribeSimulationJobBatchRequestBody withBatch(String batch) {
        this.batch = batch;
        return this;
    }
}