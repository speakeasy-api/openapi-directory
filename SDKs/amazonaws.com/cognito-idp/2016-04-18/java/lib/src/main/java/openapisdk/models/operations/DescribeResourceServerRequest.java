package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeResourceServerRequest {
    public DescribeResourceServerHeaders headers;
    public DescribeResourceServerRequest withHeaders(DescribeResourceServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeResourceServerRequest request;
    public DescribeResourceServerRequest withRequest(openapisdk.models.shared.DescribeResourceServerRequest request) {
        this.request = request;
        return this;
    }
}