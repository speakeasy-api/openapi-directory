package openapisdk.models.operations;



public class PostSimulateCustomPolicyResponse {
    public byte[] body;
    public PostSimulateCustomPolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostSimulateCustomPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostSimulateCustomPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}