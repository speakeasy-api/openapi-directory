package openapisdk.models.operations;



public class GetTeamsRequest {
    public GetTeamsQueryParams queryParams;
    public GetTeamsRequest withQueryParams(GetTeamsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTeamsSecurity security;
    public GetTeamsRequest withSecurity(GetTeamsSecurity security) {
        this.security = security;
        return this;
    }
}