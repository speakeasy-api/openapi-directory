package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeHostReservationsRequest {
    public PostDescribeHostReservationsQueryParams queryParams;
    public PostDescribeHostReservationsRequest withQueryParams(PostDescribeHostReservationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeHostReservationsHeaders headers;
    public PostDescribeHostReservationsRequest withHeaders(PostDescribeHostReservationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeHostReservationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}