package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StopFlowRequest {
    public StopFlowHeaders headers;
    public StopFlowRequest withHeaders(StopFlowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StopFlowRequestBody request;
    public StopFlowRequest withRequest(StopFlowRequestBody request) {
        this.request = request;
        return this;
    }
}