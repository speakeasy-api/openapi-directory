package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeInstanceTypesRequest {
    public PostDescribeInstanceTypesQueryParams queryParams;
    public PostDescribeInstanceTypesRequest withQueryParams(PostDescribeInstanceTypesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeInstanceTypesHeaders headers;
    public PostDescribeInstanceTypesRequest withHeaders(PostDescribeInstanceTypesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeInstanceTypesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}