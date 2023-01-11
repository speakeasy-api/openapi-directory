package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetSubnetCidrReservationsRequest {
    public PostGetSubnetCidrReservationsQueryParams queryParams;
    public PostGetSubnetCidrReservationsRequest withQueryParams(PostGetSubnetCidrReservationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetSubnetCidrReservationsHeaders headers;
    public PostGetSubnetCidrReservationsRequest withHeaders(PostGetSubnetCidrReservationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetSubnetCidrReservationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}