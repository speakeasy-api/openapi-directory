package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedNodesRequest {
    public PostDescribeReservedNodesQueryParams queryParams;
    public PostDescribeReservedNodesRequest withQueryParams(PostDescribeReservedNodesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReservedNodesHeaders headers;
    public PostDescribeReservedNodesRequest withHeaders(PostDescribeReservedNodesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReservedNodesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}