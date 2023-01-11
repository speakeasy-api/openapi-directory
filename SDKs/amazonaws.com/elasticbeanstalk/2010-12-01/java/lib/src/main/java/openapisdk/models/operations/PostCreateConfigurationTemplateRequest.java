package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateConfigurationTemplateRequest {
    public PostCreateConfigurationTemplateQueryParams queryParams;
    public PostCreateConfigurationTemplateRequest withQueryParams(PostCreateConfigurationTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateConfigurationTemplateHeaders headers;
    public PostCreateConfigurationTemplateRequest withHeaders(PostCreateConfigurationTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateConfigurationTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}