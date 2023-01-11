package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeServiceRequest {
    public DescribeServiceHeaders headers;
    public DescribeServiceRequest withHeaders(DescribeServiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeServiceRequest request;
    public DescribeServiceRequest withRequest(openapisdk.models.shared.DescribeServiceRequest request) {
        this.request = request;
        return this;
    }
}