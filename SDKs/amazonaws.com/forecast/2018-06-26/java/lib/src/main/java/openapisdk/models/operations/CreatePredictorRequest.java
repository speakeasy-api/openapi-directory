package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePredictorRequest {
    public CreatePredictorHeaders headers;
    public CreatePredictorRequest withHeaders(CreatePredictorHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePredictorRequest request;
    public CreatePredictorRequest withRequest(openapisdk.models.shared.CreatePredictorRequest request) {
        this.request = request;
        return this;
    }
}