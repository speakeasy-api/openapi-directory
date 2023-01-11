package openapisdk.models.operations;



public class GetReturnPoliciesRequest {
    public GetReturnPoliciesQueryParams queryParams;
    public GetReturnPoliciesRequest withQueryParams(GetReturnPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetReturnPoliciesSecurity security;
    public GetReturnPoliciesRequest withSecurity(GetReturnPoliciesSecurity security) {
        this.security = security;
        return this;
    }
}