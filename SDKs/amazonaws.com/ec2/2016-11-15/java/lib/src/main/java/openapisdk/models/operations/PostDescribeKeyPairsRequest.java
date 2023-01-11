package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeKeyPairsRequest {
    public PostDescribeKeyPairsQueryParams queryParams;
    public PostDescribeKeyPairsRequest withQueryParams(PostDescribeKeyPairsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeKeyPairsHeaders headers;
    public PostDescribeKeyPairsRequest withHeaders(PostDescribeKeyPairsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeKeyPairsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}