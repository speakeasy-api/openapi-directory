package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InferRxNormRequest {
    public InferRxNormHeaders headers;
    public InferRxNormRequest withHeaders(InferRxNormHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InferRxNormRequest request;
    public InferRxNormRequest withRequest(openapisdk.models.shared.InferRxNormRequest request) {
        this.request = request;
        return this;
    }
}