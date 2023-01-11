package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteBatchPredictionInput {
    @JsonProperty("BatchPredictionId")
    public String batchPredictionId;
    public DeleteBatchPredictionInput withBatchPredictionId(String batchPredictionId) {
        this.batchPredictionId = batchPredictionId;
        return this;
    }
}