package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ResolveCaseRequest {
    public ResolveCaseHeaders headers;
    public ResolveCaseRequest withHeaders(ResolveCaseHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResolveCaseRequest request;
    public ResolveCaseRequest withRequest(openapisdk.models.shared.ResolveCaseRequest request) {
        this.request = request;
        return this;
    }
}