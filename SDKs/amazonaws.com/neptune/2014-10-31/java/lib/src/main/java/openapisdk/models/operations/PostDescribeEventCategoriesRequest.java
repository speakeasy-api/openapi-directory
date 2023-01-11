package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEventCategoriesRequest {
    public PostDescribeEventCategoriesQueryParams queryParams;
    public PostDescribeEventCategoriesRequest withQueryParams(PostDescribeEventCategoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEventCategoriesHeaders headers;
    public PostDescribeEventCategoriesRequest withHeaders(PostDescribeEventCategoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEventCategoriesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}