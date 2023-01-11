package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbParametersRequest {
    public PostDescribeDbParametersQueryParams queryParams;
    public PostDescribeDbParametersRequest withQueryParams(PostDescribeDbParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbParametersHeaders headers;
    public PostDescribeDbParametersRequest withHeaders(PostDescribeDbParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbParametersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}