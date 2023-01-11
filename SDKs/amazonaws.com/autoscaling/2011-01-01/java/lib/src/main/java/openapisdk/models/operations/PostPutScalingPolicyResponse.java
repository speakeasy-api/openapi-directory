package openapisdk.models.operations;



public class PostPutScalingPolicyResponse {
    public byte[] body;
    public PostPutScalingPolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPutScalingPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPutScalingPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}