package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictRequest {
    public PredictHeaders headers;
    public PredictRequest withHeaders(PredictHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PredictInput request;
    public PredictRequest withRequest(openapisdk.models.shared.PredictInput request) {
        this.request = request;
        return this;
    }
}