package openapisdk.models.operations;



public class PostGetPolicyVersionResponse {
    public byte[] body;
    public PostGetPolicyVersionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetPolicyVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetPolicyVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}