package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSamlProviderRequest {
    public PostDeleteSamlProviderQueryParams queryParams;
    public PostDeleteSamlProviderRequest withQueryParams(PostDeleteSamlProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSamlProviderHeaders headers;
    public PostDeleteSamlProviderRequest withHeaders(PostDeleteSamlProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSamlProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}