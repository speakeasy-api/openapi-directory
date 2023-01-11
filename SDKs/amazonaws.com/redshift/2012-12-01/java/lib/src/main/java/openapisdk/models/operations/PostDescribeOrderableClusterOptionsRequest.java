package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeOrderableClusterOptionsRequest {
    public PostDescribeOrderableClusterOptionsQueryParams queryParams;
    public PostDescribeOrderableClusterOptionsRequest withQueryParams(PostDescribeOrderableClusterOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeOrderableClusterOptionsHeaders headers;
    public PostDescribeOrderableClusterOptionsRequest withHeaders(PostDescribeOrderableClusterOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeOrderableClusterOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}