package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSecurityGroupsRequest {
    public PostDescribeSecurityGroupsQueryParams queryParams;
    public PostDescribeSecurityGroupsRequest withQueryParams(PostDescribeSecurityGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeSecurityGroupsHeaders headers;
    public PostDescribeSecurityGroupsRequest withHeaders(PostDescribeSecurityGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeSecurityGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}