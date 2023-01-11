package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedNodeOfferingsRequest {
    public PostDescribeReservedNodeOfferingsQueryParams queryParams;
    public PostDescribeReservedNodeOfferingsRequest withQueryParams(PostDescribeReservedNodeOfferingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReservedNodeOfferingsHeaders headers;
    public PostDescribeReservedNodeOfferingsRequest withHeaders(PostDescribeReservedNodeOfferingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReservedNodeOfferingsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}