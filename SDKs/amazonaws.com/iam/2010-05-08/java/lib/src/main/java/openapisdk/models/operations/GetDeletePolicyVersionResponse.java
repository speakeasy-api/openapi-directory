package openapisdk.models.operations;



public class GetDeletePolicyVersionResponse {
    public byte[] body;
    public GetDeletePolicyVersionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetDeletePolicyVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDeletePolicyVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}