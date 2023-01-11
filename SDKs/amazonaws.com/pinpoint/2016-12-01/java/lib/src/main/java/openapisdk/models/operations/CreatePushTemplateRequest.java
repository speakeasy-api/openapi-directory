package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePushTemplateRequest {
    public CreatePushTemplatePathParams pathParams;
    public CreatePushTemplateRequest withPathParams(CreatePushTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreatePushTemplateHeaders headers;
    public CreatePushTemplateRequest withHeaders(CreatePushTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreatePushTemplateRequestBody request;
    public CreatePushTemplateRequest withRequest(CreatePushTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}