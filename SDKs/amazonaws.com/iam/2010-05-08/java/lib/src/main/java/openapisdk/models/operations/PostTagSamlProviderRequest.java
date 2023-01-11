package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagSamlProviderRequest {
    public PostTagSamlProviderQueryParams queryParams;
    public PostTagSamlProviderRequest withQueryParams(PostTagSamlProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostTagSamlProviderHeaders headers;
    public PostTagSamlProviderRequest withHeaders(PostTagSamlProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostTagSamlProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}