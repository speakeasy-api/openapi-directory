package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInAppTemplateRequest {
    public CreateInAppTemplatePathParams pathParams;
    public CreateInAppTemplateRequest withPathParams(CreateInAppTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateInAppTemplateHeaders headers;
    public CreateInAppTemplateRequest withHeaders(CreateInAppTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateInAppTemplateRequestBody request;
    public CreateInAppTemplateRequest withRequest(CreateInAppTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}