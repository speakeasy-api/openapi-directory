package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunTaskRequest {
    public RunTaskHeaders headers;
    public RunTaskRequest withHeaders(RunTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RunTaskRequest request;
    public RunTaskRequest withRequest(openapisdk.models.shared.RunTaskRequest request) {
        this.request = request;
        return this;
    }
}