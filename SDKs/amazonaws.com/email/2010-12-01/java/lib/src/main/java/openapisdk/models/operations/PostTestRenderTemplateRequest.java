package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTestRenderTemplateRequest {
    public PostTestRenderTemplateQueryParams queryParams;
    public PostTestRenderTemplateRequest withQueryParams(PostTestRenderTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTestRenderTemplateHeaders headers;
    public PostTestRenderTemplateRequest withHeaders(PostTestRenderTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTestRenderTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}