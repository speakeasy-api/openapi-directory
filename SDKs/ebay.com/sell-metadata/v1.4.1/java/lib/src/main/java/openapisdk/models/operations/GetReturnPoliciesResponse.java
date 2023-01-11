package openapisdk.models.operations;



public class GetReturnPoliciesResponse {
    public String contentType;
    public GetReturnPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReturnPolicyResponse returnPolicyResponse;
    public GetReturnPoliciesResponse withReturnPolicyResponse(openapisdk.models.shared.ReturnPolicyResponse returnPolicyResponse) {
        this.returnPolicyResponse = returnPolicyResponse;
        return this;
    }
    public Long statusCode;
    public GetReturnPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}