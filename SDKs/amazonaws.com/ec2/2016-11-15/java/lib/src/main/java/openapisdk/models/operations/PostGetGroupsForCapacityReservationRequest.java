package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetGroupsForCapacityReservationRequest {
    public PostGetGroupsForCapacityReservationQueryParams queryParams;
    public PostGetGroupsForCapacityReservationRequest withQueryParams(PostGetGroupsForCapacityReservationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetGroupsForCapacityReservationHeaders headers;
    public PostGetGroupsForCapacityReservationRequest withHeaders(PostGetGroupsForCapacityReservationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetGroupsForCapacityReservationRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}