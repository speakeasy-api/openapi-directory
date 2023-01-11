package openapisdk.models.operations;



public class AllergiesCreateRequest {
    public AllergiesCreateQueryParams queryParams;
    public AllergiesCreateRequest withQueryParams(AllergiesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AllergiesCreateSecurity security;
    public AllergiesCreateRequest withSecurity(AllergiesCreateSecurity security) {
        this.security = security;
        return this;
    }
}