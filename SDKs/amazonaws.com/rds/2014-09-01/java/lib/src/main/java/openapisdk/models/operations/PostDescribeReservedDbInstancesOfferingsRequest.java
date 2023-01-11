package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedDbInstancesOfferingsRequest {
    public PostDescribeReservedDbInstancesOfferingsQueryParams queryParams;
    public PostDescribeReservedDbInstancesOfferingsRequest withQueryParams(PostDescribeReservedDbInstancesOfferingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReservedDbInstancesOfferingsHeaders headers;
    public PostDescribeReservedDbInstancesOfferingsRequest withHeaders(PostDescribeReservedDbInstancesOfferingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReservedDbInstancesOfferingsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}