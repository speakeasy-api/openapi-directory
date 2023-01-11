package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeGlobalClustersRequest {
    public PostDescribeGlobalClustersQueryParams queryParams;
    public PostDescribeGlobalClustersRequest withQueryParams(PostDescribeGlobalClustersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeGlobalClustersHeaders headers;
    public PostDescribeGlobalClustersRequest withHeaders(PostDescribeGlobalClustersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeGlobalClustersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}