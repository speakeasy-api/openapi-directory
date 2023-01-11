package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeprecateFlowTemplateRequest {
    public DeprecateFlowTemplateHeaders headers;
    public DeprecateFlowTemplateRequest withHeaders(DeprecateFlowTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeprecateFlowTemplateRequest request;
    public DeprecateFlowTemplateRequest withRequest(openapisdk.models.shared.DeprecateFlowTemplateRequest request) {
        this.request = request;
        return this;
    }
}