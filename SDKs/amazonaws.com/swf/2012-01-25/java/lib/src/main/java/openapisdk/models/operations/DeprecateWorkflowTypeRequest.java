package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeprecateWorkflowTypeRequest {
    public DeprecateWorkflowTypeHeaders headers;
    public DeprecateWorkflowTypeRequest withHeaders(DeprecateWorkflowTypeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeprecateWorkflowTypeInput request;
    public DeprecateWorkflowTypeRequest withRequest(openapisdk.models.shared.DeprecateWorkflowTypeInput request) {
        this.request = request;
        return this;
    }
}