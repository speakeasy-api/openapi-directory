package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePushTemplateRequest {
    public UpdatePushTemplatePathParams pathParams;
    public UpdatePushTemplateRequest withPathParams(UpdatePushTemplatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdatePushTemplateQueryParams queryParams;
    public UpdatePushTemplateRequest withQueryParams(UpdatePushTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdatePushTemplateHeaders headers;
    public UpdatePushTemplateRequest withHeaders(UpdatePushTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdatePushTemplateRequestBody request;
    public UpdatePushTemplateRequest withRequest(UpdatePushTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}