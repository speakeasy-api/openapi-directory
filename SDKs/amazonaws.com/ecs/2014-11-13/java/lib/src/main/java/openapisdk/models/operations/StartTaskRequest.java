package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartTaskRequest {
    public StartTaskHeaders headers;
    public StartTaskRequest withHeaders(StartTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartTaskRequest request;
    public StartTaskRequest withRequest(openapisdk.models.shared.StartTaskRequest request) {
        this.request = request;
        return this;
    }
}