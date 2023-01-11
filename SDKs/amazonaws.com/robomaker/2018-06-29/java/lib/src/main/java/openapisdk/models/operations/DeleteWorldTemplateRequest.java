package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorldTemplateRequest {
    public DeleteWorldTemplateHeaders headers;
    public DeleteWorldTemplateRequest withHeaders(DeleteWorldTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteWorldTemplateRequestBody request;
    public DeleteWorldTemplateRequest withRequest(DeleteWorldTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}