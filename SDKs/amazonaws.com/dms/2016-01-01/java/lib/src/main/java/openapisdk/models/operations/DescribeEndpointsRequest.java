package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEndpointsRequest {
    public DescribeEndpointsQueryParams queryParams;
    public DescribeEndpointsRequest withQueryParams(DescribeEndpointsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeEndpointsHeaders headers;
    public DescribeEndpointsRequest withHeaders(DescribeEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEndpointsMessage request;
    public DescribeEndpointsRequest withRequest(openapisdk.models.shared.DescribeEndpointsMessage request) {
        this.request = request;
        return this;
    }
}