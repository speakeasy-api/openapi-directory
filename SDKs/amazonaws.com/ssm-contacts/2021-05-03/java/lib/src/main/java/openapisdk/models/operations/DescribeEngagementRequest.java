package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEngagementRequest {
    public DescribeEngagementHeaders headers;
    public DescribeEngagementRequest withHeaders(DescribeEngagementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEngagementRequest request;
    public DescribeEngagementRequest withRequest(openapisdk.models.shared.DescribeEngagementRequest request) {
        this.request = request;
        return this;
    }
}