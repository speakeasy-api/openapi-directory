package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEventSubscriptionsRequest {
    public DescribeEventSubscriptionsQueryParams queryParams;
    public DescribeEventSubscriptionsRequest withQueryParams(DescribeEventSubscriptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeEventSubscriptionsHeaders headers;
    public DescribeEventSubscriptionsRequest withHeaders(DescribeEventSubscriptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEventSubscriptionsMessage request;
    public DescribeEventSubscriptionsRequest withRequest(openapisdk.models.shared.DescribeEventSubscriptionsMessage request) {
        this.request = request;
        return this;
    }
}