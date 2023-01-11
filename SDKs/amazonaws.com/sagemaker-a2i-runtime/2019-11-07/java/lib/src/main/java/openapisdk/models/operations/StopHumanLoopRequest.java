package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopHumanLoopRequest {
    public StopHumanLoopHeaders headers;
    public StopHumanLoopRequest withHeaders(StopHumanLoopHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StopHumanLoopRequestBody request;
    public StopHumanLoopRequest withRequest(StopHumanLoopRequestBody request) {
        this.request = request;
        return this;
    }
}