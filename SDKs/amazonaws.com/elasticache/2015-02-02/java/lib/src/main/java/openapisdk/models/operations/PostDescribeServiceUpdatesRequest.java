package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeServiceUpdatesRequest {
    public PostDescribeServiceUpdatesQueryParams queryParams;
    public PostDescribeServiceUpdatesRequest withQueryParams(PostDescribeServiceUpdatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeServiceUpdatesHeaders headers;
    public PostDescribeServiceUpdatesRequest withHeaders(PostDescribeServiceUpdatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeServiceUpdatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}