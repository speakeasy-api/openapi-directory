package openapisdk.models.operations;



public class PostSimulatePrincipalPolicyResponse {
    public byte[] body;
    public PostSimulatePrincipalPolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSimulatePrincipalPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSimulatePrincipalPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}