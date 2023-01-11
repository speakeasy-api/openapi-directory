package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBatchPredictionRequest {
    public CreateBatchPredictionHeaders headers;
    public CreateBatchPredictionRequest withHeaders(CreateBatchPredictionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateBatchPredictionInput request;
    public CreateBatchPredictionRequest withRequest(openapisdk.models.shared.CreateBatchPredictionInput request) {
        this.request = request;
        return this;
    }
}