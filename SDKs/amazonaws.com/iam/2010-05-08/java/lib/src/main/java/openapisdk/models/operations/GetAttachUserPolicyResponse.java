package openapisdk.models.operations;



public class GetAttachUserPolicyResponse {
    public byte[] body;
    public GetAttachUserPolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAttachUserPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAttachUserPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}