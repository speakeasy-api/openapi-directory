package openapisdk.models.operations;



public class ListClassesRequest {
    public ListClassesQueryParams queryParams;
    public ListClassesRequest withQueryParams(ListClassesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListClassesSecurity security;
    public ListClassesRequest withSecurity(ListClassesSecurity security) {
        this.security = security;
        return this;
    }
}