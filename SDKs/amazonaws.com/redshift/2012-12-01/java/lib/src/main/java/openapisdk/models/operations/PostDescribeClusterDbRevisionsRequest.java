package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterDbRevisionsRequest {
    public PostDescribeClusterDbRevisionsQueryParams queryParams;
    public PostDescribeClusterDbRevisionsRequest withQueryParams(PostDescribeClusterDbRevisionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClusterDbRevisionsHeaders headers;
    public PostDescribeClusterDbRevisionsRequest withHeaders(PostDescribeClusterDbRevisionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClusterDbRevisionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}