package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopJobRequest {
    public StopJobHeaders headers;
    public StopJobRequest withHeaders(StopJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopJobRequest request;
    public StopJobRequest withRequest(openapisdk.models.shared.StopJobRequest request) {
        this.request = request;
        return this;
    }
}