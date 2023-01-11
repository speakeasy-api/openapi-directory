package openapisdk.models.operations;



public class PostGetIdentityPoliciesResponse {
    public byte[] body;
    public PostGetIdentityPoliciesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostGetIdentityPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostGetIdentityPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}