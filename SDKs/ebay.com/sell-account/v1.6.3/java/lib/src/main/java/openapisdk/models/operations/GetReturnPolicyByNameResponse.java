package openapisdk.models.operations;



public class GetReturnPolicyByNameResponse {
    public String contentType;
    public GetReturnPolicyByNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ReturnPolicy returnPolicy;
    public GetReturnPolicyByNameResponse withReturnPolicy(openapisdk.models.shared.ReturnPolicy returnPolicy) {
        this.returnPolicy = returnPolicy;
        return this;
    }
    public Long statusCode;
    public GetReturnPolicyByNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}