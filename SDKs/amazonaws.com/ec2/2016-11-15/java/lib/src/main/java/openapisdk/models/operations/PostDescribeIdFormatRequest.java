package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeIdFormatRequest {
    public PostDescribeIdFormatQueryParams queryParams;
    public PostDescribeIdFormatRequest withQueryParams(PostDescribeIdFormatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeIdFormatHeaders headers;
    public PostDescribeIdFormatRequest withHeaders(PostDescribeIdFormatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeIdFormatRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}