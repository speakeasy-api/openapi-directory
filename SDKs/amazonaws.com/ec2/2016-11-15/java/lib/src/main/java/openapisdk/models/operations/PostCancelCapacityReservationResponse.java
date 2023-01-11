package openapisdk.models.operations;



public class PostCancelCapacityReservationResponse {
    public byte[] body;
    public PostCancelCapacityReservationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCancelCapacityReservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCancelCapacityReservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}