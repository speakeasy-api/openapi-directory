package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeWarmPoolRequest {
    public PostDescribeWarmPoolQueryParams queryParams;
    public PostDescribeWarmPoolRequest withQueryParams(PostDescribeWarmPoolQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeWarmPoolHeaders headers;
    public PostDescribeWarmPoolRequest withHeaders(PostDescribeWarmPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeWarmPoolRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}