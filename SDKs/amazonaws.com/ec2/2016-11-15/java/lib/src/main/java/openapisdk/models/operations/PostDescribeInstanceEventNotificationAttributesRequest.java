package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceEventNotificationAttributesRequest {
    public PostDescribeInstanceEventNotificationAttributesQueryParams queryParams;
    public PostDescribeInstanceEventNotificationAttributesRequest withQueryParams(PostDescribeInstanceEventNotificationAttributesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstanceEventNotificationAttributesHeaders headers;
    public PostDescribeInstanceEventNotificationAttributesRequest withHeaders(PostDescribeInstanceEventNotificationAttributesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstanceEventNotificationAttributesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}