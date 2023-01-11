package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateFlowTemplateRequest {
    public CreateFlowTemplateHeaders headers;
    public CreateFlowTemplateRequest withHeaders(CreateFlowTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateFlowTemplateRequest request;
    public CreateFlowTemplateRequest withRequest(openapisdk.models.shared.CreateFlowTemplateRequest request) {
        this.request = request;
        return this;
    }
}