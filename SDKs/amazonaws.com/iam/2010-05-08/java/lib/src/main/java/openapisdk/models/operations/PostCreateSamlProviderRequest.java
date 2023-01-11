package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSamlProviderRequest {
    public PostCreateSamlProviderQueryParams queryParams;
    public PostCreateSamlProviderRequest withQueryParams(PostCreateSamlProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateSamlProviderHeaders headers;
    public PostCreateSamlProviderRequest withHeaders(PostCreateSamlProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateSamlProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}