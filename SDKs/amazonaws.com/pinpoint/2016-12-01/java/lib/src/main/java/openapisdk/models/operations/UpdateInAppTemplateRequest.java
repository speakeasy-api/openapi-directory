package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateInAppTemplateRequest {
    public UpdateInAppTemplatePathParams pathParams;
    public UpdateInAppTemplateRequest withPathParams(UpdateInAppTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateInAppTemplateQueryParams queryParams;
    public UpdateInAppTemplateRequest withQueryParams(UpdateInAppTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateInAppTemplateHeaders headers;
    public UpdateInAppTemplateRequest withHeaders(UpdateInAppTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateInAppTemplateRequestBody request;
    public UpdateInAppTemplateRequest withRequest(UpdateInAppTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}