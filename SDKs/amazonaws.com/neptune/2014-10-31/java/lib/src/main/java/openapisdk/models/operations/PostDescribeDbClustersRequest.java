package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeDbClustersRequest {
    public PostDescribeDbClustersQueryParams queryParams;
    public PostDescribeDbClustersRequest withQueryParams(PostDescribeDbClustersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeDbClustersHeaders headers;
    public PostDescribeDbClustersRequest withHeaders(PostDescribeDbClustersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeDbClustersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}