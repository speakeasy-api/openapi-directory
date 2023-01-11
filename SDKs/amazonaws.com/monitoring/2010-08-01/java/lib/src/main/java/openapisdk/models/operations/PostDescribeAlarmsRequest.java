package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAlarmsRequest {
    public PostDescribeAlarmsQueryParams queryParams;
    public PostDescribeAlarmsRequest withQueryParams(PostDescribeAlarmsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAlarmsHeaders headers;
    public PostDescribeAlarmsRequest withHeaders(PostDescribeAlarmsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAlarmsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}