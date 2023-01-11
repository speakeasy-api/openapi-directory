package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowRequest {
    public GetWorkflowHeaders headers;
    public GetWorkflowRequest withHeaders(GetWorkflowHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetWorkflowRequest request;
    public GetWorkflowRequest withRequest(openapisdk.models.shared.GetWorkflowRequest request) {
        this.request = request;
        return this;
    }
}