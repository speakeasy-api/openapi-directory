package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostStartMetricStreamsRequest {
    public PostStartMetricStreamsQueryParams queryParams;
    public PostStartMetricStreamsRequest withQueryParams(PostStartMetricStreamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostStartMetricStreamsHeaders headers;
    public PostStartMetricStreamsRequest withHeaders(PostStartMetricStreamsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostStartMetricStreamsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}