package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbSecurityGroupsRequest {
    public PostDescribeDbSecurityGroupsQueryParams queryParams;
    public PostDescribeDbSecurityGroupsRequest withQueryParams(PostDescribeDbSecurityGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbSecurityGroupsHeaders headers;
    public PostDescribeDbSecurityGroupsRequest withHeaders(PostDescribeDbSecurityGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbSecurityGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}