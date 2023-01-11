package openapisdk.models.operations;



public class AllergiesUpdateRequest {
    public AllergiesUpdatePathParams pathParams;
    public AllergiesUpdateRequest withPathParams(AllergiesUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AllergiesUpdateQueryParams queryParams;
    public AllergiesUpdateRequest withQueryParams(AllergiesUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AllergiesUpdateSecurity security;
    public AllergiesUpdateRequest withSecurity(AllergiesUpdateSecurity security) {
        this.security = security;
        return this;
    }
}