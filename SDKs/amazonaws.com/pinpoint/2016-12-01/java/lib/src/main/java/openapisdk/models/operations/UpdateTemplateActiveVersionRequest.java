package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTemplateActiveVersionRequest {
    public UpdateTemplateActiveVersionPathParams pathParams;
    public UpdateTemplateActiveVersionRequest withPathParams(UpdateTemplateActiveVersionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateTemplateActiveVersionHeaders headers;
    public UpdateTemplateActiveVersionRequest withHeaders(UpdateTemplateActiveVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateTemplateActiveVersionRequestBody request;
    public UpdateTemplateActiveVersionRequest withRequest(UpdateTemplateActiveVersionRequestBody request) {
        this.request = request;
        return this;
    }
}