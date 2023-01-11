package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeprecateSystemTemplateRequest {
    public DeprecateSystemTemplateHeaders headers;
    public DeprecateSystemTemplateRequest withHeaders(DeprecateSystemTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeprecateSystemTemplateRequest request;
    public DeprecateSystemTemplateRequest withRequest(openapisdk.models.shared.DeprecateSystemTemplateRequest request) {
        this.request = request;
        return this;
    }
}