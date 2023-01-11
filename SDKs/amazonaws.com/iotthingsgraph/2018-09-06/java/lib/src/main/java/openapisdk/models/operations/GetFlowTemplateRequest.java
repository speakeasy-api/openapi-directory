package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFlowTemplateRequest {
    public GetFlowTemplateHeaders headers;
    public GetFlowTemplateRequest withHeaders(GetFlowTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetFlowTemplateRequest request;
    public GetFlowTemplateRequest withRequest(openapisdk.models.shared.GetFlowTemplateRequest request) {
        this.request = request;
        return this;
    }
}