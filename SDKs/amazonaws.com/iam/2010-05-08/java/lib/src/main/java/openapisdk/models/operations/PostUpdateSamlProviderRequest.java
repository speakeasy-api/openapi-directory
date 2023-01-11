package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateSamlProviderRequest {
    public PostUpdateSamlProviderQueryParams queryParams;
    public PostUpdateSamlProviderRequest withQueryParams(PostUpdateSamlProviderQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostUpdateSamlProviderHeaders headers;
    public PostUpdateSamlProviderRequest withHeaders(PostUpdateSamlProviderHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostUpdateSamlProviderRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}