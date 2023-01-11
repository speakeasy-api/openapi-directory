package openapisdk.models.operations;



public class GetListIdentityPoliciesResponse {
    public byte[] body;
    public GetListIdentityPoliciesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListIdentityPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListIdentityPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}