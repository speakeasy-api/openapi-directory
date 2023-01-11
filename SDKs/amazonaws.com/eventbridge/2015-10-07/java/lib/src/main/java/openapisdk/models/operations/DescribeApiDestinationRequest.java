package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeApiDestinationRequest {
    public DescribeApiDestinationHeaders headers;
    public DescribeApiDestinationRequest withHeaders(DescribeApiDestinationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeApiDestinationRequest request;
    public DescribeApiDestinationRequest withRequest(openapisdk.models.shared.DescribeApiDestinationRequest request) {
        this.request = request;
        return this;
    }
}