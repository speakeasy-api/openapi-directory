package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEventSubscriptionsRequest {
    public PostDescribeEventSubscriptionsQueryParams queryParams;
    public PostDescribeEventSubscriptionsRequest withQueryParams(PostDescribeEventSubscriptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEventSubscriptionsHeaders headers;
    public PostDescribeEventSubscriptionsRequest withHeaders(PostDescribeEventSubscriptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEventSubscriptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}