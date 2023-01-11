package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeGlobalReplicationGroupsRequest {
    public PostDescribeGlobalReplicationGroupsQueryParams queryParams;
    public PostDescribeGlobalReplicationGroupsRequest withQueryParams(PostDescribeGlobalReplicationGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeGlobalReplicationGroupsHeaders headers;
    public PostDescribeGlobalReplicationGroupsRequest withHeaders(PostDescribeGlobalReplicationGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeGlobalReplicationGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}