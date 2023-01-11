package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetCapacityReservationUsageRequest {
    public PostGetCapacityReservationUsageQueryParams queryParams;
    public PostGetCapacityReservationUsageRequest withQueryParams(PostGetCapacityReservationUsageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostGetCapacityReservationUsageHeaders headers;
    public PostGetCapacityReservationUsageRequest withHeaders(PostGetCapacityReservationUsageHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostGetCapacityReservationUsageRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}