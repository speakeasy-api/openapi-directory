package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteSubnetCidrReservationRequest {
    public PostDeleteSubnetCidrReservationQueryParams queryParams;
    public PostDeleteSubnetCidrReservationRequest withQueryParams(PostDeleteSubnetCidrReservationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeleteSubnetCidrReservationHeaders headers;
    public PostDeleteSubnetCidrReservationRequest withHeaders(PostDeleteSubnetCidrReservationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeleteSubnetCidrReservationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}