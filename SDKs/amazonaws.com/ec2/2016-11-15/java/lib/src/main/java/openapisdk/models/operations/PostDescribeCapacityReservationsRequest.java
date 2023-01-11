package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeCapacityReservationsRequest {
    public PostDescribeCapacityReservationsQueryParams queryParams;
    public PostDescribeCapacityReservationsRequest withQueryParams(PostDescribeCapacityReservationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeCapacityReservationsHeaders headers;
    public PostDescribeCapacityReservationsRequest withHeaders(PostDescribeCapacityReservationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeCapacityReservationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}