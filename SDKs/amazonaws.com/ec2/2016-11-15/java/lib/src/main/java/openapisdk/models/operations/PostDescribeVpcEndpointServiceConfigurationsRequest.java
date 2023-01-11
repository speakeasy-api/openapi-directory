package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointServiceConfigurationsRequest {
    public PostDescribeVpcEndpointServiceConfigurationsQueryParams queryParams;
    public PostDescribeVpcEndpointServiceConfigurationsRequest withQueryParams(PostDescribeVpcEndpointServiceConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcEndpointServiceConfigurationsHeaders headers;
    public PostDescribeVpcEndpointServiceConfigurationsRequest withHeaders(PostDescribeVpcEndpointServiceConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcEndpointServiceConfigurationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}