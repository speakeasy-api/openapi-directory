package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateTemplateRequest {
    public PostCreateTemplateQueryParams queryParams;
    public PostCreateTemplateRequest withQueryParams(PostCreateTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateTemplateHeaders headers;
    public PostCreateTemplateRequest withHeaders(PostCreateTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}