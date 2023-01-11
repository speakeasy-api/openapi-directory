package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBatchPredictionRequest {
    public GetBatchPredictionHeaders headers;
    public GetBatchPredictionRequest withHeaders(GetBatchPredictionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetBatchPredictionInput request;
    public GetBatchPredictionRequest withRequest(openapisdk.models.shared.GetBatchPredictionInput request) {
        this.request = request;
        return this;
    }
}