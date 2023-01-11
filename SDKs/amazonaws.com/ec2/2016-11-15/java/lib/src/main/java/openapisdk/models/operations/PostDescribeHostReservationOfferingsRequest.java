package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeHostReservationOfferingsRequest {
    public PostDescribeHostReservationOfferingsQueryParams queryParams;
    public PostDescribeHostReservationOfferingsRequest withQueryParams(PostDescribeHostReservationOfferingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeHostReservationOfferingsHeaders headers;
    public PostDescribeHostReservationOfferingsRequest withHeaders(PostDescribeHostReservationOfferingsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeHostReservationOfferingsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}