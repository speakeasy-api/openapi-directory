package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateVoiceTemplateRequest {
    public CreateVoiceTemplatePathParams pathParams;
    public CreateVoiceTemplateRequest withPathParams(CreateVoiceTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateVoiceTemplateHeaders headers;
    public CreateVoiceTemplateRequest withHeaders(CreateVoiceTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateVoiceTemplateRequestBody request;
    public CreateVoiceTemplateRequest withRequest(CreateVoiceTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}