package openapisdk.models.operations;



public class PostDeletePolicyVersionResponse {
    public byte[] body;
    public PostDeletePolicyVersionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostDeletePolicyVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostDeletePolicyVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}