package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointServicesRequest {
    public PostDescribeVpcEndpointServicesQueryParams queryParams;
    public PostDescribeVpcEndpointServicesRequest withQueryParams(PostDescribeVpcEndpointServicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcEndpointServicesHeaders headers;
    public PostDescribeVpcEndpointServicesRequest withHeaders(PostDescribeVpcEndpointServicesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcEndpointServicesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}