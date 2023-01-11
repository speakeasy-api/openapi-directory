package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterParameterGroupsRequest {
    public PostDescribeClusterParameterGroupsQueryParams queryParams;
    public PostDescribeClusterParameterGroupsRequest withQueryParams(PostDescribeClusterParameterGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClusterParameterGroupsHeaders headers;
    public PostDescribeClusterParameterGroupsRequest withHeaders(PostDescribeClusterParameterGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClusterParameterGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}