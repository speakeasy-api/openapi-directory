package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSystemTemplateRequest {
    public GetSystemTemplateHeaders headers;
    public GetSystemTemplateRequest withHeaders(GetSystemTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSystemTemplateRequest request;
    public GetSystemTemplateRequest withRequest(openapisdk.models.shared.GetSystemTemplateRequest request) {
        this.request = request;
        return this;
    }
}