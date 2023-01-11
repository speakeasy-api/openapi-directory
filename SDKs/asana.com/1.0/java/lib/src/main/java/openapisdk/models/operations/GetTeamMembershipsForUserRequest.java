package openapisdk.models.operations;



public class GetTeamMembershipsForUserRequest {
    public GetTeamMembershipsForUserPathParams pathParams;
    public GetTeamMembershipsForUserRequest withPathParams(GetTeamMembershipsForUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetTeamMembershipsForUserQueryParams queryParams;
    public GetTeamMembershipsForUserRequest withQueryParams(GetTeamMembershipsForUserQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}