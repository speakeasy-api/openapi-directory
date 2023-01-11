package openapisdk.models.operations;



public class ListRequest {
    public ListQueryParams queryParams;
    public ListRequest withQueryParams(ListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListSecurity security;
    public ListRequest withSecurity(ListSecurity security) {
        this.security = security;
        return this;
    }
}