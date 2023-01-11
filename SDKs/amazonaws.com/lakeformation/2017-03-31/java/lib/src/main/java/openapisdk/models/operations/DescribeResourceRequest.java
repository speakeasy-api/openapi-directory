package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeResourceRequest {
    public DescribeResourceHeaders headers;
    public DescribeResourceRequest withHeaders(DescribeResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeResourceRequest request;
    public DescribeResourceRequest withRequest(openapisdk.models.shared.DescribeResourceRequest request) {
        this.request = request;
        return this;
    }
}