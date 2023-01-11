package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopInstanceRequest {
    public StopInstanceHeaders headers;
    public StopInstanceRequest withHeaders(StopInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopInstanceRequest request;
    public StopInstanceRequest withRequest(openapisdk.models.shared.StopInstanceRequest request) {
        this.request = request;
        return this;
    }
}