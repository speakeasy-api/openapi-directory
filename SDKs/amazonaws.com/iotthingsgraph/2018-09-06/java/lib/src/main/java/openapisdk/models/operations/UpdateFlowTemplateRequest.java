package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFlowTemplateRequest {
    public UpdateFlowTemplateHeaders headers;
    public UpdateFlowTemplateRequest withHeaders(UpdateFlowTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateFlowTemplateRequest request;
    public UpdateFlowTemplateRequest withRequest(openapisdk.models.shared.UpdateFlowTemplateRequest request) {
        this.request = request;
        return this;
    }
}