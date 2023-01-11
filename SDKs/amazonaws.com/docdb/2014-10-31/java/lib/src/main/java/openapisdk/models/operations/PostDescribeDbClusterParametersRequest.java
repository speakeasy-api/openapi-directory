package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClusterParametersRequest {
    public PostDescribeDbClusterParametersQueryParams queryParams;
    public PostDescribeDbClusterParametersRequest withQueryParams(PostDescribeDbClusterParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbClusterParametersHeaders headers;
    public PostDescribeDbClusterParametersRequest withHeaders(PostDescribeDbClusterParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbClusterParametersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}