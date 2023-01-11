package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSamlProviderRequest {
    public PostGetSamlProviderQueryParams queryParams;
    public PostGetSamlProviderRequest withQueryParams(PostGetSamlProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetSamlProviderHeaders headers;
    public PostGetSamlProviderRequest withHeaders(PostGetSamlProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetSamlProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}