package openapisdk.models.operations;



public class GetRiddleSearchRequest {
    public GetRiddleSearchQueryParams queryParams;
    public GetRiddleSearchRequest withQueryParams(GetRiddleSearchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRiddleSearchSecurity security;
    public GetRiddleSearchRequest withSecurity(GetRiddleSearchSecurity security) {
        this.security = security;
        return this;
    }
}