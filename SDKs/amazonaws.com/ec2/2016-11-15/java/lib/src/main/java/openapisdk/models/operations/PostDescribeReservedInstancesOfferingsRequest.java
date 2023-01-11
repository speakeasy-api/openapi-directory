package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedInstancesOfferingsRequest {
    public PostDescribeReservedInstancesOfferingsQueryParams queryParams;
    public PostDescribeReservedInstancesOfferingsRequest withQueryParams(PostDescribeReservedInstancesOfferingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReservedInstancesOfferingsHeaders headers;
    public PostDescribeReservedInstancesOfferingsRequest withHeaders(PostDescribeReservedInstancesOfferingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReservedInstancesOfferingsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}