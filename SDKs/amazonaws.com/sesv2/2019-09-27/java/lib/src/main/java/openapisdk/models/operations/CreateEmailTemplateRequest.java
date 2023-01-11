package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEmailTemplateRequest {
    public CreateEmailTemplateHeaders headers;
    public CreateEmailTemplateRequest withHeaders(CreateEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateEmailTemplateRequestBody request;
    public CreateEmailTemplateRequest withRequest(CreateEmailTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}