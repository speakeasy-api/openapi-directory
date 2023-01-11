package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeByoipCidrsRequest {
    public PostDescribeByoipCidrsQueryParams queryParams;
    public PostDescribeByoipCidrsRequest withQueryParams(PostDescribeByoipCidrsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeByoipCidrsHeaders headers;
    public PostDescribeByoipCidrsRequest withHeaders(PostDescribeByoipCidrsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeByoipCidrsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}