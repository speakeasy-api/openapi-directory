package openapisdk.models.operations;



public class GetReturnPolicyResponse {
    public String contentType;
    public GetReturnPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReturnPolicy returnPolicy;
    public GetReturnPolicyResponse withReturnPolicy(openapisdk.models.shared.ReturnPolicy returnPolicy) {
        this.returnPolicy = returnPolicy;
        return this;
    }
    public Long statusCode;
    public GetReturnPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}