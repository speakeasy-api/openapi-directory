package openapisdk.models.operations;



public class GetTeamMembershipsForTeamRequest {
    public GetTeamMembershipsForTeamPathParams pathParams;
    public GetTeamMembershipsForTeamRequest withPathParams(GetTeamMembershipsForTeamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamMembershipsForTeamQueryParams queryParams;
    public GetTeamMembershipsForTeamRequest withQueryParams(GetTeamMembershipsForTeamQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}