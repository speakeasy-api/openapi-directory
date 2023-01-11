package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartFlowRequest {
    public StartFlowHeaders headers;
    public StartFlowRequest withHeaders(StartFlowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartFlowRequestBody request;
    public StartFlowRequest withRequest(StartFlowRequestBody request) {
        this.request = request;
        return this;
    }
}