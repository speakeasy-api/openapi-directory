package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListConfigurationSetsRequest {
    public PostListConfigurationSetsQueryParams queryParams;
    public PostListConfigurationSetsRequest withQueryParams(PostListConfigurationSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListConfigurationSetsHeaders headers;
    public PostListConfigurationSetsRequest withHeaders(PostListConfigurationSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListConfigurationSetsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}