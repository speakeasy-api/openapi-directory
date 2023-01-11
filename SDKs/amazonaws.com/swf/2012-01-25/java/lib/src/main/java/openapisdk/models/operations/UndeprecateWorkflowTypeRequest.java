package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UndeprecateWorkflowTypeRequest {
    public UndeprecateWorkflowTypeHeaders headers;
    public UndeprecateWorkflowTypeRequest withHeaders(UndeprecateWorkflowTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UndeprecateWorkflowTypeInput request;
    public UndeprecateWorkflowTypeRequest withRequest(openapisdk.models.shared.UndeprecateWorkflowTypeInput request) {
        this.request = request;
        return this;
    }
}