package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbSubnetGroupsRequest {
    public PostDescribeDbSubnetGroupsQueryParams queryParams;
    public PostDescribeDbSubnetGroupsRequest withQueryParams(PostDescribeDbSubnetGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbSubnetGroupsHeaders headers;
    public PostDescribeDbSubnetGroupsRequest withHeaders(PostDescribeDbSubnetGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbSubnetGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}