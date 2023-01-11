package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEnvironmentHealthRequest {
    public PostDescribeEnvironmentHealthQueryParams queryParams;
    public PostDescribeEnvironmentHealthRequest withQueryParams(PostDescribeEnvironmentHealthQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEnvironmentHealthHeaders headers;
    public PostDescribeEnvironmentHealthRequest withHeaders(PostDescribeEnvironmentHealthHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEnvironmentHealthRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}