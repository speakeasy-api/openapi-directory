package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAccessRequest {
    public DescribeAccessHeaders headers;
    public DescribeAccessRequest withHeaders(DescribeAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAccessRequest request;
    public DescribeAccessRequest withRequest(openapisdk.models.shared.DescribeAccessRequest request) {
        this.request = request;
        return this;
    }
}