package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateTemplateRequest {
    public PostUpdateTemplateQueryParams queryParams;
    public PostUpdateTemplateRequest withQueryParams(PostUpdateTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateTemplateHeaders headers;
    public PostUpdateTemplateRequest withHeaders(PostUpdateTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}