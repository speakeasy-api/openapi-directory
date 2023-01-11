package openapisdk.models.operations;



public class GetAutomotivePartsCompatibilityPoliciesRequest {
    public GetAutomotivePartsCompatibilityPoliciesPathParams pathParams;
    public GetAutomotivePartsCompatibilityPoliciesRequest withPathParams(GetAutomotivePartsCompatibilityPoliciesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAutomotivePartsCompatibilityPoliciesQueryParams queryParams;
    public GetAutomotivePartsCompatibilityPoliciesRequest withQueryParams(GetAutomotivePartsCompatibilityPoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetAutomotivePartsCompatibilityPoliciesSecurity security;
    public GetAutomotivePartsCompatibilityPoliciesRequest withSecurity(GetAutomotivePartsCompatibilityPoliciesSecurity security) {
        this.security = security;
        return this;
    }
}