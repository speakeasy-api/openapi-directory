package openapisdk.models.operations;



public class PostChangeMessageVisibilityResponse {
    public byte[] body;
    public PostChangeMessageVisibilityResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostChangeMessageVisibilityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostChangeMessageVisibilityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}