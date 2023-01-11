package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeUserGroupsRequest {
    public PostDescribeUserGroupsQueryParams queryParams;
    public PostDescribeUserGroupsRequest withQueryParams(PostDescribeUserGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeUserGroupsHeaders headers;
    public PostDescribeUserGroupsRequest withHeaders(PostDescribeUserGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeUserGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}