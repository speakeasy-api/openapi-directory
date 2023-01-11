package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTagsRequest {
    public PostDescribeTagsQueryParams queryParams;
    public PostDescribeTagsRequest withQueryParams(PostDescribeTagsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTagsHeaders headers;
    public PostDescribeTagsRequest withHeaders(PostDescribeTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTagsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}