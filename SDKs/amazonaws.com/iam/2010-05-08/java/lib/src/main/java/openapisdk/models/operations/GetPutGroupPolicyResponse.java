package openapisdk.models.operations;



public class GetPutGroupPolicyResponse {
    public byte[] body;
    public GetPutGroupPolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPutGroupPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPutGroupPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}