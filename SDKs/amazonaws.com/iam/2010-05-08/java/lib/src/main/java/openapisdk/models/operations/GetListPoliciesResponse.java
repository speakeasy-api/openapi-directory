package openapisdk.models.operations;



public class GetListPoliciesResponse {
    public byte[] body;
    public GetListPoliciesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetListPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetListPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}