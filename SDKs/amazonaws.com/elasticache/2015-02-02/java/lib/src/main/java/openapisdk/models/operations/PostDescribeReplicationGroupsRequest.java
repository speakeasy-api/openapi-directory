package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReplicationGroupsRequest {
    public PostDescribeReplicationGroupsQueryParams queryParams;
    public PostDescribeReplicationGroupsRequest withQueryParams(PostDescribeReplicationGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReplicationGroupsHeaders headers;
    public PostDescribeReplicationGroupsRequest withHeaders(PostDescribeReplicationGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReplicationGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}