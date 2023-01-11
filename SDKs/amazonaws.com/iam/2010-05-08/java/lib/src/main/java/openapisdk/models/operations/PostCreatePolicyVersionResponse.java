package openapisdk.models.operations;



public class PostCreatePolicyVersionResponse {
    public byte[] body;
    public PostCreatePolicyVersionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostCreatePolicyVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCreatePolicyVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}