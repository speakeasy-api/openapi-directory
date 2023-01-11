package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFilterRequest {
    public DescribeFilterHeaders headers;
    public DescribeFilterRequest withHeaders(DescribeFilterHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFilterRequest request;
    public DescribeFilterRequest withRequest(openapisdk.models.shared.DescribeFilterRequest request) {
        this.request = request;
        return this;
    }
}