package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedDbInstancesRequest {
    public PostDescribeReservedDbInstancesQueryParams queryParams;
    public PostDescribeReservedDbInstancesRequest withQueryParams(PostDescribeReservedDbInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReservedDbInstancesHeaders headers;
    public PostDescribeReservedDbInstancesRequest withHeaders(PostDescribeReservedDbInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReservedDbInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}