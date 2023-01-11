package openapisdk.models.operations;



public class FunctionsListRequest {
    public FunctionsListQueryParams queryParams;
    public FunctionsListRequest withQueryParams(FunctionsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FunctionsListSecurity security;
    public FunctionsListRequest withSecurity(FunctionsListSecurity security) {
        this.security = security;
        return this;
    }
}