package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClusterEndpointsRequest {
    public PostDescribeDbClusterEndpointsQueryParams queryParams;
    public PostDescribeDbClusterEndpointsRequest withQueryParams(PostDescribeDbClusterEndpointsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbClusterEndpointsHeaders headers;
    public PostDescribeDbClusterEndpointsRequest withHeaders(PostDescribeDbClusterEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbClusterEndpointsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}