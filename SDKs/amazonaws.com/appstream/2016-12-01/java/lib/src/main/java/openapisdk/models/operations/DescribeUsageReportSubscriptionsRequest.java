package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUsageReportSubscriptionsRequest {
    public DescribeUsageReportSubscriptionsHeaders headers;
    public DescribeUsageReportSubscriptionsRequest withHeaders(DescribeUsageReportSubscriptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeUsageReportSubscriptionsRequest request;
    public DescribeUsageReportSubscriptionsRequest withRequest(openapisdk.models.shared.DescribeUsageReportSubscriptionsRequest request) {
        this.request = request;
        return this;
    }
}