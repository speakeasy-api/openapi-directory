package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetBatchPredictionInput {
    @JsonProperty("BatchPredictionId")
    public String batchPredictionId;
    public GetBatchPredictionInput withBatchPredictionId(String batchPredictionId) {
        this.batchPredictionId = batchPredictionId;
        return this;
    }
}