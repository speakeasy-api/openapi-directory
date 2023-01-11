package openapisdk.models.operations;



public class GetItemConditionPoliciesRequest {
    public GetItemConditionPoliciesPathParams pathParams;
    public GetItemConditionPoliciesRequest withPathParams(GetItemConditionPoliciesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetItemConditionPoliciesQueryParams queryParams;
    public GetItemConditionPoliciesRequest withQueryParams(GetItemConditionPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetItemConditionPoliciesSecurity security;
    public GetItemConditionPoliciesRequest withSecurity(GetItemConditionPoliciesSecurity security) {
        this.security = security;
        return this;
    }
}