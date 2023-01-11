package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopQueryRequest {
    public StopQueryHeaders headers;
    public StopQueryRequest withHeaders(StopQueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopQueryRequest request;
    public StopQueryRequest withRequest(openapisdk.models.shared.StopQueryRequest request) {
        this.request = request;
        return this;
    }
}