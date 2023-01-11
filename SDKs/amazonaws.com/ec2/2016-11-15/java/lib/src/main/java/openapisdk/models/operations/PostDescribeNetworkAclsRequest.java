package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkAclsRequest {
    public PostDescribeNetworkAclsQueryParams queryParams;
    public PostDescribeNetworkAclsRequest withQueryParams(PostDescribeNetworkAclsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeNetworkAclsHeaders headers;
    public PostDescribeNetworkAclsRequest withHeaders(PostDescribeNetworkAclsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeNetworkAclsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}