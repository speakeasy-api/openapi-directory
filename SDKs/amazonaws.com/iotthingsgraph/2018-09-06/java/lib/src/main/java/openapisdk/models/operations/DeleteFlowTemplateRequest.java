package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFlowTemplateRequest {
    public DeleteFlowTemplateHeaders headers;
    public DeleteFlowTemplateRequest withHeaders(DeleteFlowTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteFlowTemplateRequest request;
    public DeleteFlowTemplateRequest withRequest(openapisdk.models.shared.DeleteFlowTemplateRequest request) {
        this.request = request;
        return this;
    }
}