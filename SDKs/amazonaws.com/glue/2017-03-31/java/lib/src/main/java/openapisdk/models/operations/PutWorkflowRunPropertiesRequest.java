package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWorkflowRunPropertiesRequest {
    public PutWorkflowRunPropertiesHeaders headers;
    public PutWorkflowRunPropertiesRequest withHeaders(PutWorkflowRunPropertiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutWorkflowRunPropertiesRequest request;
    public PutWorkflowRunPropertiesRequest withRequest(openapisdk.models.shared.PutWorkflowRunPropertiesRequest request) {
        this.request = request;
        return this;
    }
}