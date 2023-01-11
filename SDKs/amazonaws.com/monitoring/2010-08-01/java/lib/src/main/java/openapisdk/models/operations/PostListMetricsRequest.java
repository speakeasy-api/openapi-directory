package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListMetricsRequest {
    public PostListMetricsQueryParams queryParams;
    public PostListMetricsRequest withQueryParams(PostListMetricsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListMetricsHeaders headers;
    public PostListMetricsRequest withHeaders(PostListMetricsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListMetricsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}