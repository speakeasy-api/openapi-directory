package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEmailTemplateRequest {
    public UpdateEmailTemplatePathParams pathParams;
    public UpdateEmailTemplateRequest withPathParams(UpdateEmailTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateEmailTemplateHeaders headers;
    public UpdateEmailTemplateRequest withHeaders(UpdateEmailTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateEmailTemplateRequestBody request;
    public UpdateEmailTemplateRequest withRequest(UpdateEmailTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}