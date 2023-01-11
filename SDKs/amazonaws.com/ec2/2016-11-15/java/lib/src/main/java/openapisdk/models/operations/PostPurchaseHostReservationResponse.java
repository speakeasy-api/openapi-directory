package openapisdk.models.operations;



public class PostPurchaseHostReservationResponse {
    public byte[] body;
    public PostPurchaseHostReservationResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPurchaseHostReservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPurchaseHostReservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}