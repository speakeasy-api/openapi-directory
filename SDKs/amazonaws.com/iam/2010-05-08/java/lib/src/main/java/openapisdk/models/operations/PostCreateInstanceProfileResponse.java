package openapisdk.models.operations;



public class PostCreateInstanceProfileResponse {
    public byte[] body;
    public PostCreateInstanceProfileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreateInstanceProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreateInstanceProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}