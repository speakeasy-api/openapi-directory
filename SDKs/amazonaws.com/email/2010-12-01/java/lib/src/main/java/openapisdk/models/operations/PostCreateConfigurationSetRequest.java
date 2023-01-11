package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateConfigurationSetRequest {
    public PostCreateConfigurationSetQueryParams queryParams;
    public PostCreateConfigurationSetRequest withQueryParams(PostCreateConfigurationSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateConfigurationSetHeaders headers;
    public PostCreateConfigurationSetRequest withHeaders(PostCreateConfigurationSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateConfigurationSetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}