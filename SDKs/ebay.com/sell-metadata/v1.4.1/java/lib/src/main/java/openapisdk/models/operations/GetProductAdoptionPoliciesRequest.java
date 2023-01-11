package openapisdk.models.operations;



public class GetProductAdoptionPoliciesRequest {
    public GetProductAdoptionPoliciesPathParams pathParams;
    public GetProductAdoptionPoliciesRequest withPathParams(GetProductAdoptionPoliciesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProductAdoptionPoliciesQueryParams queryParams;
    public GetProductAdoptionPoliciesRequest withQueryParams(GetProductAdoptionPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetProductAdoptionPoliciesSecurity security;
    public GetProductAdoptionPoliciesRequest withSecurity(GetProductAdoptionPoliciesSecurity security) {
        this.security = security;
        return this;
    }
}