package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEndpointAccessRequest {
    public PostDescribeEndpointAccessQueryParams queryParams;
    public PostDescribeEndpointAccessRequest withQueryParams(PostDescribeEndpointAccessQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEndpointAccessHeaders headers;
    public PostDescribeEndpointAccessRequest withHeaders(PostDescribeEndpointAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEndpointAccessRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}