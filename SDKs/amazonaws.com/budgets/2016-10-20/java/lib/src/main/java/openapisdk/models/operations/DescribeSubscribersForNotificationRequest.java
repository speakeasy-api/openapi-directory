package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSubscribersForNotificationRequest {
    public DescribeSubscribersForNotificationQueryParams queryParams;
    public DescribeSubscribersForNotificationRequest withQueryParams(DescribeSubscribersForNotificationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeSubscribersForNotificationHeaders headers;
    public DescribeSubscribersForNotificationRequest withHeaders(DescribeSubscribersForNotificationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSubscribersForNotificationRequest request;
    public DescribeSubscribersForNotificationRequest withRequest(openapisdk.models.shared.DescribeSubscribersForNotificationRequest request) {
        this.request = request;
        return this;
    }
}