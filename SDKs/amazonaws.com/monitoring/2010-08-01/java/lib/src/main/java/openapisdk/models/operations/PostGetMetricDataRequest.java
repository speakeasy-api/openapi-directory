package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetMetricDataRequest {
    public PostGetMetricDataQueryParams queryParams;
    public PostGetMetricDataRequest withQueryParams(PostGetMetricDataQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetMetricDataHeaders headers;
    public PostGetMetricDataRequest withHeaders(PostGetMetricDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetMetricDataRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}