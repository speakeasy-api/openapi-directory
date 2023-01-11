package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopTaskRequest {
    public StopTaskHeaders headers;
    public StopTaskRequest withHeaders(StopTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopTaskRequest request;
    public StopTaskRequest withRequest(openapisdk.models.shared.StopTaskRequest request) {
        this.request = request;
        return this;
    }
}