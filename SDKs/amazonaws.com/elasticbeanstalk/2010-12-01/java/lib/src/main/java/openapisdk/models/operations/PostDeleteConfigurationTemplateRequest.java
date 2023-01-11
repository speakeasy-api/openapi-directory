package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteConfigurationTemplateRequest {
    public PostDeleteConfigurationTemplateQueryParams queryParams;
    public PostDeleteConfigurationTemplateRequest withQueryParams(PostDeleteConfigurationTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteConfigurationTemplateHeaders headers;
    public PostDeleteConfigurationTemplateRequest withHeaders(PostDeleteConfigurationTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteConfigurationTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}