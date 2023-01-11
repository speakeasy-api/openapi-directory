package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAlarmsForMetricRequest {
    public PostDescribeAlarmsForMetricQueryParams queryParams;
    public PostDescribeAlarmsForMetricRequest withQueryParams(PostDescribeAlarmsForMetricQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAlarmsForMetricHeaders headers;
    public PostDescribeAlarmsForMetricRequest withHeaders(PostDescribeAlarmsForMetricHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAlarmsForMetricRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}