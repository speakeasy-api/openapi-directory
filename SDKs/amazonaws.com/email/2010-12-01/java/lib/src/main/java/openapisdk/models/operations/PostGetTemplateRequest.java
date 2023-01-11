package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetTemplateRequest {
    public PostGetTemplateQueryParams queryParams;
    public PostGetTemplateRequest withQueryParams(PostGetTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetTemplateHeaders headers;
    public PostGetTemplateRequest withHeaders(PostGetTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}