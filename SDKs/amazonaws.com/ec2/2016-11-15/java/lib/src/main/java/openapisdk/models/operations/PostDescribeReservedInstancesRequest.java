package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedInstancesRequest {
    public PostDescribeReservedInstancesQueryParams queryParams;
    public PostDescribeReservedInstancesRequest withQueryParams(PostDescribeReservedInstancesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReservedInstancesHeaders headers;
    public PostDescribeReservedInstancesRequest withHeaders(PostDescribeReservedInstancesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReservedInstancesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}