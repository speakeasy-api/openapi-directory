package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbParameterGroupsRequest {
    public PostDescribeDbParameterGroupsQueryParams queryParams;
    public PostDescribeDbParameterGroupsRequest withQueryParams(PostDescribeDbParameterGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbParameterGroupsHeaders headers;
    public PostDescribeDbParameterGroupsRequest withHeaders(PostDescribeDbParameterGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbParameterGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}