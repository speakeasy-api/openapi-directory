package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutMetricAlarmRequest {
    public PostPutMetricAlarmQueryParams queryParams;
    public PostPutMetricAlarmRequest withQueryParams(PostPutMetricAlarmQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPutMetricAlarmHeaders headers;
    public PostPutMetricAlarmRequest withHeaders(PostPutMetricAlarmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPutMetricAlarmRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}