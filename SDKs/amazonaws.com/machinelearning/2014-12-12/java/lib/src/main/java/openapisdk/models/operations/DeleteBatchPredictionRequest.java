package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBatchPredictionRequest {
    public DeleteBatchPredictionHeaders headers;
    public DeleteBatchPredictionRequest withHeaders(DeleteBatchPredictionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteBatchPredictionInput request;
    public DeleteBatchPredictionRequest withRequest(openapisdk.models.shared.DeleteBatchPredictionInput request) {
        this.request = request;
        return this;
    }
}