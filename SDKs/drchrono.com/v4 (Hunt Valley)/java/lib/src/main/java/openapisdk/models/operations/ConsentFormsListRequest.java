package openapisdk.models.operations;



public class ConsentFormsListRequest {
    public ConsentFormsListQueryParams queryParams;
    public ConsentFormsListRequest withQueryParams(ConsentFormsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ConsentFormsListSecurity security;
    public ConsentFormsListRequest withSecurity(ConsentFormsListSecurity security) {
        this.security = security;
        return this;
    }
}