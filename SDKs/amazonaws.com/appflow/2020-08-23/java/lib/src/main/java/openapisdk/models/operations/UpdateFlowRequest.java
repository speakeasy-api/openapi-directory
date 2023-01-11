package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFlowRequest {
    public UpdateFlowHeaders headers;
    public UpdateFlowRequest withHeaders(UpdateFlowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateFlowRequestBody request;
    public UpdateFlowRequest withRequest(UpdateFlowRequestBody request) {
        this.request = request;
        return this;
    }
}