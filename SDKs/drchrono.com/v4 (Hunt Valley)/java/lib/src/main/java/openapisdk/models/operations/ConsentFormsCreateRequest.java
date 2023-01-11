package openapisdk.models.operations;



public class ConsentFormsCreateRequest {
    public ConsentFormsCreateQueryParams queryParams;
    public ConsentFormsCreateRequest withQueryParams(ConsentFormsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ConsentFormsCreateSecurity security;
    public ConsentFormsCreateRequest withSecurity(ConsentFormsCreateSecurity security) {
        this.security = security;
        return this;
    }
}