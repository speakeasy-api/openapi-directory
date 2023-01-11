package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeConnectionRequest {
    public DescribeConnectionHeaders headers;
    public DescribeConnectionRequest withHeaders(DescribeConnectionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeConnectionRequest request;
    public DescribeConnectionRequest withRequest(openapisdk.models.shared.DescribeConnectionRequest request) {
        this.request = request;
        return this;
    }
}