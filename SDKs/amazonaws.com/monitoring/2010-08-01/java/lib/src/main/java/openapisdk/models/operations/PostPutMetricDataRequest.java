package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutMetricDataRequest {
    public PostPutMetricDataQueryParams queryParams;
    public PostPutMetricDataRequest withQueryParams(PostPutMetricDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutMetricDataHeaders headers;
    public PostPutMetricDataRequest withHeaders(PostPutMetricDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutMetricDataRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}