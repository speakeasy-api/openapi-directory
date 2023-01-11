package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClusterTracksRequest {
    public PostDescribeClusterTracksQueryParams queryParams;
    public PostDescribeClusterTracksRequest withQueryParams(PostDescribeClusterTracksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClusterTracksHeaders headers;
    public PostDescribeClusterTracksRequest withHeaders(PostDescribeClusterTracksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClusterTracksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}