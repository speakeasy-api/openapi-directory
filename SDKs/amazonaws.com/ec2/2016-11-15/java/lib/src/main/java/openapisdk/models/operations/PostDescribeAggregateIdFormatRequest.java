package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAggregateIdFormatRequest {
    public PostDescribeAggregateIdFormatQueryParams queryParams;
    public PostDescribeAggregateIdFormatRequest withQueryParams(PostDescribeAggregateIdFormatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeAggregateIdFormatHeaders headers;
    public PostDescribeAggregateIdFormatRequest withHeaders(PostDescribeAggregateIdFormatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeAggregateIdFormatRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}