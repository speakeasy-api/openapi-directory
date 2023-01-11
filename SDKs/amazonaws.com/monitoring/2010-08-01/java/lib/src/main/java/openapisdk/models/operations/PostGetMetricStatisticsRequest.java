package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetMetricStatisticsRequest {
    public PostGetMetricStatisticsQueryParams queryParams;
    public PostGetMetricStatisticsRequest withQueryParams(PostGetMetricStatisticsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetMetricStatisticsHeaders headers;
    public PostGetMetricStatisticsRequest withHeaders(PostGetMetricStatisticsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetMetricStatisticsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}