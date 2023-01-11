package openapisdk.models.operations;



public class GetItemConditionPoliciesResponse {
    public String contentType;
    public GetItemConditionPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ItemConditionPolicyResponse itemConditionPolicyResponse;
    public GetItemConditionPoliciesResponse withItemConditionPolicyResponse(openapisdk.models.shared.ItemConditionPolicyResponse itemConditionPolicyResponse) {
        this.itemConditionPolicyResponse = itemConditionPolicyResponse;
        return this;
    }
    public Long statusCode;
    public GetItemConditionPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}