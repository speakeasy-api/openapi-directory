package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutConformancePackRequest {
    public PutConformancePackHeaders headers;
    public PutConformancePackRequest withHeaders(PutConformancePackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutConformancePackRequest request;
    public PutConformancePackRequest withRequest(openapisdk.models.shared.PutConformancePackRequest request) {
        this.request = request;
        return this;
    }
}