package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAlarmHistoryRequest {
    public PostDescribeAlarmHistoryQueryParams queryParams;
    public PostDescribeAlarmHistoryRequest withQueryParams(PostDescribeAlarmHistoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAlarmHistoryHeaders headers;
    public PostDescribeAlarmHistoryRequest withHeaders(PostDescribeAlarmHistoryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAlarmHistoryRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}