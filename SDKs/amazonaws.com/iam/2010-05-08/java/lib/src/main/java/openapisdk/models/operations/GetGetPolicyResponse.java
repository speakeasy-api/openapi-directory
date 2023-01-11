package openapisdk.models.operations;



public class GetGetPolicyResponse {
    public byte[] body;
    public GetGetPolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetGetPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGetPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}