package openapisdk.models.operations;



public class PostAttachRolePolicyResponse {
    public byte[] body;
    public PostAttachRolePolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAttachRolePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAttachRolePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}