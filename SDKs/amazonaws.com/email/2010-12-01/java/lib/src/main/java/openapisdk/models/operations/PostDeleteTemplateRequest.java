package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteTemplateRequest {
    public PostDeleteTemplateQueryParams queryParams;
    public PostDeleteTemplateRequest withQueryParams(PostDeleteTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteTemplateHeaders headers;
    public PostDeleteTemplateRequest withHeaders(PostDeleteTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}