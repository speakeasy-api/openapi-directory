package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointsRequest {
    public PostDescribeVpcEndpointsQueryParams queryParams;
    public PostDescribeVpcEndpointsRequest withQueryParams(PostDescribeVpcEndpointsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcEndpointsHeaders headers;
    public PostDescribeVpcEndpointsRequest withHeaders(PostDescribeVpcEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcEndpointsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}