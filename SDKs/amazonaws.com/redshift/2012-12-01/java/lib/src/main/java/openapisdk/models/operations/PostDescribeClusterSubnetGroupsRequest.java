package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterSubnetGroupsRequest {
    public PostDescribeClusterSubnetGroupsQueryParams queryParams;
    public PostDescribeClusterSubnetGroupsRequest withQueryParams(PostDescribeClusterSubnetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClusterSubnetGroupsHeaders headers;
    public PostDescribeClusterSubnetGroupsRequest withHeaders(PostDescribeClusterSubnetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClusterSubnetGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}