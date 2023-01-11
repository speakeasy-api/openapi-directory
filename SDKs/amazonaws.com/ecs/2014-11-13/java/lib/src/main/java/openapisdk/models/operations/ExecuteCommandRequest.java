package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteCommandRequest {
    public ExecuteCommandHeaders headers;
    public ExecuteCommandRequest withHeaders(ExecuteCommandHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecuteCommandRequest request;
    public ExecuteCommandRequest withRequest(openapisdk.models.shared.ExecuteCommandRequest request) {
        this.request = request;
        return this;
    }
}