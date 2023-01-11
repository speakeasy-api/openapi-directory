package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorldTemplateRequest {
    public CreateWorldTemplateHeaders headers;
    public CreateWorldTemplateRequest withHeaders(CreateWorldTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateWorldTemplateRequestBody request;
    public CreateWorldTemplateRequest withRequest(CreateWorldTemplateRequestBody request) {
        this.request = request;
        return this;
    }
}