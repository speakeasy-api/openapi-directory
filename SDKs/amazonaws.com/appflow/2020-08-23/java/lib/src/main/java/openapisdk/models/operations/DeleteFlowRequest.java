package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFlowRequest {
    public DeleteFlowHeaders headers;
    public DeleteFlowRequest withHeaders(DeleteFlowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteFlowRequestBody request;
    public DeleteFlowRequest withRequest(DeleteFlowRequestBody request) {
        this.request = request;
        return this;
    }
}