package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedCacheNodesRequest {
    public PostDescribeReservedCacheNodesQueryParams queryParams;
    public PostDescribeReservedCacheNodesRequest withQueryParams(PostDescribeReservedCacheNodesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReservedCacheNodesHeaders headers;
    public PostDescribeReservedCacheNodesRequest withHeaders(PostDescribeReservedCacheNodesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReservedCacheNodesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}