package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateSubnetCidrReservationRequest {
    public PostCreateSubnetCidrReservationQueryParams queryParams;
    public PostCreateSubnetCidrReservationRequest withQueryParams(PostCreateSubnetCidrReservationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostCreateSubnetCidrReservationHeaders headers;
    public PostCreateSubnetCidrReservationRequest withHeaders(PostCreateSubnetCidrReservationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostCreateSubnetCidrReservationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}