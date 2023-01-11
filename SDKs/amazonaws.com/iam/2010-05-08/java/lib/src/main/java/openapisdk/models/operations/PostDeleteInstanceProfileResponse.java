package openapisdk.models.operations;



public class PostDeleteInstanceProfileResponse {
    public byte[] body;
    public PostDeleteInstanceProfileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeleteInstanceProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeleteInstanceProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}