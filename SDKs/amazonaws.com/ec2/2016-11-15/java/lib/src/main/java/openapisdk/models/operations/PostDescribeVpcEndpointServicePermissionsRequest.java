package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpcEndpointServicePermissionsRequest {
    public PostDescribeVpcEndpointServicePermissionsQueryParams queryParams;
    public PostDescribeVpcEndpointServicePermissionsRequest withQueryParams(PostDescribeVpcEndpointServicePermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpcEndpointServicePermissionsHeaders headers;
    public PostDescribeVpcEndpointServicePermissionsRequest withHeaders(PostDescribeVpcEndpointServicePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpcEndpointServicePermissionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}