package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetServiceTemplateVersionRequest {
    public GetServiceTemplateVersionHeaders headers;
    public GetServiceTemplateVersionRequest withHeaders(GetServiceTemplateVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetServiceTemplateVersionInput request;
    public GetServiceTemplateVersionRequest withRequest(openapisdk.models.shared.GetServiceTemplateVersionInput request) {
        this.request = request;
        return this;
    }
}