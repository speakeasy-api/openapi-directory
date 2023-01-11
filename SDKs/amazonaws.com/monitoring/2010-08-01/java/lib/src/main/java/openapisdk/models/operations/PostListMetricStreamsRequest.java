package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListMetricStreamsRequest {
    public PostListMetricStreamsQueryParams queryParams;
    public PostListMetricStreamsRequest withQueryParams(PostListMetricStreamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostListMetricStreamsHeaders headers;
    public PostListMetricStreamsRequest withHeaders(PostListMetricStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostListMetricStreamsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}