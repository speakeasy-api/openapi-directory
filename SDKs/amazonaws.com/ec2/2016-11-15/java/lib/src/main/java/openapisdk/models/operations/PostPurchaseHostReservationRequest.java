package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPurchaseHostReservationRequest {
    public PostPurchaseHostReservationQueryParams queryParams;
    public PostPurchaseHostReservationRequest withQueryParams(PostPurchaseHostReservationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostPurchaseHostReservationHeaders headers;
    public PostPurchaseHostReservationRequest withHeaders(PostPurchaseHostReservationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostPurchaseHostReservationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}