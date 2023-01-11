package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopStackRequest {
    public StopStackHeaders headers;
    public StopStackRequest withHeaders(StopStackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopStackRequest request;
    public StopStackRequest withRequest(openapisdk.models.shared.StopStackRequest request) {
        this.request = request;
        return this;
    }
}