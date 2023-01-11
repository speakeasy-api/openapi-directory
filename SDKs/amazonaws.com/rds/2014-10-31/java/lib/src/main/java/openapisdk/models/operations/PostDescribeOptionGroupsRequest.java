package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeOptionGroupsRequest {
    public PostDescribeOptionGroupsQueryParams queryParams;
    public PostDescribeOptionGroupsRequest withQueryParams(PostDescribeOptionGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeOptionGroupsHeaders headers;
    public PostDescribeOptionGroupsRequest withHeaders(PostDescribeOptionGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeOptionGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}