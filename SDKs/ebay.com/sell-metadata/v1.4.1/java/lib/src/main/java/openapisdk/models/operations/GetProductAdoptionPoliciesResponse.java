package openapisdk.models.operations;



public class GetProductAdoptionPoliciesResponse {
    public String contentType;
    public GetProductAdoptionPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProductAdoptionPolicyResponse productAdoptionPolicyResponse;
    public GetProductAdoptionPoliciesResponse withProductAdoptionPolicyResponse(openapisdk.models.shared.ProductAdoptionPolicyResponse productAdoptionPolicyResponse) {
        this.productAdoptionPolicyResponse = productAdoptionPolicyResponse;
        return this;
    }
    public Long statusCode;
    public GetProductAdoptionPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}