package openapisdk.models.operations;



public class ConsentFormsUpdateRequest {
    public ConsentFormsUpdatePathParams pathParams;
    public ConsentFormsUpdateRequest withPathParams(ConsentFormsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ConsentFormsUpdateQueryParams queryParams;
    public ConsentFormsUpdateRequest withQueryParams(ConsentFormsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ConsentFormsUpdateSecurity security;
    public ConsentFormsUpdateRequest withSecurity(ConsentFormsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}