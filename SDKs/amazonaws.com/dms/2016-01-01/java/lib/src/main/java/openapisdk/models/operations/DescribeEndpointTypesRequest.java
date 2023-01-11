package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEndpointTypesRequest {
    public DescribeEndpointTypesQueryParams queryParams;
    public DescribeEndpointTypesRequest withQueryParams(DescribeEndpointTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeEndpointTypesHeaders headers;
    public DescribeEndpointTypesRequest withHeaders(DescribeEndpointTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEndpointTypesMessage request;
    public DescribeEndpointTypesRequest withRequest(openapisdk.models.shared.DescribeEndpointTypesMessage request) {
        this.request = request;
        return this;
    }
}