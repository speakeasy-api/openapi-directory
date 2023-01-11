package openapisdk.models.operations;



public class SearchperpackageRequest {
    public SearchperpackageQueryParams queryParams;
    public SearchperpackageRequest withQueryParams(SearchperpackageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchperpackageSecurity security;
    public SearchperpackageRequest withSecurity(SearchperpackageSecurity security) {
        this.security = security;
        return this;
    }
}