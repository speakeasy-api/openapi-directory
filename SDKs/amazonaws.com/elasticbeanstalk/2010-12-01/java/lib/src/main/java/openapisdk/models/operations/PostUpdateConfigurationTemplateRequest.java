package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateConfigurationTemplateRequest {
    public PostUpdateConfigurationTemplateQueryParams queryParams;
    public PostUpdateConfigurationTemplateRequest withQueryParams(PostUpdateConfigurationTemplateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateConfigurationTemplateHeaders headers;
    public PostUpdateConfigurationTemplateRequest withHeaders(PostUpdateConfigurationTemplateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateConfigurationTemplateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}