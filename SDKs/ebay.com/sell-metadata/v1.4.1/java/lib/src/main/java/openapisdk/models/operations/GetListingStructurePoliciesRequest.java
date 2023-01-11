package openapisdk.models.operations;



public class GetListingStructurePoliciesRequest {
    public GetListingStructurePoliciesPathParams pathParams;
    public GetListingStructurePoliciesRequest withPathParams(GetListingStructurePoliciesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetListingStructurePoliciesQueryParams queryParams;
    public GetListingStructurePoliciesRequest withQueryParams(GetListingStructurePoliciesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetListingStructurePoliciesSecurity security;
    public GetListingStructurePoliciesRequest withSecurity(GetListingStructurePoliciesSecurity security) {
        this.security = security;
        return this;
    }
}