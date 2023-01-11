package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeUsersRequest {
    public PostDescribeUsersQueryParams queryParams;
    public PostDescribeUsersRequest withQueryParams(PostDescribeUsersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeUsersHeaders headers;
    public PostDescribeUsersRequest withHeaders(PostDescribeUsersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeUsersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}