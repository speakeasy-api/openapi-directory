package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetHostReservationPurchasePreviewRequest {
    public PostGetHostReservationPurchasePreviewQueryParams queryParams;
    public PostGetHostReservationPurchasePreviewRequest withQueryParams(PostGetHostReservationPurchasePreviewQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetHostReservationPurchasePreviewHeaders headers;
    public PostGetHostReservationPurchasePreviewRequest withHeaders(PostGetHostReservationPurchasePreviewHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetHostReservationPurchasePreviewRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}