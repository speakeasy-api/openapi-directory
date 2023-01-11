package openapisdk.models.operations;



public class GetFactSearchRequest {
    public GetFactSearchQueryParams queryParams;
    public GetFactSearchRequest withQueryParams(GetFactSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetFactSearchSecurity security;
    public GetFactSearchRequest withSecurity(GetFactSearchSecurity security) {
        this.security = security;
        return this;
    }
}