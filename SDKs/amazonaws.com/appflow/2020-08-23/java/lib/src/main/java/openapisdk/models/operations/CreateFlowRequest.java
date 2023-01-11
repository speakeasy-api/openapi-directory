package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFlowRequest {
    public CreateFlowHeaders headers;
    public CreateFlowRequest withHeaders(CreateFlowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateFlowRequestBody request;
    public CreateFlowRequest withRequest(CreateFlowRequestBody request) {
        this.request = request;
        return this;
    }
}