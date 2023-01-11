package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLogPatternRequest {
    public DescribeLogPatternHeaders headers;
    public DescribeLogPatternRequest withHeaders(DescribeLogPatternHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLogPatternRequest request;
    public DescribeLogPatternRequest withRequest(openapisdk.models.shared.DescribeLogPatternRequest request) {
        this.request = request;
        return this;
    }
}