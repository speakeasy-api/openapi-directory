package openapisdk.models.operations;



public class GetPutRolePolicyResponse {
    public byte[] body;
    public GetPutRolePolicyResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPutRolePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPutRolePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}