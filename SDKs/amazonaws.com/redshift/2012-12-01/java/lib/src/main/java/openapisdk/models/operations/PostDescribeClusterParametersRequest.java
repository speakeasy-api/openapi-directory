package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterParametersRequest {
    public PostDescribeClusterParametersQueryParams queryParams;
    public PostDescribeClusterParametersRequest withQueryParams(PostDescribeClusterParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClusterParametersHeaders headers;
    public PostDescribeClusterParametersRequest withHeaders(PostDescribeClusterParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClusterParametersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}