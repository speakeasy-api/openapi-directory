package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeIdentityIdFormatRequest {
    public PostDescribeIdentityIdFormatQueryParams queryParams;
    public PostDescribeIdentityIdFormatRequest withQueryParams(PostDescribeIdentityIdFormatQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeIdentityIdFormatHeaders headers;
    public PostDescribeIdentityIdFormatRequest withHeaders(PostDescribeIdentityIdFormatHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeIdentityIdFormatRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}