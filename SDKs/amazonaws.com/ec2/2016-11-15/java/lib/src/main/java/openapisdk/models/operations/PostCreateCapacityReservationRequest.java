package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCapacityReservationRequest {
    public PostCreateCapacityReservationQueryParams queryParams;
    public PostCreateCapacityReservationRequest withQueryParams(PostCreateCapacityReservationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateCapacityReservationHeaders headers;
    public PostCreateCapacityReservationRequest withHeaders(PostCreateCapacityReservationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateCapacityReservationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}