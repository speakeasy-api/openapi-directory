package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEndpointRequest {
    public DescribeEndpointHeaders headers;
    public DescribeEndpointRequest withHeaders(DescribeEndpointHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEndpointRequest request;
    public DescribeEndpointRequest withRequest(openapisdk.models.shared.DescribeEndpointRequest request) {
        this.request = request;
        return this;
    }
}