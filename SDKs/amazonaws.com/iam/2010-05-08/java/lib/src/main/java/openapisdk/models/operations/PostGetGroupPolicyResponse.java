package openapisdk.models.operations;



public class PostGetGroupPolicyResponse {
    public byte[] body;
    public PostGetGroupPolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetGroupPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetGroupPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}