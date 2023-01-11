package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateVoiceTemplateRequest {
    public UpdateVoiceTemplatePathParams pathParams;
    public UpdateVoiceTemplateRequest withPathParams(UpdateVoiceTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateVoiceTemplateQueryParams queryParams;
    public UpdateVoiceTemplateRequest withQueryParams(UpdateVoiceTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateVoiceTemplateHeaders headers;
    public UpdateVoiceTemplateRequest withHeaders(UpdateVoiceTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateVoiceTemplateRequestBody request;
    public UpdateVoiceTemplateRequest withRequest(UpdateVoiceTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}