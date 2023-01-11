package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEnvironmentsRequest {
    public PostDescribeEnvironmentsQueryParams queryParams;
    public PostDescribeEnvironmentsRequest withQueryParams(PostDescribeEnvironmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEnvironmentsHeaders headers;
    public PostDescribeEnvironmentsRequest withHeaders(PostDescribeEnvironmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEnvironmentsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}