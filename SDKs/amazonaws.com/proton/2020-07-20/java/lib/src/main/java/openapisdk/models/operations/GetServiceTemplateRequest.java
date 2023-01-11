package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceTemplateRequest {
    public GetServiceTemplateHeaders headers;
    public GetServiceTemplateRequest withHeaders(GetServiceTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetServiceTemplateInput request;
    public GetServiceTemplateRequest withRequest(openapisdk.models.shared.GetServiceTemplateInput request) {
        this.request = request;
        return this;
    }
}