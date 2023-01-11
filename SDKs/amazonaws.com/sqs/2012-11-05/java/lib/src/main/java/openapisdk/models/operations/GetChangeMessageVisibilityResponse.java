package openapisdk.models.operations;



public class GetChangeMessageVisibilityResponse {
    public byte[] body;
    public GetChangeMessageVisibilityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetChangeMessageVisibilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChangeMessageVisibilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}