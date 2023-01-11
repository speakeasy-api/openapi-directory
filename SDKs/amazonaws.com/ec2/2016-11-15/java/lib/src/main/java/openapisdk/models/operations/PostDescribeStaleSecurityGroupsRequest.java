package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeStaleSecurityGroupsRequest {
    public PostDescribeStaleSecurityGroupsQueryParams queryParams;
    public PostDescribeStaleSecurityGroupsRequest withQueryParams(PostDescribeStaleSecurityGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeStaleSecurityGroupsHeaders headers;
    public PostDescribeStaleSecurityGroupsRequest withHeaders(PostDescribeStaleSecurityGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeStaleSecurityGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}