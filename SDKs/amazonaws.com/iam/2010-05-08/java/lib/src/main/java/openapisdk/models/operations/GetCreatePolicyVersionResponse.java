package openapisdk.models.operations;



public class GetCreatePolicyVersionResponse {
    public byte[] body;
    public GetCreatePolicyVersionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCreatePolicyVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCreatePolicyVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}