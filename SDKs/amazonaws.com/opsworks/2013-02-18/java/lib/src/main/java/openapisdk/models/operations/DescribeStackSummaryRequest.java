package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStackSummaryRequest {
    public DescribeStackSummaryHeaders headers;
    public DescribeStackSummaryRequest withHeaders(DescribeStackSummaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeStackSummaryRequest request;
    public DescribeStackSummaryRequest withRequest(openapisdk.models.shared.DescribeStackSummaryRequest request) {
        this.request = request;
        return this;
    }
}