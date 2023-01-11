package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWorldTemplateRequest {
    public UpdateWorldTemplateHeaders headers;
    public UpdateWorldTemplateRequest withHeaders(UpdateWorldTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateWorldTemplateRequestBody request;
    public UpdateWorldTemplateRequest withRequest(UpdateWorldTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}