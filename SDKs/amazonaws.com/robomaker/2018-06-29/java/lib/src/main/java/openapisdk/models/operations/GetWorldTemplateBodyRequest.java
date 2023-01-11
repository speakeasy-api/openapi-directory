package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorldTemplateBodyRequest {
    public GetWorldTemplateBodyHeaders headers;
    public GetWorldTemplateBodyRequest withHeaders(GetWorldTemplateBodyHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public GetWorldTemplateBodyRequestBody request;
    public GetWorldTemplateBodyRequest withRequest(GetWorldTemplateBodyRequestBody request) {
        this.request = request;
        return this;
    }
}