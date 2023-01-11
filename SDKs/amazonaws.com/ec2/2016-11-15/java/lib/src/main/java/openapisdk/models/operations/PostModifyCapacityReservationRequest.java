package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyCapacityReservationRequest {
    public PostModifyCapacityReservationQueryParams queryParams;
    public PostModifyCapacityReservationRequest withQueryParams(PostModifyCapacityReservationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyCapacityReservationHeaders headers;
    public PostModifyCapacityReservationRequest withHeaders(PostModifyCapacityReservationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyCapacityReservationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}