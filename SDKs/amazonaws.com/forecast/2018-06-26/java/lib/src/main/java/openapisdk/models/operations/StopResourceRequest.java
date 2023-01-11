package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopResourceRequest {
    public StopResourceHeaders headers;
    public StopResourceRequest withHeaders(StopResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopResourceRequest request;
    public StopResourceRequest withRequest(openapisdk.models.shared.StopResourceRequest request) {
        this.request = request;
        return this;
    }
}