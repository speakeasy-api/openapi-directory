package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSystemTemplateRequest {
    public CreateSystemTemplateHeaders headers;
    public CreateSystemTemplateRequest withHeaders(CreateSystemTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSystemTemplateRequest request;
    public CreateSystemTemplateRequest withRequest(openapisdk.models.shared.CreateSystemTemplateRequest request) {
        this.request = request;
        return this;
    }
}