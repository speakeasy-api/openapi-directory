package openapisdk.models.operations;



public class GetUsersForTeamRequest {
    public GetUsersForTeamPathParams pathParams;
    public GetUsersForTeamRequest withPathParams(GetUsersForTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetUsersForTeamQueryParams queryParams;
    public GetUsersForTeamRequest withQueryParams(GetUsersForTeamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}