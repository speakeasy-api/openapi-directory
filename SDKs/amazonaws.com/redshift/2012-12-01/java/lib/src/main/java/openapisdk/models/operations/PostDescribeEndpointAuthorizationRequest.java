package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEndpointAuthorizationRequest {
    public PostDescribeEndpointAuthorizationQueryParams queryParams;
    public PostDescribeEndpointAuthorizationRequest withQueryParams(PostDescribeEndpointAuthorizationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEndpointAuthorizationHeaders headers;
    public PostDescribeEndpointAuthorizationRequest withHeaders(PostDescribeEndpointAuthorizationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEndpointAuthorizationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}