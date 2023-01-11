package openapisdk.models.operations;



public class PostGetInstanceProfileResponse {
    public byte[] body;
    public PostGetInstanceProfileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetInstanceProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetInstanceProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}