package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBatchPredictionRequest {
    public UpdateBatchPredictionHeaders headers;
    public UpdateBatchPredictionRequest withHeaders(UpdateBatchPredictionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateBatchPredictionInput request;
    public UpdateBatchPredictionRequest withRequest(openapisdk.models.shared.UpdateBatchPredictionInput request) {
        this.request = request;
        return this;
    }
}