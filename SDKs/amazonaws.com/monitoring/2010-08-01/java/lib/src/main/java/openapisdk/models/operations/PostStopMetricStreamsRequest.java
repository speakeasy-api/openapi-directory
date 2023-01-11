package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStopMetricStreamsRequest {
    public PostStopMetricStreamsQueryParams queryParams;
    public PostStopMetricStreamsRequest withQueryParams(PostStopMetricStreamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStopMetricStreamsHeaders headers;
    public PostStopMetricStreamsRequest withHeaders(PostStopMetricStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStopMetricStreamsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}