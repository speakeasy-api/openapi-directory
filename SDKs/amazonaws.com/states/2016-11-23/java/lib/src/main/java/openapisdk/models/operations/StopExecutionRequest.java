package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopExecutionRequest {
    public StopExecutionHeaders headers;
    public StopExecutionRequest withHeaders(StopExecutionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopExecutionInput request;
    public StopExecutionRequest withRequest(openapisdk.models.shared.StopExecutionInput request) {
        this.request = request;
        return this;
    }
}