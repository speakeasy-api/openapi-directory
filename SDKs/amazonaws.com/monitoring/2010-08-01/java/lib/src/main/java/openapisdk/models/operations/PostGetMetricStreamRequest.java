package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetMetricStreamRequest {
    public PostGetMetricStreamQueryParams queryParams;
    public PostGetMetricStreamRequest withQueryParams(PostGetMetricStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetMetricStreamHeaders headers;
    public PostGetMetricStreamRequest withHeaders(PostGetMetricStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetMetricStreamRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}