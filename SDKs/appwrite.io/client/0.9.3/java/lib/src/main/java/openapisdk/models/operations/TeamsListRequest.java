package openapisdk.models.operations;



public class TeamsListRequest {
    public TeamsListQueryParams queryParams;
    public TeamsListRequest withQueryParams(TeamsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TeamsListSecurity security;
    public TeamsListRequest withSecurity(TeamsListSecurity security) {
        this.security = security;
        return this;
    }
}