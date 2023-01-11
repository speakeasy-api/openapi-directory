package openapisdk.models.operations;



public class GetRiddleRequest {
    public GetRiddleQueryParams queryParams;
    public GetRiddleRequest withQueryParams(GetRiddleQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRiddleSecurity security;
    public GetRiddleRequest withSecurity(GetRiddleSecurity security) {
        this.security = security;
        return this;
    }
}