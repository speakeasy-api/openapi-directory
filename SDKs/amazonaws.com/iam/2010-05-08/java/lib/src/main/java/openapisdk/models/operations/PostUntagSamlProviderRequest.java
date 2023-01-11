package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagSamlProviderRequest {
    public PostUntagSamlProviderQueryParams queryParams;
    public PostUntagSamlProviderRequest withQueryParams(PostUntagSamlProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUntagSamlProviderHeaders headers;
    public PostUntagSamlProviderRequest withHeaders(PostUntagSamlProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUntagSamlProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}