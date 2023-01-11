package openapisdk.models.operations;



public class GetDirectDebitsForMandateUuidResponse {
    public String contentType;
    public GetDirectDebitsForMandateUuidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetDirectDebitsForMandateUuidDirectDebits directDebits;
    public GetDirectDebitsForMandateUuidResponse withDirectDebits(GetDirectDebitsForMandateUuidDirectDebits directDebits) {
        this.directDebits = directDebits;
        return this;
    }
    public Long statusCode;
    public GetDirectDebitsForMandateUuidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}