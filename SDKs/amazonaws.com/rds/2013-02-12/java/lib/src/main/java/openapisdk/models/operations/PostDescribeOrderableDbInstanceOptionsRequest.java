package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeOrderableDbInstanceOptionsRequest {
    public PostDescribeOrderableDbInstanceOptionsQueryParams queryParams;
    public PostDescribeOrderableDbInstanceOptionsRequest withQueryParams(PostDescribeOrderableDbInstanceOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeOrderableDbInstanceOptionsHeaders headers;
    public PostDescribeOrderableDbInstanceOptionsRequest withHeaders(PostDescribeOrderableDbInstanceOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeOrderableDbInstanceOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}