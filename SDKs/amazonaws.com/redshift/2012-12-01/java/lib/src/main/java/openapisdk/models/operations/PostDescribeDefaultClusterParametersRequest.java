package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDefaultClusterParametersRequest {
    public PostDescribeDefaultClusterParametersQueryParams queryParams;
    public PostDescribeDefaultClusterParametersRequest withQueryParams(PostDescribeDefaultClusterParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDefaultClusterParametersHeaders headers;
    public PostDescribeDefaultClusterParametersRequest withHeaders(PostDescribeDefaultClusterParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDefaultClusterParametersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}