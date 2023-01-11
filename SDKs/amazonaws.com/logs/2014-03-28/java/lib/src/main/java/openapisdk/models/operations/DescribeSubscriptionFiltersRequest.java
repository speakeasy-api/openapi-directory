package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSubscriptionFiltersRequest {
    public DescribeSubscriptionFiltersQueryParams queryParams;
    public DescribeSubscriptionFiltersRequest withQueryParams(DescribeSubscriptionFiltersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeSubscriptionFiltersHeaders headers;
    public DescribeSubscriptionFiltersRequest withHeaders(DescribeSubscriptionFiltersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSubscriptionFiltersRequest request;
    public DescribeSubscriptionFiltersRequest withRequest(openapisdk.models.shared.DescribeSubscriptionFiltersRequest request) {
        this.request = request;
        return this;
    }
}