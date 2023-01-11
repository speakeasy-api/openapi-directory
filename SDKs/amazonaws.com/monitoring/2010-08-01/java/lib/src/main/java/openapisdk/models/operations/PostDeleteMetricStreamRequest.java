package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteMetricStreamRequest {
    public PostDeleteMetricStreamQueryParams queryParams;
    public PostDeleteMetricStreamRequest withQueryParams(PostDeleteMetricStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteMetricStreamHeaders headers;
    public PostDeleteMetricStreamRequest withHeaders(PostDeleteMetricStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteMetricStreamRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}