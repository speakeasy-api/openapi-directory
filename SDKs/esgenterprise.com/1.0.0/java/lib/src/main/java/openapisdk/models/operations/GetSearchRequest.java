package openapisdk.models.operations;



public class GetSearchRequest {
    public GetSearchQueryParams queryParams;
    public GetSearchRequest withQueryParams(GetSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSearchSecurity security;
    public GetSearchRequest withSecurity(GetSearchSecurity security) {
        this.security = security;
        return this;
    }
}