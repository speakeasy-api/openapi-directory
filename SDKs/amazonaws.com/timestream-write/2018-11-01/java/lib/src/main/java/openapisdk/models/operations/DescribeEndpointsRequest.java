package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEndpointsRequest {
    public DescribeEndpointsHeaders headers;
    public DescribeEndpointsRequest withHeaders(DescribeEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DescribeEndpointsRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}