package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterSecurityGroupsRequest {
    public PostDescribeClusterSecurityGroupsQueryParams queryParams;
    public PostDescribeClusterSecurityGroupsRequest withQueryParams(PostDescribeClusterSecurityGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClusterSecurityGroupsHeaders headers;
    public PostDescribeClusterSecurityGroupsRequest withHeaders(PostDescribeClusterSecurityGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClusterSecurityGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}