package openapisdk.models.operations;



public class AllergiesReadRequest {
    public AllergiesReadPathParams pathParams;
    public AllergiesReadRequest withPathParams(AllergiesReadPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AllergiesReadQueryParams queryParams;
    public AllergiesReadRequest withQueryParams(AllergiesReadQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AllergiesReadSecurity security;
    public AllergiesReadRequest withSecurity(AllergiesReadSecurity security) {
        this.security = security;
        return this;
    }
}