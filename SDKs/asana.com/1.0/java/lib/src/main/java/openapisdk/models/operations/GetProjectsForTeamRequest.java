package openapisdk.models.operations;



public class GetProjectsForTeamRequest {
    public GetProjectsForTeamPathParams pathParams;
    public GetProjectsForTeamRequest withPathParams(GetProjectsForTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetProjectsForTeamQueryParams queryParams;
    public GetProjectsForTeamRequest withQueryParams(GetProjectsForTeamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}