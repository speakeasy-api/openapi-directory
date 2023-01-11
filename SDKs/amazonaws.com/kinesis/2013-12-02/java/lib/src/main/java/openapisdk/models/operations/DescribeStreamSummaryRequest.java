package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeStreamSummaryRequest {
    public DescribeStreamSummaryHeaders headers;
    public DescribeStreamSummaryRequest withHeaders(DescribeStreamSummaryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeStreamSummaryInput request;
    public DescribeStreamSummaryRequest withRequest(openapisdk.models.shared.DescribeStreamSummaryInput request) {
        this.request = request;
        return this;
    }
}