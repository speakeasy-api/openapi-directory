package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedInstancesListingsRequest {
    public PostDescribeReservedInstancesListingsQueryParams queryParams;
    public PostDescribeReservedInstancesListingsRequest withQueryParams(PostDescribeReservedInstancesListingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReservedInstancesListingsHeaders headers;
    public PostDescribeReservedInstancesListingsRequest withHeaders(PostDescribeReservedInstancesListingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReservedInstancesListingsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}