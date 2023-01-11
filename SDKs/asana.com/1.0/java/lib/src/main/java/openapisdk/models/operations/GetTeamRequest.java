package openapisdk.models.operations;



public class GetTeamRequest {
    public GetTeamPathParams pathParams;
    public GetTeamRequest withPathParams(GetTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamQueryParams queryParams;
    public GetTeamRequest withQueryParams(GetTeamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}