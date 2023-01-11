package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartExecutionRequest {
    public StartExecutionHeaders headers;
    public StartExecutionRequest withHeaders(StartExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartExecutionInput request;
    public StartExecutionRequest withRequest(openapisdk.models.shared.StartExecutionInput request) {
        this.request = request;
        return this;
    }
}