package openapisdk.models.operations;



public class GetRepositoriesRequest {
    public GetRepositoriesQueryParams queryParams;
    public GetRepositoriesRequest withQueryParams(GetRepositoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetRepositoriesSecurity security;
    public GetRepositoriesRequest withSecurity(GetRepositoriesSecurity security) {
        this.security = security;
        return this;
    }
}