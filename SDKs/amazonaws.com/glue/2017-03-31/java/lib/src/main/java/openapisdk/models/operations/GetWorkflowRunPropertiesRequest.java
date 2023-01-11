package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkflowRunPropertiesRequest {
    public GetWorkflowRunPropertiesHeaders headers;
    public GetWorkflowRunPropertiesRequest withHeaders(GetWorkflowRunPropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetWorkflowRunPropertiesRequest request;
    public GetWorkflowRunPropertiesRequest withRequest(openapisdk.models.shared.GetWorkflowRunPropertiesRequest request) {
        this.request = request;
        return this;
    }
}