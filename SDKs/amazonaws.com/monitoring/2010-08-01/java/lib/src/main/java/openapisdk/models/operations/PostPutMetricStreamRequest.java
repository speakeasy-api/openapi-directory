package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutMetricStreamRequest {
    public PostPutMetricStreamQueryParams queryParams;
    public PostPutMetricStreamRequest withQueryParams(PostPutMetricStreamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutMetricStreamHeaders headers;
    public PostPutMetricStreamRequest withHeaders(PostPutMetricStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutMetricStreamRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}