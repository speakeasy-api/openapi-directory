package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSmsTemplateRequest {
    public CreateSmsTemplatePathParams pathParams;
    public CreateSmsTemplateRequest withPathParams(CreateSmsTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateSmsTemplateHeaders headers;
    public CreateSmsTemplateRequest withHeaders(CreateSmsTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateSmsTemplateRequestBody request;
    public CreateSmsTemplateRequest withRequest(CreateSmsTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}