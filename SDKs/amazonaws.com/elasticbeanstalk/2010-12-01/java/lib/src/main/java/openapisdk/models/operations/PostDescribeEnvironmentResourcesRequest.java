package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeEnvironmentResourcesRequest {
    public PostDescribeEnvironmentResourcesQueryParams queryParams;
    public PostDescribeEnvironmentResourcesRequest withQueryParams(PostDescribeEnvironmentResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeEnvironmentResourcesHeaders headers;
    public PostDescribeEnvironmentResourcesRequest withHeaders(PostDescribeEnvironmentResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeEnvironmentResourcesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}